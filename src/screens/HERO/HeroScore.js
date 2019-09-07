import React, { useState, useEffect } from "react";
import { View, Dimensions, Image, StyleSheet, ImageBackground } from "react-native";
import { Text, Spinner } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";
import Navbar from "../../components/Navbar";
import HEROlogo from "../../images/herologo.png";
import AnimateNumber from "react-native-animate-number";
import Star from "../../images/wild5star_100_100.png";
import { scopeRefByUserAndDate } from "../../utils/firebase";

const screenheight = Dimensions.get("window").height;
const HeroScore = () => {

  const [data, setData] = useState(null)
  const [totalScore, setTotalScore] = useState(0)

  useEffect(()=> {
    const heroRef = scopeRefByUserAndDate("HERO");
    var database = firebase.database();
    var ref = database.ref(heroRef);
    ref.once("value", snapshot => {
      if(snapshot.val() !== null){
        gotData(snapshot.val())
    }});
  },[])
    
  

  gotData = data => {
    console.log(data);
    returnTotal(data);
    setData(data);
  };

  returnTotal = data => {
    let total = data.happyValue + data.enthusiasmValue + data.mentalWellValue + data.optimismValue + data.resilienceValue;
    setTotalScore(total);
  };

  totalReview = () => {
    if (totalScore === 0) {
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "0%",
            color: "#2e3131"
          }}
        >
          Keep it Going!
        </Text>
      );
    } else if (totalScore >= 10 && totalScore <= 20) {
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "0%",
            color: "#e47833"
          }}
        >
          Great Start!
        </Text>
      );
    } else if (totalScore >= 20 && totalScore <= 30) {
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "0%",
            color: "#f62459"
          }}
        >
          Amazing Work!
        </Text>
      );
    } else if (totalScore >= 40 && totalScore <= 49) {
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "0%",
            color: "#1e8bc3"
          }}
        >
          Outstanding work!
        </Text>
      );
    } else if (totalScore === 50) {
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "0%",
            color: "#a537fd"
          }}
        >
          Exceptional Work!
        </Text>
      );
    }
  };


    return (
      <View
        style={styles.containerView}
      >
        <View style={{ width: "80%", alignSelf: "center", marginTop: "15%" }}>
          <Image
            source={HEROlogo}
            style={{ width: "100%", resizeMode: "contain" }}
          />
        </View>

        <View>
          <Text style={styles.mainText}>Your HERO Score For This Week</Text>
        </View>

        <View>
          <Text style={styles.subTitleText}>TOTAL SCORE: 0 - 50</Text>
          <Text style={styles.subTitleText}>
            Higher scores indicate higher levels of wellness
          </Text>
        </View>

        <View style={{height: "25%", width: '50%', alignSelf:'center', alignItems:'center'}}>
          <ImageBackground source={Star} style={{alignSelf:'center',height: '100%', width:'100%', justifyContent:'center', margin:0, padding: 0}} imageStyle={{resizeMode:'contain'}}>
          <Text
            style={styles.scoreText}
          >
            <AnimateNumber
              value={totalScore}
              formatter={val => {
                return parseFloat(val).toFixed(0);
              }}
            />
          </Text>
          </ImageBackground>
        </View>

        <View>{totalScore ? totalReview() : <Spinner />}</View>

        <View>
          <Navbar />
        </View>
      </View>
    );
  }


export { HeroScore };

const styles = StyleSheet.create({
  subTitleText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    marginTop: "-10%"
  },
  mainText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    marginTop: "0%"
  },
  containerView: {
    flex: 1,
    justifyContent: "space-between",
    height: screenheight,
    backgroundColor: "white"
  },
  scoreText: {
    alignSelf:'center',
    textAlign: "center",
    fontSize: 48,
    fontWeight: "600",
    marginTop: 5,
    marginBottom: "0%",
  }
});
