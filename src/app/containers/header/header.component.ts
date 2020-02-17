import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth = false;
  private userSub: Subscription;

  constructor(
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuth = !!user;
    });
  }

  fetchRecipes() {
    this.recipeService.fetchRecipes().subscribe();
  }

  logOut() {
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
