import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() label: string = 'Entrar' ;
  @Input() classUsed: string = 'defaultBtn';

  constructor() {
   }
}
