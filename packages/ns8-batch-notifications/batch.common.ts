import { Observable } from '@nativescript/core/data/observable';

export abstract class Common extends Observable {
  abstract get native(): com.batch.android.Batch | Batch;
  abstract get user(): com.batch.android.Batch.User | BatchUser;
  abstract get messaging(): com.batch.android.Batch.Messaging | BatchMessaging;
  abstract get push(): com.batch.android.Batch.Push | BatchPush;
  abstract get installationId(): string;
  abstract init(API_KEY: string, automaticIntegration?: boolean): com.batch.android.Batch | Batch;
  abstract setCustomUserId(userId: string): void;
  abstract setDoNotDisturb(value: boolean): void;
  abstract fetchNotifications(): boolean | void;
}