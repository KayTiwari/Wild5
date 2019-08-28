import React, { Component } from "react";
import { Button, View, Platform } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class RNModalDatetimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: this.props.showTimer
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  render() {
    return (
      <> 
        <DateTimePicker
          // date={this.props.date}
          onDateChange={this.props.onDateChange}
          style={{ color: "blue" }}
          isVisible={this.props.showTimer}
          onConfirm={this.props.onConfirm}
          onCancel={this.props.onCancel}
          mode="time"
          is24Hour={false}
          datePickerModeAndroid="default"

        /> 
      </>
    );
  }
}
