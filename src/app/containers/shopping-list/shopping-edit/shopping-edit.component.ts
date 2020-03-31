import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import * as ShoppingListActions from '../store/shopping-list.actions';

import { Ingredient } from '../../../models/ingredient.model';

import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.html',
  styleUrls: [ './shopping-edit.scss' ]
})
export class ShoppingEditComponent {

  @ViewChild('f', { static: false })
  slForm: NgForm;

  private subscription: Subscription;
  private editMode = false;
  private editedItemIndex: number;
  private editedItem: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) { }

  addItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngrediend({ index: this.editedItemIndex, ingredient: newIngredient }));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngrediend(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  private subscribeToStartedEditItem() {
    // this.subscription = this.shoppingListService.startedEditing
    //   .subscribe((index: number) => {
    //     this.editMode = true;
    //     this.editedItemIndex = index;
    //     this.editedItem = this.shoppingListService.getIngredient(index);
    //     this.slForm.setValue({
    //       name: this.editedItem.name,
    //       amount: this.editedItem.amount
    //     });
    //   });
  }

  deleteIngredient() {
    this.store.dispatch(new ShoppingListActions.DeleteIngrediend(this.editedItemIndex));
    this.resetForm();
  }

  resetForm() {
    this.slForm.reset();
    this.editMode = false;
  }
}
