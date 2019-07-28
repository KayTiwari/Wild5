import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  DatePickerIOS,
  Modal
} from "react-native";
import firebase from "firebase";
import { CheckBox, ListItem, Body, Icon } from "native-base";
import PushNotificationIOS from "../common/PushNotificationsIOS";
import Navbar from "../Navbar";
class SleepQuest extends Component {
  state = {
    chosenDate: new Date(),
    hour: "12",
    minutes: "00",
    sleepConfirmed: false,
    modalView: false,
    user: "",
    date: ""
  };

  time = date1 => {
    let date = date1,
      h = date.getHours(),
      m = date.getMinutes(),
      ampm;
    if (h > 12) {
      h -= 12;
      ampm = h % 12 ? "PM" : "AM";
    } else ampm = h % 12 ? "AM" : "PM";
    m = m < 10 ? "0" + m : m;
    return [h, m].join(":") + ampm;
  };

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  componentDidMount() {
    this.getBedTime()
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

cancelSleep = ()=> {
  firebase.database().ref(`SleepSettings/${this.state.user}/`).set(null).then( ()=> this.setState({sleepConfirmed: false}))
}

  getBedTime = () => {
    firebase
      .database()
      .ref(`SleepSettings/${this.state.user}`)
      .once("value", (snapshot)=>{
        if(snapshot.val() !== null){
        const data = snapshot.val()
        // const { `${this.state.user}`.bedtime, sleepConfirmed } = data
        this.setState({
            chosenDate: new Date(data[`${this.state.user}`].bedtime),
            sleepConfirmed: data[`${this.state.user}`].sleepConfirmed
        }, console.log(this.state))
      
  }}).then(r => console.log(r))};

  setBedTime = () => {
    this.setState(
      { sleepConfirmed: !this.state.sleepConfirmed }, ()=>
      firebase
        .database()
        .ref(`SleepSettings/${this.state.user}`)
        .set({
          bedtime: this.state.chosenDate.toString(),
          sleepConfirmed: true
        })
        .then(r => console.log(r))
        .catch(e => console.log(e))
    );
  };

  modalView = () => {
    this.setState({
      modalView: !this.state.modalView
    });
  };

  render() {
    return (
      <>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalView}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                height: "42%",
                width: "70%",
                backgroundColor: "#fff",
                borderColor: "black",
                borderWidth: 2,
                borderRadius: 10
              }}
            >
              <Text style={{ margin: 5, fontSize: 20 }}>
                Set your regular bedtime and receive a notification to remind
                you 30 minutes prior
              </Text>
              <TouchableOpacity
                style={{
                  height: 25,
                  width: "70%",
                  backgroundColor: "lime",
                  alignSelf: "center",
                  borderRadius: 7
                }}
                onPress={this.modalView}
              >
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: "center",
                    fontWeight: "700"
                  }}
                >
                  Ok, Got it!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={{ flex: 1, backgroundColor: "#A72782" }}>
          <View style={{ marginTop: 90, alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "700" }}>
              Get Help Tracking Your Sleep
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
                What Time Do You Go To Bed?
              </Text>
              <TouchableOpacity onPress={this.modalView}>
                <Icon
                  name="help-circle-outline"
                  style={{ marginLeft: 5, fontSize: 23 }}
                  onPress={this.modalView}
                />
              </TouchableOpacity>
            </View>
          </View>
          {!this.state.sleepConfirmed ? (
            <>
              <View style={{ height: 100 }}>
                <DatePickerIOS
                  date={this.state.chosenDate}
                  onDateChange={this.setDate}
                  mode="time"
                />
              </View>
              <View style={{ marginTop: 150, alignItems: "center" }}>
                <TouchableOpacity
                  onPress={this.setBedTime}
                  style={{
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 10
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 26,
                      fontWeight: "900",
                      padding: 10
                    }}
                  >
                    Set Time
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  name="checkmark"
                  style={{ color: "lime", fontSize: 200 }}
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>
                  You BedTime is Set for {this.time(this.state.chosenDate).toString()}
                </Text>
                <Text style={{ color: "white", fontSize: 20 }} />
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginTop: 20
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.setState(prevState => ({
                      sleepConfirmed: !prevState.sleepConfirmed
                    }))
                  }
                  style={{
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 10
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 26,
                      fontWeight: "900",
                      padding: 10
                    }}
                  >
                    Change Time
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.cancelSleep}
                  style={{
                    marginTop: 10,
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 10
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 26,
                      fontWeight: "900",
                      padding: 10
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Navbar />
          </View>
        </View>
      </>
    );
  }
}

export default SleepQuest;
