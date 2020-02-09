import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { ShoppingListService } from './shopping-list.service';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(
    private http: HttpClient,
    private shoppingListService: ShoppingListService
  ) {}

  fetchRecipes() {
    this.http.get('https://angulardevguide.firebaseio.com/recipes.json')
        .subscribe((res: Recipe[]) => {
          this.setRecipes(res);
        });
  }

  storeRecipes() {
    this.http.put('https://angulardevguide.firebaseio.com/recipes.json', this.recipes)
        .subscribe((res: Recipe[]) => console.log(res));
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number): Recipe {
    return this.recipes[index];
  }

  onAddToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
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
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
