import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {

  }

  logout() {
    this.auth.logout();
  }

}
