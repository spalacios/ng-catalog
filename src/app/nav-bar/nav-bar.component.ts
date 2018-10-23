import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{
  isNavbarCollapsed:boolean = true;
  isAdmin:boolean = false;
  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.isAdmin = this.appUser.isAdmin;
    });
  }
   
  logout(){
    this.auth.logout();
  }

  collapsed(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
