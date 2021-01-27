import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  // returnUrl: string;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      currentPassword: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(
      'data = ',
      this.loginForm.controls.email?.value,
      this.loginForm.controls.currentPassword?.value,
      document.getElementById('email')
    );
    this.loginService
      .login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('currentPassword')?.value
      )
      .subscribe((response) => {
        if (response.resultado.erro === false) {
          localStorage.setItem(
            'currentUser',
            JSON.stringify(response.conteudo)
          );
          this.router.navigateByUrl('/');
        }
      });
  }
}
