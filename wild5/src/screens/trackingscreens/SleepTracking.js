import React, { Component } from "react";
import { ScrollView, View, Dimensions, ImageBackground } from "react-native";
import {
  Item,
  Label,
  Text,
  Content,
  ListItem,
  CheckBox,
  Body,
  Container,
  Header
} from "native-base";
import { ModButton } from "../../components/common";
import firebase from "firebase";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { Actions } from "react-native-router-flux";
import sleeptracking from "../../images/sleeptracking.jpg";

const screenheight = Dimensions.get("window").height;
class SleepTracking extends Component {
  state = {
    electronics: false,
    sleepmask: false,
    regulartime: false,
    napping: false,
    warmbath: false,
    caffeine: false
  };
  checkBox = type => {
    if (type === "elec") {
      this.setState({
        electronics: !this.state.electronics
      });
    } else if (type === "mask") {
      this.setState({
        sleepmask: !this.state.sleepmask
      });
    } else if (type === "reg") {
      this.setState({
        regulartime: !this.state.regulartime
      });
    } else if (type === "nap") {
      this.setState({
        napping: !this.state.napping
      });
    } else if (type === "warm") {
      this.setState({
        warmbath: !this.state.warmbath
      });
    } else if (type === "caff") {
      this.setState({
        caffeine: !this.state.caffeine
      });
    }
  };

  submitForm() {
    // console.log(this.state);
    const {
      electronics,
      sleepmask,
      regulartime,
      napping,
      warmbath,
      caffeine,
      user,
      date
    } = this.state;
    firebase
      .database()
      .ref(`Surveys/${user}/${date}`)
      .update({
        slelectronics: electronics,
        slsleepmask: sleepmask,
        slregulartime: regulartime,
        slnapping: napping,
        slwarmbath: warmbath,
        slcaffeine: caffeine
      });
    Actions.landing();
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user) {
      var res = user.email.split(".");
      var userEm = res[0].toString();
      this.setState({
        user: userEm
      });
    } else {
      console.log("noperz");
    }
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var dateTime = date;
    this.setState({
      date: dateTime
    });
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={sleeptracking}
          style={{ height: "100%", width: "100%" }}
        >
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              marginTop: "20%",
              marginBottom: "20%",
              fontWeight: "600"
            }}
          >
            Track your{" "}
            <Text style={{ color: "purple", fontSize: 30, fontWeight: "600" }}>
              Sleep
            </Text>
          </Text>
          <Content>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                marginTop: "10%",
                marginBottom: "10%",
                fontWeight: "600"
              }}
            >
              Which sleep hygiene practices did you implement today?
            </Text>
            <ListItem onPress={() => this.checkBox("elec")}>
              <CheckBox
                color="#f44336"
                checked={this.state.electronics}
                onPress={() => this.checkBox("elec")}
              />
              <Body>
                <Text>No Electronics 90 minutes before bed</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.checkBox("mask")}>
              <CheckBox
                onPress={() => this.checkBox("mask")}
                color="#ec49b3"
                checked={this.state.sleepmask}
              />
              <Body>
                <Text>Sleep mask or blackout shades</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.checkBox("reg")}>
              <CheckBox
                onPress={() => this.checkBox("reg")}
                color="#eb56f2"
                checked={this.state.regulartime}
              />
              <Body>
                <Text>Regular bedtime</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.checkBox("nap")}>
              <CheckBox
                onPress={() => this.checkBox("nap")}
                color="#7d49f3"
                checked={this.state.napping}
              />
              <Body>
                <Text>No Napping</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.checkBox("warm")}>
              <CheckBox
                onPress={() => this.checkBox("warm")}
                color="#0e248d"
                checked={this.state.warmbath}
              />
              <Body>
                <Text>Warm bath/shower prior to bed</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.checkBox("caff")}>
              <CheckBox
                onPress={() => this.checkBox("caff")}
                color="#607d8b"
                checked={this.state.caffeine}
              />
              <Body>
                <Text>Avoid caffeine 10 hours before bed</Text>
              </Body>
            </ListItem>
            <ModButton
              color={"black"}
              onPress={() => this.submitForm()}
              label="Submit"
            >
              Submit
            </ModButton>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
export default SleepTracking;
