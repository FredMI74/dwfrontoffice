import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidTokenService } from '@app/shared/services/valid-token.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentUser: string = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    public router: Router,
    private validTokenService: ValidTokenService
  ) {}

  ngOnInit(): void {
    if (this.currentUser?.tokenJwt === undefined) {
      this.router.navigateByUrl('/login');
    } else {
      this.validTokenService
        .groupUser(
          this.currentUser?.id,
          this.currentUser?.token,
          this.currentUser?.tokenJwt
        )
        .subscribe((response) => {
          console.log('res = ', response);
        });
    }
  }
}
