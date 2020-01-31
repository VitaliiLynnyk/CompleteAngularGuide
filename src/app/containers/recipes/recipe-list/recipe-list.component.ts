import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.html',
  styleUrls: ['./recipe-list.scss']
})
export class RecipeListComponent {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'simple test',
      'https://images.media-allrecipes.com/images/89754.jpg'
    )
  ];
}
