import { Component } from '@angular/core';

import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.scss'],
  providers: [RecipeService]
})
export class RecipesComponent {}
