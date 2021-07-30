import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private accountService:AccountService){}
  title = 'shop';
  isLoggedin(){
    return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
  }
  ngOnInit(): void {
  }

}
