import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { Ingredient } from '../../../models/ingredient.model';

import { ShoppingListService } from '../../../services/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.html',
  styleUrls: [ './shopping-edit.scss' ]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: false})
  slForm: NgForm;

  private subscription: Subscription;
  private editMode = false;
  private editedItemIndex: number;
  private editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscribeToStartedEditItem();
  }

  addItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  private subscribeToStartedEditItem() {
    this.subscription = this.shoppingListService.startedEditing
                            .subscribe((index: number) => {
                              this.editMode = true;
                              this.editedItemIndex = index;
                              this.editedItem = this.shoppingListService.getIngredient(index);
                              this.slForm.setValue({
                                name: this.editedItem.name,
                                amount: this.editedItem.amount
                              });
                            });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
