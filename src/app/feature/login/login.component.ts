import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  control: FormGroup;

  constructor(private fb : FormBuilder) {
    this.control = fb.group({});
   }

  ngOnInit(): void {
    this.control = this.fb.group({
      login: ['', [Validators.required]],
      currentPassword: ['', [Validators.required]]
    });
  }

  onSubmit(){
    console.log("chegou");
  }

}

