import { Component } from '@angular/core';

import { RecipeService } from '../../services/recipe.service';

import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.scss'],
  providers: [ RecipeService ]
})
export class RecipesComponent {
  selectedRecipe: Recipe;
}
