import React, { useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { Text, Button, Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from 'react-native-firebase';
import { Slider } from "react-native-elements";
import { scopeRefByUserAndDate } from '../../utils/firebase'
import {format} from 'date-fns';

const screenheight = Dimensions.get("window").height;
const HeroHappy = () => {
  
const [happyValue, setHappyValue] = useState(0)
const [date, setDate] =  useState(format(new Date(), 'YYYY-MM-DD'))




  

  submit = () => {
    const heroRef = scopeRefByUserAndDate('HERO')
    firebase
      .database()
      .ref(heroRef)
      .update({
        happyValue
      });
    Actions.heroenth();
  }

  feeling = () => {
    if (happyValue === 0) {
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
          Not at all Happy
        </Text>
      );
    } else if (happyValue >= 1 && happyValue <= 3) {
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
          Mildly Happy
        </Text>
      );
    } else if (happyValue >= 4 && happyValue <= 6) {
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
          Moderately Happy
        </Text>
      );
    } else if (happyValue >= 7 && happyValue <= 9) {
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
          Highly Happy
        </Text>
      );
    } else if (happyValue === 10) {
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
          Extremely Happy
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
            Happiness
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
            On average, during the last 7 DAYS, how happy have you felt?
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
            value={happyValue}
            step={1}
            minimumValue={0}
            maximumValue={10}
            onValueChange={value => setHappyValue(value)}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              textAlign: "center",
              marginTop: "10%"
            }}
          >
            Value: {happyValue}
          </Text>
          {feeling()}

          <View style={{ alignSelf: "center", marginTop: "20%" }}>
            <Button onPress={() => submit()} dark rounded large>
              <Text>Next</Text>
              <Icon name="arrow-forward" />
            </Button>
          </View>
        </View>
      </View>
    );
  }


export { HeroHappy };
