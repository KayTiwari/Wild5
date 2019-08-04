// import React, { Component } from 'react'
import { Text, View, AlertIOS } from "react-native";
import PushNotification from "react-native-push-notification";


class PushNotificationsIOS {
  constructor(onRegister, onNotification) {
    this.configure(onNotification);

    this.lastId = 0;
  }

  configure = (onRegister, onNotification) => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: onRegister, //this._onRegister.bind(this),

      // (required) Called when a remote or local notification is opened or received
      onNotification: onNotification, //this._onNotification,

      // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
      //  senderID: gcm,

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       */
      requestPermissions: true
    });
  };

  // PushNotification.localNotificationSchedule({
  //... You can use all the options from localNotifications
  // message: "My Notification Message", // (required)
  // repeatType: 'day',
  //});

  scheduleNotif = (pillar, date) => {
    // AlertIOS.alert('schedulerunning')
    this.lastId++;

    let config = {
      date: new Date(Date.now() + 5 * 1000), // in 30 secs
      alertAction: "view",
      repeatType: "time",
      repeatTime: 86400000,
      message: "Hello",
      number: "10"
    };

    if (pillar === "exercise") {
      config.repeatType = "time",
      config.repeatTime = 86400000,
      config.date = date
      config.message = "Remember to Exercise daily, FID";
    } else if (pillar === "mind") {
      config.date = new Date(Date.now() + 5 * 1000);
      config.message = "Take a moment and meditate, it will help you through your day";
    } else if (pillar === "sleep") {
      config.date = new Date(Date.now() + 5 * 1000);
      config.message = "Get to bed at a good hour";
    } else if (pillar === "social") {
      config.date = new Date(Date.now() + 5 * 1000);
      config.message = "Reach out and be Social";
    } else if (pillar === "nutrition") {
      config.date = new Date(Date.now() + 5 * 1000);
      config.message = "Remember to track you nutrition habits";
    } else if (pillar === "sleepquest"){
      config.date = new Date(date);
      config.message = "Time to wind down before your bedtime"
    }
    PushNotification.localNotificationSchedule(config);
    console.log(config)
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default PushNotificationsIOS;
