import { SuppliersService } from '../../suppliers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers-r',
  templateUrl: './suppliers-r.component.html',
  styleUrls: ['./suppliers-r.component.css']
})
export class SuppliersRComponent implements OnInit {

  suppliers = [];

  constructor(private suppliersService: SuppliersService) { }

  ngOnInit() {
    // alert('fsdfdsfsdfs');
    this.suppliersService.getAll().subscribe( data => {

      this.suppliers = data;
      // debugger;
      console.log('datgos', this.suppliers);
      
    });
  }





}
