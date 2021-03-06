import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { shoppingListReducer } from './containers/shopping-list/store/shopping-list.reducer';

import { AuthService } from './services/auth.service';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
import { AuthInterceptorService } from './containers/auth/auth.interceptor.service';

import { AuthGuard } from './containers/auth/auth.guard';

import { PortalPageModule } from './portal/portal.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({ shoppingList: shoppingListReducer }),
    BrowserModule,
    PortalPageModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    RecipeService,
    ShoppingListService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
