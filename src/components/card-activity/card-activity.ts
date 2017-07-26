import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-activity',
  templateUrl: 'card-activity.html'
})

export class CardActivityComponent 
{
  @Input() activity: object;

  constructor() {}
}
