import React from "react";
import { View, Dimensions, Image, ImageBackground } from "react-native";
import { Text, Button, Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import HEROlogo from "../../images/herologo.png";
import Navbar from '../../components/Navbar'
// import background from "../../images/herobackground.jpeg";

const screenheight = Dimensions.get("window").height;
const HeroIntro = () => {
  return (
    <View style={{ backgroundColor: "white", flex:1 }}>
      {/* <ImageBackground
        source={background}
        style={{ width: "100%", height: "100%" }}
      > */}
        <View style={{ width: "80%", alignSelf: "center", marginTop: "10%" }}>
          <Image
            source={HEROlogo}
            style={{ width: "100%", resizeMode: "contain" }}
          />
        </View>

        <View style={{width: '90%', alignSelf:'center'}}>
          <Text
            style={{
              marginTop: "7%",
              fontSize: 24,
              fontWeight: "600",
              textAlign: "center"
            }}
          >
            The HERO Wellness scale is your way to measure and track your wellness goals.
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: "15%",
              fontSize: 20,
              fontWeight: "600",
              textAlign: "center"
            }}
          >
            Check Your HERO Wellness Score For This Week
          </Text>
        </View>

        <View style={{ alignSelf: "center", marginTop: "10%" }}>
          <Button
            onPress={() => Actions.herohappy()}
            rounded
            block
            large
            style={{}}
          >
            <Text>Start</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
        <View style={{flex:1, justifyContent:'flex-end'}}>
          <Navbar herodisable/>
        </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default HeroIntro;
