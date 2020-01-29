import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  imports: [
    HeaderModule,
    RecipesModule,
    ShoppingListModule
  ],
  exports: [
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent
  ],
  declarations: []
})
export class ContainersModule {}
