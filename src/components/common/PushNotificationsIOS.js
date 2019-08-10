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
      repeatType: "day",
      message: "",
      number: "10"
    };

    if (pillar === "exercise") {
      config.repeatType = "day"
      config.date = new Date(date)
      config.message = "Remember to Exercise Daily Following the FID Practices";
    } else if (pillar === "mind") {
      config.repeatType = "day"
      config.date = new Date(date);
      config.message = "Remember to Mindfully Meditate at Least 10 Minutes a Day";
    } else if (pillar === "sleep") {
      config.repeatType = "day"
      config.date = new Date(date);
      config.message = "Remember to Implement 4 or more of the 6 Sleep Hygiene Practices";
    } else if (pillar === "social") {
      config.repeatType = "day"
      config.date = new Date(date);
      config.message = "Remember to Socially Connect with at Least 2 People Today";
    } else if (pillar === "nutrition") {
      config.repeatType = "day"
      config.date = new Date(date);
      config.message = "Remember to Log Your Meals, Snacks, and Beevrages Including Alcohol";
    } else if (pillar === "sleepquest"){
      config.repeatType = "day"
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
