import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  labelBtn = 'Entrar';
  title = 'dwfrontoffice';

  constructor(public router: Router){

  }

}
