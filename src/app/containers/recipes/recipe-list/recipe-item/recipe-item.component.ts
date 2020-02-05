import { Component, Input } from '@angular/core';

import { Recipe } from '../../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.html',
  styleUrls: ['./recipe-item.scss']
})
export class RecipeItemComponent {
  @Input()
  recipe: Recipe;

  @Input()
  index: number;
}
