import React, {useState, useEffect} from "react";
import {ActivityIndicator, View} from "react-native";
import firebase from "react-native-firebase";
import { format } from "date-fns";
import { spliceString } from "../utils/dateSplice";
import { scopeRefByUserHero } from "../utils/heroRef";
import LandingView from "../components/common/LandingView";
import HeroSurvey from '../components/common/InitialHero'


function Landing(props) {
  const [hero, setHero] = useState(false);
  const [hero2, setHero2] = useState(false);
  const [initialSurveydate, setInitialSurveyDate] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    checkHeroData();
  }, []);

  useEffect(() => {
    const date = format(new Date(), "YYYY-MM-DD-HH-mm");
    const user = firebase.auth().currentUser;
    const [scopedUser] = user.email.split(".") || undefined;

    setLoading(true);

    firebase
      .database()
      .ref(`HERO/${scopedUser}`)
      .once("value", snap => {
        if (snap.val() !== null && initialSurveydate !== "") {
          const data = [Object.keys(snap.val())].sort();
          const dateDiff = spliceString(initialSurveydate, date);

          if (dateDiff === true) {
            setLoading(false);
            setHero2(true);
            return;
          } else {
            if (
              ([8, 9, 10, 11, 12, 13].includes(dateDiff) &&
                data.length === 1) ||
              ([15, 16, 17, 18, 19, 20].includes(dateDiff) &&
                [1, 2].includes(data.length)) ||
              ([22, 23, 24, 25, 26, 27].includes(dateDiff) &&
                [1, 2, 3].includes(data.length)) ||
              ([29, 31].includes(dateDiff) &&
                [1, 2, 3, 4].includes(data.length))
            ) {
              setLoading(false);
              setHero2(true);
            } else {
              setHero2(false);
              setLoading(false);
            }
          }
        } else {
          setLoading(false);
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
    !loading ? (
      <LandingView hero={hero} hero2={hero2} />
    ) : (
      <LoadingIndicator />
    )
  ) : !loading ? (
    <HeroSurvey hero={hero} hero2={hero2} />
  ) : (
    <LoadingIndicator />
  );
}

export default Landing;

function LoadingIndicator() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <ActivityIndicator size="small" color="#041D5D" />
    </View>
  );
}
