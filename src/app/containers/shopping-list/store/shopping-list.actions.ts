import { Action } from '@ngrx/store';

import { Ingredient } from '../../../models/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngrediend implements Action {
  readonly type = ADD_INGREDIENT;
  payload: Ingredient;
}