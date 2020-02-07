import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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
    private recipeService: RecipeService
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
    console.log(this.recipeForm);
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
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount)
            })
          );
        });
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImgPath),
      description: new FormControl(recipeDescription),
      ingredients: this.recipeIngredients
    });
  }

  addIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup(
        {
          name: new FormControl(),
          amount: new FormControl()
        }
      )
    );
  }
}
