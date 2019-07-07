import React, {Component} from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import {Container, Button, Text } from "native-base";
import wild5title from "../images/wild-5-logo-r-color.png";
import Navbar from "../components/Navbar";
import landingbackground from "../images/landingbackground.jpg";
import Navigation from "../components/LandingNavigation";
import Carousel from "../components/Carousel";

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <ImageBackground
            source={landingbackground}
            style={{width: "100%", flex: 1}}
            blurRadius={3}
          >
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                flex: 1,
                width: "100%",
              }}
            />
            <View
              style={{
                width: "80%",
                marginLeft: "10%",
                marginTop: "20%",
                marginBottom: 0,
              }}
            >
              <Image
                source={wild5title}
                style={{width: "100%", resizeMode: "contain"}}
              />
            </View>

            <Carousel />
            

            <View style={{marginTop: "15%", flex: 1}}>
              <Navigation />
            </View>
          </ImageBackground>
        </ScrollView>

        <Navbar homedisable/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  mindfulness: {
    backgroundColor: "#49b8ea",
    alignSelf: "center",
  },
  sleep: {
    alignSelf: "center",
    backgroundColor: "#ba3992",
  },
  social: {
    alignSelf: "center",
    backgroundColor: "#ed3833",
  },
  nutrition: {
    alignSelf: "center",
    backgroundColor: "#f3983e",
  },
  tracking: {
    alignSelf: "center",
    backgroundColor: "#333",
  },
});
