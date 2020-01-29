import { NgModule } from '@angular/core';

import { RecipeListModule } from './recipe-list/recipe-list.module';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  imports: [
    RecipeListModule
  ],
  exports: [
    RecipesComponent
  ],
  declarations: [
    RecipesComponent,
    RecipeDetailComponent
  ]
})
export class RecipesModule {}
