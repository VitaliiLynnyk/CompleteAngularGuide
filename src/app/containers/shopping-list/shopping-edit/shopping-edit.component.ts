import { NgForm } from '@angular/forms';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../../models/ingredient.model';

import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.html',
  styleUrls: [ './shopping-edit.scss' ]
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: false})
  nameInputRef: ElementRef;

  @ViewChild('amountInput', {static: false})
  amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  addItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
