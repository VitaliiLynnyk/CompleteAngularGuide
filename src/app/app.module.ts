import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { RecipesComponent } from './containers/recipes/recipes.component';
import { RecipeListComponent } from './containers/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './containers/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './containers/recipes/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
