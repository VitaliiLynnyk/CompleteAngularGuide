import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { RecipeService } from '../../../services/recipe.service';

import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.html',
  styleUrls: ['./recipe-list.scss']
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
