import { NgModule } from '@angular/core';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';


@NgModule({
  imports: [],
  exports: [
    ShoppingListComponent
  ],
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
  ]
})
export class ShoppingListModule {}
