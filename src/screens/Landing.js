import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions
} from "react-native";
import KS30title from "../images/KS30_578_113.png";
import wild5title from "../images/wild5_logo_resized4.png";
import Navbar from "../components/Navbar";
import Navigation from "../components/LandingNavigation";
import HEROlogo from "../images/herologo.png";
import LinearGradient from "react-native-linear-gradient";
import firebase from "react-native-firebase";
import { format } from "date-fns";
import { spliceString } from "../utils/dateSplice";
import { scopeRefByUserHero } from "../utils/heroRef";
import LandingView from "../components/common/LandingView";
import HeroSurvey from '../components/common/InitialHero'
import PushNotificationIOS from '../components/common/PushNotificationsIOS'

const { width } = Dimensions.get("window");

function Landing(props) {
  const [hero, setHero] = useState(false);
  const [hero2, setHero2] = useState(false);
  const [initialSurveydate, setInitialSurveyDate] = useState("");

  useEffect(() => {
    this.PushNotificationIOS = new PushNotificationIOS(onNotif)
    checkHeroData();
  }, []);

  useEffect(() => {
    const date = format(new Date(), "YYYY-MM-DD-HH-mm");
    const user = firebase.auth().currentUser;
    const [scopedUser] = user.email.split(".") || undefined;
    firebase
      .database()
      .ref(`HERO/${scopedUser}`)
      .once("value", snap => {
        if (snap.val() !== null && initialSurveydate !== "") {
          const data = [Object.keys(snap.val())].sort();
          const dateDiff = spliceString(initialSurveydate, date);
          console.log(data.length)
          console.log(dateDiff);
          if (dateDiff) {
            return (
            setHero2(true),
            this.PushNotificationIOS.scheduleNotif("HERO")
            )
          } else {
            if([8,9,10,11,12,13].includes(dateDiff) && data.length === 1 || [15,16,17,18,19,20].includes(dateDiff) && [1,2].includes(data.length) || [22,23,24,25,26,27].includes(dateDiff) && [1,2,3].includes(data.length) || [29,31].includes(dateDiff) && [1,2,3,4].includes(data.length)){
              setHero2(true);
            } else setHero2(false),
            this.PushNotificationIOS.cancel('6');
          } 
        }
      });
    
  }, [initialSurveydate]);

  checkHeroData = () => {
    const heroRef = scopeRefByUserHero("HERO");
    console.log(heroRef);
    firebase
      .database()
      .ref(heroRef)
      .once("value", snapshot => {
        if (snapshot.val() !== null) {
          setInitialSurveyDate(snapshot.val());
          setHero(true);
        }
      });
  };

  onNotif = notif => {
    console.log(notif);
    Alert.alert(notif.title, notif.message);
  };


  return !hero || hero2 ? (
    <LandingView hero={hero} hero2={hero2} />
  ) : (
    
      <HeroSurvey hero={hero} hero2={hero2} />
    
  );
}


export default Landing