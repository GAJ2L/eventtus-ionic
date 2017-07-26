import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})

export class ActivitiesPage 
{
	activities : Array<Object>;
  	
  	constructor(public navCtrl: NavController, public navParams: NavParams) 
  	{
  		this.activities = navParams.get("activities");
  		console.log(this.activities);
  	}
}
