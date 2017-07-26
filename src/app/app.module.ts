import { BrowserModule }                            from '@angular/platform-browser';
import { ErrorHandler, NgModule }                   from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp }                                    from './app.component';
import { StatusBar }                                from '@ionic-native/status-bar';
import { SplashScreen }                             from '@ionic-native/splash-screen';
import { IonicStorageModule }                       from '@ionic/storage';
// components
import { CardEventComponent }                       from '../components/card-event/card-event';
import { ButtonComponent }                          from '../components/button/button';
import { CardActivityComponent }                    from '../components/card-activity/card-activity';
import { EventsPage }                               from '../pages/events/events';
import { EventPage }                                from '../pages/event/event';
import { ActivityPage }                             from '../pages/activity/activity';
import { ActivitiesPage }                           from '../pages/activities/activities';

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    EventPage,
    ActivitiesPage,
    ActivityPage,
    CardEventComponent,
    ButtonComponent,
    CardActivityComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__eventtus',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    EventPage,
    ActivitiesPage,
    ActivityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}