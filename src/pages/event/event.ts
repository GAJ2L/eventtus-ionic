import { Component } 				from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivitiesPage }		    from '../../pages/activities/activities';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})

export class EventPage 
{
	event : Object;

	constructor(public navCtrl: NavController, public navParams: NavParams) 
	{
		this.event = navParams.get('event');
	}

	onActivities()
	{
		this.navCtrl.setRoot(ActivitiesPage,{
			'activities':this.event['activities']
		});
	}
}
