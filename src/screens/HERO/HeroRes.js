import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { Text, Button, Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from 'react-native-firebase';
import { Slider } from "react-native-elements";
import Navbar from "../../components/Navbar";
import { scopeRefByUserAndDate } from '../../utils/firebase'

const screenheight = Dimensions.get("window").height;
const HeroRes = () => {
  state = {
    resval: 0
  };

const [resilienceValue, setResilienceValue] = useState(0)

  submit = () => {
    const heroRef = scopeRefByUserAndDate('HERO')
    firebase
      .database()
      .ref(heroRef)
      .update({
        resilienceValue
      });
    Actions.heroopt();
  }

  feeling = () => {
    if (resilienceValue === 0) {
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
          Not at all Resilient
        </Text>
      );
    } else if (resilienceValue >= 1 && resilienceValue <= 3) {
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
          Mildly Resilient
        </Text>
      );
    } else if (resilienceValue >= 4 && resilienceValue <= 6) {
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
          Moderately Resilient
        </Text>
      );
    } else if (resilienceValue >= 7 && resilienceValue <= 9) {
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
          Highly Resilient
        </Text>
      );
    } else if (resilienceValue === 10) {
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
          Extremely Resilient
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
            Resilience
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
            On average, during the last 7 DAYS, how resilient have you felt?
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
            value={resilienceValue}
            step={1}
            minimumValue={0}
            maximumValue={10}
            onValueChange={value => setResilienceValue(value)}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              textAlign: "center",
              marginTop: "10%"
            }}
          >
            Value: {resilienceValue}
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


export { HeroRes };
