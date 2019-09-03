import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { Text, Button, Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from 'react-native-firebase';
import { Slider } from "react-native-elements";
import { scopeRefByUserAndDate } from '../../utils/firebase'

const screenheight = Dimensions.get("window").height;
class HeroOpt extends Component {
  state = {
    optval: 0
  };

 

  submit() {
    const { optval, user, date } = this.state;
    const heroRef = scopeRefByUserAndDate('HERO')
    firebase
      .database()
      .ref(heroRef)
      .update({
        optval
      });
    Actions.heroment();
  }

  feeling = () => {
    if (this.state.optval === 0) {
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
    } else if (this.state.optval >= 1 && this.state.optval <= 3) {
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
    } else if (this.state.optval >= 4 && this.state.optval <= 6) {
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
    } else if (this.state.optval >= 7 && this.state.optval <= 9) {
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
    } else if (this.state.optval === 10) {
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

  render() {
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
            value={this.state.value}
            step={1}
            minimumValue={0}
            maximumValue={10}
            onValueChange={value => this.setState({ optval: value })}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              textAlign: "center",
              marginTop: "10%"
            }}
          >
            Value: {this.state.optval}
          </Text>
          {this.feeling()}

          <View style={{ alignSelf: "center", marginTop: "20%" }}>
            <Button onPress={() => this.submit()} dark rounded large>
              <Text>Next</Text>
              <Icon name="arrow-forward" />
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export { HeroOpt };
