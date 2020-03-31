import { Action } from '@ngrx/store';

import { Ingredient } from '../../../models/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';

export class AddIngrediend implements Action {
  readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredient) { }
}

export class AddIngrediends implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) { }
}

export class UpdateIngrediend implements Action {
  readonly type = UPDATE_INGREDIENT;

  constructor(public payload: { index: number, ingredient: Ingredient }) { }
}

export type ShoppingListActions = AddIngrediend | AddIngrediends | UpdateIngrediend;
