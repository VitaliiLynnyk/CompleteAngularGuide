import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { RecipesComponent } from '../containers/recipes/recipes.component';
import { ShoppingListComponent } from '../containers/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from '../containers/recipes/recipe-detail/recipe-detail.component';
import { RecipeInitialComponent } from '../containers/recipes/recipe-initial/recipe-initial.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeInitialComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class PortalRoutingModule {}
