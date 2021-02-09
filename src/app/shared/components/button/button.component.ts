import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit  {

  @Input() label: string = 'Entrar' ;
  @Input() classUsed: string = 'defaultBtn';
  @Input() typeButton: string = '';
  @Input() icon: string = '';
  @Input() icon_space: string = '';

  constructor() {}

   ngOnInit(): void { 
    if (this.icon !='' ) {
      this.icon_space = '&nbsp;&nbsp;';
    }
   }
}
