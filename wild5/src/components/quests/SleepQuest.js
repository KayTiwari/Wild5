import React, { Component } from "react";
import { Text, View, Dimensions, TouchableOpacity, DatePickerIOS } from "react-native";
import { CheckBox, ListItem, Body, Icon } from "native-base";
import PushNotificationIOS from "../common/PushNotificationsIOS";
import Navbar from "../Navbar";

const { width, height } = Dimensions.get("window");
const date = new Date()
// const hour = date.getHours()
// const minutes = date.getMinutes()
// const time = hour + minutes
class SleepQuest extends Component {
  state = {
    chosenDate: new Date(),
    hour: "12",
    minutes: "00"
  };

  setDate = (newDate) => {
    this.setState({chosenDate: newDate});
  
  }


 
  componentDidMount(){
    console.log(this.state.chosenDate)
  }

  render() {
    return (
        <View style={{flex: 1, backgroundColor: "#A72782"}}>
        <View style={{marginTop: 100, alignItems:'center'}}>
        <Text style={{color: 'white', fontSize: 25, fontWeight: '700'}}>Get Help Tracking Your Sleep</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>What Time Do You Go To Bed?</Text>
        </View>
        <View style={{height: 100}}>
        <DatePickerIOS 
        date={this.state.chosenDate}
        onDateChange={this.setDate}
        mode="time"
        />
      </View>
      <View>
        <Text>Hello</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Navbar />
        </View>
        </View>
    );
  }
}

export default SleepQuest;
