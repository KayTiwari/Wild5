import React, { Component } from "react";
import { ScrollView, View, Dimensions, ImageBackground } from "react-native";
import { Input, Form, Item, Label, Text } from "native-base";
import { ModButton } from "../../components/common";
import firebase from "firebase";
import {BlurredBackgroundImage} from '../../components/common/BlurredBackgroundImage';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { Actions } from "react-native-router-flux";
import mindtracking from "../../images/mindfultracking1.jpg";

const screenheight = Dimensions.get("window").height;
class MindfulnessTracking extends Component {
  state = {
    mindtype: "",
    mindprac: 0
  };

  submitForm() {
    // console.log(this.state);
    const { mindtype, mindprac, user, date } = this.state;
    firebase
      .database()
      .ref(`Surveys/${user}/${date}`)
      .update({
        mindtype: mindtype,
        mindprac: mindprac
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
      // <View style={{ backgroundColor: "white", height: screenheight }}>
        <BlurredBackgroundImage
        style={{paddingHorizontal: 10}}
        source={mindtracking}
        blurRadius={10}
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
            <Text style={{ color: "#81cfe0", fontSize: 30, fontWeight: "600" }}>
              Mindfulness
            </Text>
          </Text>

          <View>
            <Form>
              <Item floatingLabel>
                <Label>Type of meditation</Label>
                <Input
                  onChangeText={text => this.setState({ mindtype: text })}
                />
              </Item>
            </Form>
          </View>

          <View style={{ alignSelf: "center", marginTop: "10%" }}>
            <Text
              style={{
                marginBottom: "5%",
                fontSize: 20,
                textAlign: "center",
                fontWeight: "600"
              }}
            >
              Did you practice for 10 minutes?
            </Text>
            <RadioForm
              radio_props={[
                { label: "Yes", value: "1" },
                { label: "No", value: "0" }
              ]}
              initial={1}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#4682b4"}
              animation={true}
              onPress={value => {
                this.setState({ mindprac: value });
              }}
            />
          </View>

          <View style={{ alignSelf: "center" }}>
            <ModButton
              color={"black"}
              onPress={() => this.submitForm()}
              label="Submit"
            >
              Submit
            </ModButton>
          </View>
        </BlurredBackgroundImage>
      // </View>
    );
  }
}
export default MindfulnessTracking;
