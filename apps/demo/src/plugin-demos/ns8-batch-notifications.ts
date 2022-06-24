import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNs8BatchNotifications } from '@demo/shared';
import { } from '@leoantares/ns8-batch-notifications';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNs8BatchNotifications {

}