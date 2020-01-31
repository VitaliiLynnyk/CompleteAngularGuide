import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.html',
  styleUrls: ['./shopping-edit.scss']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: false})
  nameInputRef: ElementRef;

  @ViewChild('amountInput', {static: false})
  amountInputRef: ElementRef;

  @Output()
  addIngredient = new EventEmitter<Ingredient>();

  addItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const amountName = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingName, amountName);
    this.addIngredient.emit(newIngredient);
  }
}
