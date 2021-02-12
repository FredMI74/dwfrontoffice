import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Enterprises } from '../models/enterprise';
import { User } from '../models/user';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  currentUser : User = new User();
  enterprise : Enterprises = new Enterprises();
  
  @Input() nome_usuario : string = "";
  @Input() nome_empresa : string = "";
  @Input() logo : string = "";

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {

    const s = localStorage.getItem('currentUser') || '';
    if (s != ''){
      this.currentUser =  JSON.parse(s);
      this.nome_usuario = this.currentUser.nome;
      const emp = localStorage.getItem('enterpriseUSer') || '';

      this.enterprise = JSON.parse(emp);
      console.log('empresa ==>>', emp);
      this.nome_empresa = this.enterprise.conteudo[0].fantasia;
      this.logo = this.enterprise.conteudo[0].logo;
    }
    
  }

  logout() {
    this.loginService.logout();
  }
}
