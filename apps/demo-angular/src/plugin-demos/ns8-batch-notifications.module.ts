import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Ns8BatchNotificationsComponent } from './ns8-batch-notifications.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: Ns8BatchNotificationsComponent }])],
  declarations: [Ns8BatchNotificationsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class Ns8BatchNotificationsModule {}
