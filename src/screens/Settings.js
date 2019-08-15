import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Container, Icon } from "native-base";
import Navbar from "../components/Navbar";
import ToggleSwitch from "toggle-switch-react-native";
import PushNotificationIOS from "../components/common/PushNotificationsIOS";
import appConfig from "../../app.json";
import TimePicker from "../components/common/TimePicker";
import { Actions } from "react-native-router-flux";
import firebase from 'react-native-firebase';


type Props = {};
class Settings extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      currentPillar: "",
      exerciseReminder: false,
      mindfulnessReminder: false,
      sleepReminder: false,
      socialReminder: false,
      nutritionReminder: false,
      showTimer: false,
      senderId: appConfig.senderID,
      chosenDate: new Date(),
      user: ""
    };
    this.PushNotificationIOS = new PushNotificationIOS(this.onNotif);
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
      console.log("set State for user failed sleepquest line 52");
    }
    this.getNotifStatus();
  }

  getNotifStatus = () => {
    firebase
      .database()
      .ref(`notifications/${this.state.user}/`)
      .once("value", snap => {
        console.log(snap.val());
        if (snap.val() !== null) {
          let data = snap.val();
          console.log(data[`${this.state.user}`].social)
          this.setState({
            exerciseReminder:(data[`${this.state.user}`].exercise !== undefined)? data[`${this.state.user}`].exercise.notifOn : false,
            mindfulnessReminder:(data[`${this.state.user}`].mind !== undefined)? data[`${this.state.user}`].mind.notifOn : false,
            sleepReminder: (data[`${this.state.user}`].sleep !== undefined)? data[`${this.state.user}`].sleep.notifOn : false,
            socialReminder: (data[`${this.state.user}`].social !== undefined) ?data[`${this.state.user}`].social.notifOn : false,
            nutritionReminder:(data[`${this.state.user}`].nutrition !== undefined) ? data[`${this.state.user}`].nutrition.notifOn : false
          });
        }
      })
      .then(r => console.log(r))
      .catch(e => console.log(e));
  };

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
    // schedule notification (this.state.piller, newDate)
  };

  showTimePicker = () => {
    return (
      <TimePicker
        date={this.state.chosenDate}
        onDateChange={this.setDate}
        showTimer={this.state.showTimer}
        onConfirm={this.submitTime(
          this.state.chosenDate,
          this.state.currentPillar
        )}
        onCancel={this.showTimer(this.state.currentPillar)}
      />
    );
  };

  // You only schedule the notification when the date changes
  // You need to keep track (in state) of which toggle button is being configured at the moment

  showTimer = pillar => {
    return () => {
      if (pillar === "exercise") {
        this.setState({ exerciseReminder: !this.state.exerciseReminder });
      } else if (pillar === "mind") {
        this.setState({ mindfulnessReminder: !this.state.mindfulnessReminder });
      } else if (pillar === "sleep") {
        this.setState({ sleepReminder: !this.state.sleepReminder });
      } else if (pillar === "social") {
        this.setState({ socialReminder: !this.state.socialReminder });
      } else if (pillar === "nutrition") {
        this.setState({ nutritionReminder: !this.state.nutritionReminder });
      }
      this.setState(prevState => ({
        showTimer: false
      }));
    };
  };

  toggleSwitch = pillar => {
    return e => {
      if (pillar === "exercise") {
        this.state.exerciseReminder
          ? this.setState({
              exerciseReminder: false
            })
          : this.setState({
              exerciseReminder: !this.state.exerciseReminder,
              showTimer: true,
              currentPillar: pillar
            });
      } else if (pillar === "mind") {
        this.state.mindfulnessReminder
          ? this.setState({
              mindfulnessReminder: false
            })
          : this.setState({
              mindfulnessReminder: !this.state.mindfulnessReminder,
              showTimer: true,
              currentPillar: pillar
            });
      } else if (pillar === "sleep") {
        this.state.sleepReminder
          ? this.setState({
              sleepReminder: false
            })
          : this.setState({
              sleepReminder: !this.state.sleepReminder,
              showTimer: true,
              currentPillar: pillar
            });
      } else if (pillar === "social") {
        this.state.socialReminder
          ? this.setState({
              socialReminder: false
            })
          : this.setState({
              socialReminder: !this.state.socialReminder,
              showTimer: true,
              currentPillar: pillar
            });
      } else if (pillar === "nutrition") {
        this.state.nutritionReminder
          ? this.setState({
              nutritionReminder: false
            })
          : this.setState({
              nutritionReminder: !this.state.nutritionReminder,
              showTimer: true,
              currentPillar: pillar
            });
      }
      // this.setState({
      //     showTimer: true,
      //     currentPillar: pillar
      //   })
    };
  };

  submitTime = (date, pillar) => {
    return () => {
      this.PushNotificationIOS.scheduleNotif(pillar, date);
      let date1 = date
      console.log(typeof(date1))
      const data = {
        notifOn: "",
        timeChosen: date
      };
      if (pillar === "exercise") {
        data.notifOn = this.state.exerciseReminder;
      } else if (pillar === "mind") {
        data.notifOn = this.state.mindfulnessReminder;
      } else if (pillar === "sleep") {
        data.notifOn = this.state.sleepReminder;
      } else if (pillar === "social") {
        data.notifOn = this.state.socialReminder;
      } else if (pillar === "nutrition") {
        data.notifOn = this.state.nutritionReminder;
      }
      firebase
        .database()
        .ref(`notifications/${this.state.user}/${pillar}`)
        .set(data);
      this.setState(prevState => ({
        showTimer: false,
        currentPillar: ""
      }));
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
          {this.state.showTimer ? this.showTimePicker() : null}
          <View style={{ marginTop: "12%", marginLeft: "5%" }}>
            <View style={{ alignSelf: "center" }}>
              <Text
                style={{ fontSize: 36, marginBottom: 10, fontWeight: "900" }}
              >
                Settings
              </Text>
              <Icon />
            </View>
            <Text style={{ fontSize: 20 }}>Notifications</Text>
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: "black",
                width: "90%"
              }}
            >
              <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 20 }}>Exercise</Text>
                <ToggleSwitch
                  // label='Exercise'
                  labelStyle={{ color: "black", fontWeight: "900" }}
                  size="large"
                  onColor="#73BA3F"
                  offColor="#d5eac5"
                  isOn={this.state.exerciseReminder}
                  onToggle={this.toggleSwitch("exercise")}
                />
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>Mindfulness</Text>
                <ToggleSwitch
                  // label='Mindfulness'
                  labelStyle={{ color: "black", fontWeight: "900" }}
                  size="large"
                  onColor="#0AB2E8"
                  offColor="#cef0fa"
                  isOn={this.state.mindfulnessReminder}
                  onToggle={this.toggleSwitch("mind")}
                />
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>Sleep</Text>
                <ToggleSwitch
                  // label='Sleep'
                  labelStyle={{ color: "black", fontWeight: "900" }}
                  size="large"
                  onColor="#B72B90"
                  offColor="#f1d5e9"
                  isOn={this.state.sleepReminder}
                  onToggle={this.toggleSwitch("sleep")}
                />
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>Social</Text>
                <ToggleSwitch
                  // label='Social'
                  labelStyle={{ color: "black", fontWeight: "900" }}
                  size="large"
                  onColor="#E93422"
                  offColor="#fbd6d3"
                  isOn={this.state.socialReminder}
                  onToggle={this.toggleSwitch("social")}
                />
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>Nutrition</Text>
                <ToggleSwitch
                  // label='Nutrition'
                  labelStyle={{ color: "black", fontWeight: "900" }}
                  size="large"
                  onColor="#C6411F"
                  offColor="#f4d9d2"
                  isOn={this.state.nutritionReminder}
                  onToggle={this.toggleSwitch("nutrition")}
                />
              </View>
            </View>
          </View>
          {/* <Text style={{ fontSize: 20, marginLeft: "5%", marginTop: 20 }}>
            Quests
          </Text> */}
          {/* <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "black",
              width: "90%",
              marginLeft: "5%"
            }}
          > */}
            {/* <TouchableOpacity
              style={{
                marginTop: 15,
                borderRadius: 20,
                width: "45%",
                height: 60,
                backgroundColor: "#E17026",
                justifyContent: "center"
              }}
              onPress={() => Actions.nutritionquestcameraroll()}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
                  Nutrition Quest{"\n"} Photos
                </Text>
              </View>
            </TouchableOpacity> */}
            <View style={{marginLeft: 15, marginTop: 20}}>
              <TouchableOpacity style={{height: 60, width: 100, backgroundColor:"#000", justifyContent:'center', borderRadius: 7}} onPress={()=> firebase.auth().signOut().then(()=> Actions.newlogin())}>
                <Text style={{color: "#fff", alignSelf:'center'}}>Logout</Text>
              </TouchableOpacity>
            </View>
          {/* </View> */}
        </Container>
        <Navbar />
      </>
    );
  }
}

export default Settings;
