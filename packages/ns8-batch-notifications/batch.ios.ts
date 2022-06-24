import { Common } from './batch.common';

export class BatchNS extends Common {

    get native() {
        return Batch;
    }

    get user() {
        return BatchUser;
    }

    get messaging() {
        return BatchMessaging;
    }

    get push() {
        return BatchPush;
    }

    get installationId() {
        return this.user.installationID();
    }


    init(API_KEY: string, automaticIntegration = true) {
        if (!automaticIntegration) {
            this.push.disableAutomaticIntegration();
        }
        this.native.startWithAPIKey(API_KEY);
        this.push.requestNotificationAuthorization();

        return this.native;
    };

    setCustomUserId(userId: string) {
        const editor = this.user.editor();
        editor.setIdentifier(userId);
        editor.save();
    }

    setDoNotDisturb(value: boolean) {
        this.messaging.doNotDisturb = value;
    }

    fetchNotifications() {
        this.setDoNotDisturb(false);
        return this.messaging.showPendingMessage();
    }
}
