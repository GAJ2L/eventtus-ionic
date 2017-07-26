import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: 'button.html'
})

export class ButtonComponent 
{
  	@Input("label") label : string;
	@Input("icon")  icon  : string;

  	constructor() {}
}
