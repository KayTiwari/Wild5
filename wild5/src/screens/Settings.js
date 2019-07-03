import React, { Component } from "react";
import { View, Button, Text, Dimensions } from "react-native";
import { Container } from "native-base";
import Navbar from "../components/Navbar";
import ToggleSwitch from "toggle-switch-react-native";
import PushNotificationIOS from "../components/common/PushNotificationsIOS";
import appConfig from "../../app.json";
import TimePicker from '../components/common/TimePicker'

const { height, width } = Dimensions.get("window");

type Props = {};
class Settings extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      // startDate: new Date(),
      exerciseReminder: false,
      mindfulnessReminder: false,
      sleepReminder: false,
      socialReminder: false,
      nutritionReminder: false,
      showTimer: false,
      senderId: appConfig.senderID,
      chosenDate: new Date(),
      reminders: [
        {
          title: "",
          date: ""
        }
      ]
    };
    this.PushNotificationIOS = new PushNotificationIOS(this.onNotif);
  }

  setDate = (newDate) => {
    this.setState({chosenDate: newDate.toString().slice(15,8)});
  }

  showTimePicker = () => {
    return (
      <TimePicker
        date={this.state.chosenDate}
        onDateChange={this.setDate}
        showTimer={this.state.showTimer}
      />
    )
  }
  

  exerciseReminder = (pillar, date) => {
    return e => {
      this.setState(
        prevState => ({
          showTimer: !prevState.showTimer,
          exerciseReminder: !prevState.exerciseReminder
        }),
        () => {
          if (this.state.exerciseReminder) {
            this.PushNotificationIOS.scheduleNotif(pillar, date);
          }
        }
      );
    };
  };

  mindfulnessReminder = pillar => {
    return e => {
      this.setState(
        prevState => ({
          mindfulnessReminder: !prevState.mindfulnessReminder
        }),
        () => {
          if (this.state.mindfulnessReminder) {
            this.PushNotificationIOS.scheduleNotif(pillar);
          }
        }
      );
    };
  };

  sleepReminder = pillar => {
    return e => {
      this.setState(
        prevState => ({
          sleepReminder: !prevState.sleepReminder
        }),
        () => {
          if (this.state.sleepReminder) {
            this.PushNotificationIOS.scheduleNotif(pillar);
          }
        }
      );
    };
  };

  socialReminder = pillar => {
    return e => {
      this.setState(
        prevState => ({
          socialReminder: !prevState.socialReminder
        }),
        () => {
          if (this.state.socialReminder) {
            this.PushNotificationIOS.scheduleNotif(pillar);
          }
        }
      );
    };
  };
  nutritionReminder = pillar => {
    return e => {
      this.setState(
        prevState => ({
          nutritionReminder: !prevState.nutritionReminder
        }),
        () => {
          if (this.state.nutritionReminder) {
            this.PushNotificationIOS.scheduleNotif(pillar);
          }
        }
      );
    };
  };

  

  onRegister = token => {
    Alert.alert("Registered !", JSON.stringify(token));
    console.log(token);
    this.setState({ registerToken: token.token, gcmRegistered: true });
  };

  onNotif = notif => {
    console.log(notif);
    Alert.alert(notif.title, notif.message);
  };

  handlePerm = perms => {
    Alert.alert("Permissions", JSON.stringify(perms));
  };

  render() {
    return (
      <>
        <Container>
          {(this.state.showTimer) ? this.showTimePicker() : null}
          <View style={{ marginTop: "10%", marginLeft: "5%" }}>
            <Text style={{ fontSize: 20 }}>Notifications</Text>
            <View>
              <Text>Exercise</Text>
              <ToggleSwitch
                // label='Exercise'
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="large"
                onColor="#73BA3F"
                offColor="#d5eac5"
                isOn={this.state.exerciseReminder}
                onToggle={this.exerciseReminder("exercise", (this.state.chosenDate)?this.state.chosenDate : null)}
              />
            </View>
            <View>
              <Text>Mindfulness</Text>
              <ToggleSwitch
                // label='Mindfulness'
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="large"
                onColor="#0AB2E8"
                offColor="#cef0fa"
                isOn={this.state.mindfulnessReminder}
                onToggle={this.mindfulnessReminder("mind")}
              />
            </View>
            <View>
              <Text>Sleep</Text>
              <ToggleSwitch
                // label='Sleep'
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="large"
                onColor="#B72B90"
                offColor="#f1d5e9"
                isOn={this.state.sleepReminder}
                onToggle={this.sleepReminder("sleep")}
              />
            </View>
            <View>
              <Text>Social</Text>
              <ToggleSwitch
                // label='Social'
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="large"
                onColor="#E93422"
                offColor="#fbd6d3"
                isOn={this.state.socialReminder}
                onToggle={this.socialReminder("social")}
              />
            </View>
            <View>
              <Text>Nutrition</Text>
              <ToggleSwitch
                // label='Nutrition'
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="large"
                onColor="#C6411F"
                offColor="#f4d9d2"
                isOn={this.state.nutritionReminder}
                onToggle={this.nutritionReminder("nutrition")}
              />
            </View>
          </View>
        </Container>
        <Navbar />
      </>
    );
  }
}

export default Settings;
