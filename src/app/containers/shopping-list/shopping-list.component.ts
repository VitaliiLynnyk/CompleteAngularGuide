import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from '../../services/shopping-list.service';

import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.html',
  styleUrls: ['./shopping-list.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }
}
