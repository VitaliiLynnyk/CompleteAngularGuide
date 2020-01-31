import { Component, Input } from '@angular/core';

import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.scss']
})
export class RecipeDetailComponent {
  @Input()
  recipe: Recipe;
}
