import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from '../../directives/dropdown.directive';

import { RecipeListModule } from './recipe-list/recipe-list.module';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RecipeListModule
  ],
  exports: [
    RecipesComponent,
    DropdownDirective
  ],
  declarations: [
    RecipesComponent,
    DropdownDirective,
    RecipeDetailComponent
  ]
})
export class RecipesModule {}
