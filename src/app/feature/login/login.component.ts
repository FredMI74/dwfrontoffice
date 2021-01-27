import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  control: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
 // returnUrl: string;

  constructor(
    private fb : FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    )
    {
    //this.control = fb.group({});
   }

  ngOnInit(): void {

    this.control = this.fb.group({
      login: ['', Validators.required],
      currentPassword: ['', Validators.required]
  });
  }

  onSubmit(){
    console.log("chegou");
  }

}

