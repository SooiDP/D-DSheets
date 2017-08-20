import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { AppRoutingModule } from '../../app-routing.module'

@Component({
  selector: 'top-nav',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.userService.purgeAuth()
  }
}