import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidTokenService } from '@app/shared/services/valid-token.service';
import { User } from '../models/user';


@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
     
   currentUser : User = new User();

  constructor(
    public router: Router,
    private validTokenService: ValidTokenService
  ) {}

  ngOnInit(): void {
    const s = localStorage.getItem('currentUser') || '';
    if (s != ''){
      this.currentUser =  JSON.parse(s);
    }

    console.log(this.currentUser);
    if (this.currentUser.tokenJwt === '') {
      this.router.navigateByUrl('/login');
    } else {
        this.validTokenService
        .groupProd(
          this.currentUser.token,
          this.currentUser.tokenJwt
        )
        .subscribe((response) => {
          console.log(response)
           if (response.resultado.erro === true) {
            this.router.navigateByUrl('/login');
           }
        });
    }
  }
}
