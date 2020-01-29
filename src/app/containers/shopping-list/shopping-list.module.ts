import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';


@NgModule({
  imports: [BrowserModule],
  exports: [
    ShoppingListComponent
  ],
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
  ]
})
export class ShoppingListModule {}
