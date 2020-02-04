import { Component, Input } from '@angular/core';

import { Recipe } from '../../../models/recipe.model';

import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.scss']
})
export class RecipeDetailComponent {
  @Input()
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {}
}
