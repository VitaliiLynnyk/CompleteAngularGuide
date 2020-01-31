import { Component } from '@angular/core';

import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.scss']
})
export class RecipesComponent {
  selectedRecipe: Recipe;
}
