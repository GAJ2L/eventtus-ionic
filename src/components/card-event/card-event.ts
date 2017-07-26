import { Component, Input } 		from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'card-event',
  templateUrl: 'card-event.html'
})

export class CardEventComponent 
{  
	@Input("event") event: object;
	
  	constructor(public navCtrl: NavController, public navParams: NavParams){}
}