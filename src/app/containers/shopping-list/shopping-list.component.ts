import { Component } from '@angular/core';

import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.html',
  styleUrls: ['./shopping-list.scss']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5)
  ];

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
