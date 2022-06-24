import { Common } from './batch.common';
import { Utils } from '@nativescript/core';

export class BatchNS extends Common {
    private lib = com.batch.android;

    get native() {
        return this.lib.Batch;
    }

    get user() {
        return this.native.User;
    }

    get messaging() {
        return this.native.Messaging;
    }

    get push() {
        return this.native.Push;
    }

    get installationId() {
        return this.user.getInstallationID();
    }

    init(API_KEY: string) {
        this.native.setConfig(new this.lib.Config(API_KEY));
        const ctx = Utils.ad.getApplicationContext();
        const pushIconId = ctx.getResources().getIdentifier('push_icon', 'drawable', ctx.getPackageName());
        this.push.setSmallIconResourceId(pushIconId);

        return this.native;
    };

    activityLifeCycleHelper() {
        return new this.lib.BatchActivityLifecycleHelper();
    }

    setCustomUserId(userId: string) {
        const editor = this.user.editor();
        editor.setIdentifier(userId);
        editor.save();
    }

    setDoNotDisturb(value: boolean) {
        this.messaging.setDoNotDisturbEnabled(value);
    }

    fetchNotifications() {
        this.setDoNotDisturb(false);
        const notifs = this.messaging.popPendingMessage();
        if (notifs) {
            this.messaging.show(Utils.android.getApplicationContext(), notifs);
        }
    }
}