import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
})
export class ModulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //init_plugins();
  }

}
