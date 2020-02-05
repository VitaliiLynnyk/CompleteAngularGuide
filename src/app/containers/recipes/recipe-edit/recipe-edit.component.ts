import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.html',
  styleUrls: [ './recipe-edit.scss' ]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeToCheckMode();
  }

  subscribeToCheckMode() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
  }
}
