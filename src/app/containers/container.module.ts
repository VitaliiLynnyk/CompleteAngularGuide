import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from '../directives/dropdown.directive';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent
  ],
  declarations: [
    HeaderComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipeDetailComponent
  ]
})
export class ContainerModule {
}
