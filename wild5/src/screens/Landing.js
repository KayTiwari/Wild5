import React, {Component} from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import {Container} from "native-base";
import wild5title from "../images/wild-5-logo-r-color.png";
import {Actions} from "react-native-router-flux";
import Navbar from "../components/Navbar";
import landingbackground from "../images/landingbackground.jpg";
import {withAuthProvider} from "../context/authcontext";
import {Navigation} from "../components/NavigationCarousel";

class Landing extends Component {
  state = {
    account: 0,
  };

  progressPress = () => {
    this.props.getTrackingData();
    Actions.progress();
  };

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

            <View style={{marginTop: "15%", flex: 1}}>
              <Navigation />
            </View>
          </ImageBackground>
        </ScrollView>

        <Navbar />
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

export default withAuthProvider(Landing);
