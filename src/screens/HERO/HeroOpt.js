import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from 'react-native-firebase';
import { Slider } from "react-native-elements";
import { scopeRefByUserAndDate } from '../../utils/firebase'

const screenheight = Dimensions.get("window").height;
const HeroOpt = () => {
 

 const [optimismValue, setOptimismValue] = useState(0)

  submit = () => {
    const heroRef = scopeRefByUserAndDate('HERO')
    firebase
      .database()
      .ref(heroRef)
      .update({
        optimismValue
      });
    Actions.heroment();
  }

  feeling = () => {
    if (optimismValue === 0) {
      return (
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "10%",
            color: "red"
          }}
        >
          Not at all Optimistic
        </Text>
      );
    } else if (optimismValue >= 1 && optimismValue <= 3) {
      return (
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "10%",
            color: "orange"
          }}
        >
          Mildly Optimistic
        </Text>
      );
    } else if (optimismValue >= 4 && optimismValue <= 6) {
      return (
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "10%",
            color: "#fad859"
          }}
        >
          Moderately Optimistic
        </Text>
      );
    } else if (optimismValue >= 7 && optimismValue <= 9) {
      return (
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "10%",
            color: "#2ecc71"
          }}
        >
          Highly Optimistic
        </Text>
      );
    } else if (optimismValue === 10) {
      return (
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "10%",
            color: "#52b3d9"
          }}
        >
          Extremely Optimistic
        </Text>
      );
    }
  };


    return (
      <View style={{ backgroundColor: "white", height: screenheight }}>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              textAlign: "center",
              marginTop: "15%"
            }}
          >
            Optimism
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              textAlign: "center",
              marginTop: "10%"
            }}
          >
            On average, during the last 7 DAYS, how optimistic have you felt?
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "stretch",
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "10%"
          }}
        >
          <Slider
            value={optimismValue}
            step={1}
            minimumValue={0}
            maximumValue={10}
            onValueChange={value => setOptimismValue(value)}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              textAlign: "center",
              marginTop: "10%"
            }}
          >
            Value: {optimismValue}
          </Text>
          {feeling()}

          <View style={{ alignSelf: "center", marginTop: "20%" }}>
          <TouchableOpacity style={{alignSelf: "center", height: 60, width: 120, borderRadius:28, backgroundColor: "#041D5D", borderWidth: 1, borderColor:'black', justifyContent:'center', flexDirection:'row'}} onPress={() => submit()}>
            <Text style={{color:"#fff", fontSize: 24, fontWeight:'800', alignSelf:'center'}}>Next</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
    );
  }


export { HeroOpt };
