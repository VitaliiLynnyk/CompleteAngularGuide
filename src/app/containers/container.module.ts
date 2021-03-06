import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownDirective } from '../directives/dropdown.directive';

import { AuthComponent } from './auth/auth.component';
import { AlertComponent } from './alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeInitialComponent } from './recipes/recipe-initial/recipe-initial.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthComponent,
    AlertComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    RecipeInitialComponent
  ],
  declarations: [
    AuthComponent,
    AlertComponent,
    HeaderComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeInitialComponent
  ]
})
export class ContainerModule { }
