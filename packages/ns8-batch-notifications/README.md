# @leoantares/ns8-batch-notifications

```javascript
ns plugin add @leoantares/ns8-batch-notifications
```

# Nativescript Batch plugin

Welcome to Batch's Nativescript Plugin!<br>
Batch is a fully fledged mobile engagement platform to execute CRM tactics over iOS, Android & mobile websites.<br>
The purpose of this plugin is to manage Push notifications, in-app messages and more.., for Android and IOS.<br>
This repository contains the plugin's source code and a demo application.

This plugin is an updated fork from [nativescript-batch-notifications](https://github.com/sully-group/nativescript-batch-notifications)

## Installation

NPM

```javascript
yarn ns8-batch-notifications
npm i ns8-batch-notifications
```

## Prerequisites / Requirements

First of all, you must [create a batch account](https://batch.com/register#/);<br>
Then a configuration is required for each platform;<br>
This process is explained through simple steps in batch official documentation.<br>
[IOS setup](https://batch.com/doc/android/prerequisites.html)<br>
[Android setup](https://batch.com/doc/ios/prerequisites.html)<br>
When you add your Firebase android project, download the `google-services.json` which you'll add to your NativeScript project at `app/App_Resources/Android/google-services.json`

For a quick start using the demo app :

- Override the bundle id in `package.json` in the demo directory
- Add the API keys with the ones generated by your batch account in the `.env` file

## Android initialization

We must override the OnCreate method.<br>
In order to do so, change the application name value in the AndroidManifest from com.tns.NativeScriptApplication to something like org.myApp.Application.<br>
Then, in the root dir, create a typescript file named : 'application.android.ts' and enter the bellow code.

```
const firebase = require('@nativescript/firebase');
// @ts-ignore
import { BatchNS } from 'nativescript-batch-notifications';

@NativeClass()
@JavaProxy('org.myApp.Application')
class Application extends android.app.Application {
  public onCreate(): void {
    super.onCreate()
    const batch = new BatchNS(process.env.BASH_ANDROID_KEY);
    this.registerActivityLifecycleCallbacks(batch.native.activityLifeCycleHelper());
    firebase.init().catch(console.dir);
  }
}
```

You also must add the following in your `webpack.config.js`.

```
webpack.chainWebpack(config => {
    if (webpack.Utils.platform.getPlatformName() === 'android') {
        // make sure the path to the applicatioon.android.(js|ts)
        // is relative to the webpack.config.js
        // you may need to use `./app/application.android if
        // your app source is located inside the ./app folder.
        config.entry('application').add('./app/application.android')
    }
})
```

## IOS initialization

We must setup a custom delegate; Override the app.ts in the root dir with the bellow code:

```
import { Application, isIOS } from "@nativescript/core";
// @ts-ignore
import { BatchNS } from "nativescript-batch-notifications";

if (isIOS) {
  @NativeClass
  class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
      new BatchNS(process.env.BATCH_IOS_KEY, false);

      return true;
    }
  }

  Application.ios.delegate = MyDelegate;
}
```

## Important notes !!

- (Android) In this plugin version we assume that the [nativescript firebase plugin](https://github.com/EddyVerbruggen/nativescript-plugin-firebase) is installed; This will be fixed in upcoming releases.
- (IOS) When generating the xcode project, you **MUST** toggle 'Push Notifications' in the capabilities tab.

## License

Apache License Version 2.0
