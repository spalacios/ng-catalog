import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{
  isCollapsed = true;

  constructor(private auth: AuthService) {}
   
  logout(){
    this.auth.logout();
  }

}
