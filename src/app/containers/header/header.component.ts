import { Component } from '@angular/core';

import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent {
  constructor(private recipeService: RecipeService) {}
}
