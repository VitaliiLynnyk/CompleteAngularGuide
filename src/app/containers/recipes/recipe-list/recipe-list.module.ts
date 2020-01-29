import { NgModule } from '@angular/core';

import { RecipeListComponent } from './recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [],
  exports: [
    RecipeListComponent
  ],
  declarations: [
    RecipeItemComponent,
    RecipeListComponent
  ]
})
export class RecipeListModule {}
