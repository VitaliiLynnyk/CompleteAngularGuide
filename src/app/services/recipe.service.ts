import { EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'simple test',
      'https://images.media-allrecipes.com/images/89754.jpg'
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
