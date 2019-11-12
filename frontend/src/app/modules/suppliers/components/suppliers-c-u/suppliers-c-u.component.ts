import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers-c-u',
  templateUrl: './suppliers-c-u.component.html',
  styleUrls: ['./suppliers-c-u.component.css']
})
export class SuppliersCUComponent implements OnInit {


  formForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.formForm = this.formBuilder.group({
          name: ['', Validators.required],        
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.formForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formForm.value))
  }
}
