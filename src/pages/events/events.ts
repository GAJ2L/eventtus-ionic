import { Component } 	 from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage }	 from '../../pages/event/event';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'events',
  templateUrl: 'events.html'
})

export class EventsPage 
{
	events: Array<Object>;

	constructor(public navCtrl: NavController,private storage: Storage) 
	{  
		// set a key/value
		storage.set('name', 'Max');

		// Or to get a key/value pair
		storage.get('age').then((val) => {
			console.log('Your age is', val);
		});
		this.events = [];

		var obj = {
			id: 1,
		    name: 'XVII CETEC',
		    activities: [{ 
		    	name: "Palestra ONE",
		    	date: "2018-08-10",
		    },{ 
		    	name: "Palestra TWO",
		    	date: "2018-11-11",
		    }],
		    status: "Em progresso!"
		};

		var obj1 = {
			id: 2,
		    name: 'CRIE XP',
		    activities: [{ 
		    	name: "Palestra ONE",
		    	date: "2018-08-10",
		    }],
		    status: "Em espera!"
		};

		this.events.push(obj);
		this.events.push(obj1);
	}

	onEvent(event : object )
	{
		this.navCtrl.setRoot(EventPage,{
			'event':event
		});
	}
}
