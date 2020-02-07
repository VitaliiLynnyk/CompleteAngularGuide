import { Component, OnDestroy, OnInit } from '@angular/core';

import { RecipeService } from '../../../services/recipe.service';

import { Recipe } from '../../../models/recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.html',
  styleUrls: ['./recipe-list.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscribeRecipeChanged();
  }

  subscribeRecipeChanged() {
    this.subscribe = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
