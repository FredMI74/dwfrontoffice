import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dw-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {

  @Input() type : string = 'text';
  @Input() name : string = '';
  @Input() id : string = '';
  @Input() placeholder : string =  '';
  @Input() classInput : string = 'defaultInput';

  constructor() {
  }

}
