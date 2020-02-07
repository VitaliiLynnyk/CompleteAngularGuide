import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { RecipeService } from '../../../services/recipe.service';

import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.html',
  styleUrls: [ './recipe-edit.scss' ]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipeIngredients = new FormArray([]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscribeToCheckMode();
  }

  subscribeToCheckMode() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  submit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.cancel();
  }

  private initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByIndex(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imgPath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        recipe.ingredients.forEach((ingredient: Ingredient) => {
          this.recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        });
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imgPath: new FormControl(recipeImgPath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: this.recipeIngredients
    });
  }

  addIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup(
        {
          name: new FormControl(null, Validators.required),
          amount: new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
        }
      )
    );
  }

  deleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  cancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
