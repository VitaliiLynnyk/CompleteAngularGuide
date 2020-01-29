import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeListComponent } from './recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [BrowserModule],
  exports: [
    RecipeListComponent
  ],
  declarations: [
    RecipeItemComponent,
    RecipeListComponent
  ]
})
export class RecipeListModule {}
