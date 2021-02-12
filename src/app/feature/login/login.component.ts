import { Component, Input, OnInit } from '@angular/core';
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

  @Input() mensagem : string = "";

  // returnUrl: string;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      currentPassword: new FormControl(''),
    });
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  buscarDadosEmpresa(id_empresa: string, token : string, tokenJWT : string) : void{

    this.loginService
    .empresa(
      id_empresa,
      token,
      tokenJWT
    )
    .subscribe((response) => {
      if (response.resultado.erro === false) {
        localStorage.setItem(
          'enterpriseUSer',
          JSON.stringify(response)
        );
        this.router.navigateByUrl('/');
      }
    });
  }

 
  onSubmit() {
    this.loginService
      .login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('currentPassword')?.value
      )
      .subscribe((response) => {
        if (response.resultado.erro === false) {
          localStorage.clear;
          localStorage.setItem(
            'currentUser',
            JSON.stringify(response.conteudo)
          );
          this.buscarDadosEmpresa(response.conteudo.id_empresa, response.conteudo.token, response.conteudo.tokenJwt);
        }
        else {
          this.mensagem = response.resultado.mensagem;
        }
      });

    }
 
}
