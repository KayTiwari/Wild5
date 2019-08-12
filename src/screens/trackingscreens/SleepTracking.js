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
import firebase from 'react-native-firebase';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { Actions } from "react-native-router-flux";
import sleeptracking from "../../images/sleeptracking.jpg";
import {BlurredBackgroundImage} from '../../components/common/BlurredBackgroundImage';


const screenheight = Dimensions.get("window").height;
class SleepTracking extends Component {
  state = {
    sleepDaily: "",
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
      sleepDaily,
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
        sleepDaily: sleepDaily,
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
        <BlurredBackgroundImage
        style={{paddingHorizontal: 10}}
        source={sleeptracking}
        blurRadius={20}
      >
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              marginTop: "20%",
              marginBottom: "5%",
              fontWeight: "600"
            }}
          >
            Track your{" "}
            <Text style={{ color: "#bf55ec", fontSize: 30, fontWeight: "600" }}>
              Sleep
            </Text>
          </Text>
          <View style={{backgroundColor:"#B72B90", width: '85%', alignSelf: 'center', height: 90 }}>
          <Text style={{fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: '700'}}>
            Program Expectations
          </Text>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
          Implement 4 or more of the 6 sleep hygiene practices each day for 30
            days
          </Text>
          </View>
          <View style={{alignItems:'center', marginTop: 10}}>
            <Text  style={{
                marginBottom: "5%",
                fontSize: 20,
                textAlign: "center",
                fontWeight: "600"
              }}>Did I Implement 4 or More of the 6 Sleep Hygiene Practices?</Text>
            <RadioForm
              radio_props={[
                { label: "Yes", value: "1" },
                { label: "No", value: "0" }
              ]}
              initial={false}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#fff"}
              selectedButtonColor={"#fff"}
              labelStyle={{fontSize: 20, color: '#000'}}
              animation={true}
              onPress={value => {
                this.setState({ sleepDaily: value });
              }}
            />
          </View>
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
        </BlurredBackgroundImage>
      </Container>
    );
  }
}
export default SleepTracking;
