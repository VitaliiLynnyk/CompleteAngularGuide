import { OnInit, Component } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { Recipe } from '../../../models/recipe.model';

import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.html',
  styleUrls: [ './recipe-detail.scss' ]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscribeToIdFromUrl();
  }

  subscribeToIdFromUrl() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeByIndex(this.id);
    });
  }
}
