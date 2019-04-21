import { AuthenticationService } from 'src/app/shared/services/auth/authentication.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() title = new EventEmitter();

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  changeTitle(name) {
    this.title.emit(name);
  }



  logout() {
    this.auth.logout();
  }



}
