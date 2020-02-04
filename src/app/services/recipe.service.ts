import { Recipe } from '../models/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'simple test',
      'https://images.media-allrecipes.com/images/89754.jpg'
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
