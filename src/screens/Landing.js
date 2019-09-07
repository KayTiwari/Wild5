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

const { width } = Dimensions.get("window");

export default function Landing() {
  const [hero, setHero] = useState(false);
  const [hero2, setHero2] = useState(false);
  const [initialSurveydate, setInitialSurveyDate] = useState("");
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    checkHeroData();
  }, []);

  useEffect(()=>{
    const date = format(new Date(), "YYYY-MM-DD-HH-mm");
    const user = firebase.auth().currentUser;
    const [scopedUser] = user.email.split(".");
    console.log(scopedUser);
    firebase
            .database()
            .ref(`HERO/${scopedUser}`)
            .once("value", snap => {
              if (snap.val() !== null && initialSurveydate !== "") {
                const data = [Object.keys(snap.val())].sort();
                  const dateDiff = spliceString(initialSurveydate,date );
                  console.log(dateDiff)
                  if (
                    dateDiff 
                    
                  ) {
                    return setHero2(true);
                  } else  setHero2(false);
              }
            });
  }, [initialSurveydate])

  checkHeroData = () => {
    const heroRef = scopeRefByUserHero("HERO");
    console.log(heroRef);
    firebase
      .database()
      .ref(heroRef)
      .once("value", snapshot => {
        if (snapshot.val() !== null) {
          setInitialSurveyDate(snapshot.val())
          setHero(true);
        }
      });
  };

  return !hero || hero2 ? (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView bounces={false}>
          <Image
            source={KS30title}
            style={{
              width: "80%",
              resizeMode: "contain",
              marginTop: "3%",
              alignSelf: "center"
            }}
          />
          <View style={{ marginTop: "2%", flex: 1 }}>
            <Navigation hero={hero} hero2={hero2} />
          </View>
          <Image
            source={wild5title}
            style={{
              width: "80%",
              marginTop: "25%",
              resizeMode: "contain",
              marginBottom: "2%",
              alignSelf: "center"
            }}
          />
        </ScrollView>
      </SafeAreaView>
      <Navbar homedisable />
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={KS30title}
          style={{
            width: "80%",
            resizeMode: "contain",
            marginTop: "3%",
            alignSelf: "center"
          }}
        />
        <View style={{ marginTop: "2%", flex: 1 }}>
          <Navigation hero={hero} hero2={hero2} />
        </View>

        <Image
          source={wild5title}
          style={{
            width: "80%",
            marginTop: "25%",
            resizeMode: "contain",
            marginBottom: "2%",
            alignSelf: "center"
          }}
        />
      </SafeAreaView>
      <Navbar homedisable />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: { color: "white", fontSize: 60 },
  title: { color: "white", fontSize: 18 },
  touchable: {
    backgroundColor: "transparent",
    marginBottom: 10,
    width: (1 / 2) * width - 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  item: {
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    height: 110
  }
});
