import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Recipe } from '../../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.html',
  styleUrls: ['./recipe-item.scss']
})
export class RecipeItemComponent {
  @Input()
  recipe: Recipe;

  @Output()
  selectedRecipe = new EventEmitter<void>();
}
