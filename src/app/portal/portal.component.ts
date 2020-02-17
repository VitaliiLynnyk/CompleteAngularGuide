import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.html',
  styleUrls: [ './portal.scss' ]
})
export class PortalComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogIn();
  }
}
