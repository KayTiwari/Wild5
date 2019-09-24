// import React, { Component } from 'react'
import { Text, View, Platform } from "react-native";
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
      console.log(date)
      Platform.OS === 'android' ?  config.id = '0' : config.userInfo = {id: '0'}
      config.repeatType = "day"
      config.date = new Date(date)
      config.message = "Remember to Exercise Daily Following the FID Practices";
    } else if (pillar === "mind") {
      Platform.OS === 'android' ?  config.id = '1' : config.userInfo = {id: '1'}
      config.repeatType = "day"
      config.date = new Date(date);
      config.message = "Remember to Mindfully Meditate at Least 10 Minutes a Day";
    } else if (pillar === "sleep") {
      Platform.OS === 'android' ?  config.id = '2' : config.userInfo = {id: '2'}
      config.repeatType = "day"
      config.date = new Date(date);
      config.message = "Remember to Implement 4 or more of the 6 Sleep Hygiene Practices";
    } else if (pillar === "social") {
      Platform.OS === 'android' ?  config.id = '3' : config.userInfo = {id: '3'}
      config.repeatType = "day"
      config.date = new Date(date);
      config.message = "Remember to Socially Connect with at Least 2 People Today";
    } else if (pillar === "nutrition") {
      Platform.OS === 'android' ?  config.id = '4' : config.userInfo = {id: '4'}
      config.repeatType = "day"
      config.date = new Date(date);
      config.message = "Remember to Log Your Meals, Snacks, and Beverages Including Alcohol";
    } else if (pillar === "sleepquest"){
      Platform.OS === 'android' ?  config.id = '5' : config.userInfo = {id: '5'}
      config.repeatType = "day"
      config.date = new Date(date);
      config.message = "Time to wind down before your bedtime"
    } else if (pillar === "HERO"){
      Platform.OS === 'android' ?  config.id = '6' : config.userInfo = {id: '6'}
      config.repeatType = 'day'
      config.date = new Date(Date.now() + 5 * 1000)
      config.message = "Fill out your HERO Wellness Survey"
    }
    PushNotification.localNotificationSchedule(config);
    console.log(config)
  };

  cancel = id => {
    console.log(id)
    PushNotification.cancelLocalNotifications({id: id})
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default PushNotificationsIOS;
