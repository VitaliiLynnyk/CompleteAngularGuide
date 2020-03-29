import { Subject } from 'rxjs';

import { Ingredient } from '../models/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();



  getIngredient(index: number) {
    return this.ingredients[ index ];
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[ index ] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
