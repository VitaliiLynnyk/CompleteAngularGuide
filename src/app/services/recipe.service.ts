import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Store } from '@ngrx/store';

import { AuthService } from './auth.service';
import { ShoppingListService } from './shopping-list.service';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

import * as ShoppingListActions from '../containers/shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(
    private http: HttpClient,
    private shoppingListService: ShoppingListService,
    private authService: AuthService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) { }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://angulardevguide.firebaseio.com/recipes.json').pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.setRecipes(recipes);
      })
    );
  }

  storeRecipes() {
    this.http.put('https://angulardevguide.firebaseio.com/recipes.json', this.recipes)
      .subscribe((res: Recipe[]) => console.log(res));
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number): Recipe {
    return this.recipes[ index ];
  }

  onAddToShoppingList(ingredients: Ingredient[]): void {
    this.store.dispatch(new ShoppingListActions.AddIngrediends(ingredients));
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[ index ] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
