import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeResolverService } from '../services/recipe-resolver.service';

import { AuthGuard } from '../containers/auth/auth.guard';

import { AuthComponent } from '../containers/auth/auth.component';
import { RecipesComponent } from '../containers/recipes/recipes.component';
import { RecipeEditComponent } from '../containers/recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from '../containers/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from '../containers/recipes/recipe-detail/recipe-detail.component';
import { RecipeInitialComponent } from '../containers/recipes/recipe-initial/recipe-initial.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        component: RecipeInitialComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [
          RecipeResolverService
        ]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [
          RecipeResolverService
        ]
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: 'recipes'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class PortalRoutingModule {
}
