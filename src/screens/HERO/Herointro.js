import React from "react";
import { View, Dimensions, Image, ImageBackground } from "react-native";
import { Text, Button, Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import HEROlogo from "../../images/herologo.png";
import background from "../../images/herobackground.jpeg";

const screenheight = Dimensions.get("window").height;
const HeroIntro = () => {
  return (
    <View style={{ backgroundColor: "white", height: screenheight }}>
      <ImageBackground
        source={background}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ width: "80%", alignSelf: "center", marginTop: "10%" }}>
          <Image
            source={HEROlogo}
            style={{ width: "100%", resizeMode: "contain" }}
          />
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
            The HERO scale is your way to measure and track your wellness goals.
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: "15%",
              fontSize: 25,
              fontWeight: "600",
              textAlign: "center"
            }}
          >
            Let's Check Your HERO Score For This Week
          </Text>
        </View>

        <View style={{ alignSelf: "center", marginTop: "20%" }}>
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
      </ImageBackground>
    </View>
  );
};

export default HeroIntro;
