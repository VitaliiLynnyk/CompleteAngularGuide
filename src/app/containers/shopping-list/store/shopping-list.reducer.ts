import { Ingredient } from '../../../models/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apple', 5)
  ]
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngrediend) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [ ...state.ingredients, action.payload ]
      }
  }
}