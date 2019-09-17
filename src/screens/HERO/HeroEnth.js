import React, { useState } from "react";
import { View, Dimensions,TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from 'react-native-firebase';
import { Slider } from "react-native-elements";
import { scopeRefByUserAndDate } from '../../utils/firebase'

const screenheight = Dimensions.get("window").height;
const HeroEnth = () => {
  
  const [enthusiasmValue, setEnthusiasmValue] = useState(0)


  submit = () => {
    const heroRef = scopeRefByUserAndDate('HERO')
    firebase
      .database()
      .ref(heroRef)
      .update({
        enthusiasmValue
      });
    Actions.herores();
  }

  feeling = () => {
    if (enthusiasmValue === 0) {
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
          Not at all Enthusiastic
        </Text>
      );
    } else if (enthusiasmValue >= 1 && enthusiasmValue <= 3) {
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
          Mildly Enthusiastic
        </Text>
      );
    } else if (enthusiasmValue >= 4 && enthusiasmValue <= 6) {
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
          Moderately Enthusiastic
        </Text>
      );
    } else if (enthusiasmValue >= 7 && enthusiasmValue <= 9) {
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
          Highly Enthusiastic
        </Text>
      );
    } else if (enthusiasmValue === 10) {
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
          Extremely Enthusiastic
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
            Enthusiastic
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
            On average, during the last 7 DAYS, how enthusiastic have you felt?
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
            value={enthusiasmValue}
            step={1}
            minimumValue={0}
            maximumValue={10}
            onValueChange={value => setEnthusiasmValue(value)}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              textAlign: "center",
              marginTop: "10%"
            }}
          >
            Value: {enthusiasmValue}
          </Text>
          {feeling()}

          <View style={{ alignSelf: "center", marginTop: "20%" }}>
          <TouchableOpacity style={{alignSelf: "center", height: 60, width: 120, borderRadius:28, backgroundColor: "#041D5D", borderWidth: 1, borderColor:'black', justifyContent:'center', flexDirection:'row'}} onPress={() => submit()}>
            <Text style={{color:"#fff", fontSize: 24, fontWeight:800, alignSelf:'center'}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }


export { HeroEnth };
