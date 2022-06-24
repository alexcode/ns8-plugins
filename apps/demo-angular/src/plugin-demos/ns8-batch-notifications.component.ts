import { Component, NgZone } from '@angular/core';
import { DemoSharedNs8BatchNotifications } from '@demo/shared';
import { } from '@leoantares/ns8-batch-notifications';

@Component({
	selector: 'demo-ns8-batch-notifications',
	templateUrl: 'ns8-batch-notifications.component.html',
})
export class Ns8BatchNotificationsComponent {
  
  demoShared: DemoSharedNs8BatchNotifications;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNs8BatchNotifications();
  }

}