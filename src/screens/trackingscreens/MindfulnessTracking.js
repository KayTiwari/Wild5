import React, { Component } from "react";
import { ScrollView, View, Dimensions, ImageBackground } from "react-native";
import { Input, Form, Item, Label, Text, Picker, Icon } from "native-base";
import { ModButton } from "../../components/common";
import firebase from 'react-native-firebase';
import { BlurredBackgroundImage } from "../../components/common/BlurredBackgroundImage";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { Actions } from "react-native-router-flux";
import mindtracking from "../../images/mindfultracking1.jpg";

let typedata = [
  {
    value: 'Mindfulness',
  },
  {
    value: 'Transcendental',
  },
  {
    value: 'Silent',
  },
  {
    value: 'Qigong',
  },
  {
    value: 'Compassion',
  },
  {
    value: 'Other',
  }
];
class MindfulnessTracking extends Component {
  state = {
    mindType: "",
    mindDaily: "",
    otherType: false
  };

  submitForm() {
    // console.log(this.state);
    const { mindtype, mindDaily, user, date } = this.state;
    firebase
      .database()
      .ref(`Surveys/${user}/${date}`)
      .update({
        mindtype: mindtype,
        mindDaily: mindDaily
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
        style={{ paddingHorizontal: 10 }}
        source={mindtracking}
        blurRadius={10}
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
          <Text style={{ color: "#81cfe0", fontSize: 30, fontWeight: "600" }}>
            Mindfulness
          </Text>
        </Text>
        <View
          style={{
            backgroundColor: "#0AB1E7",
            width: "85%",
            alignSelf: "center",
            height: 80
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              alignSelf: "center",
              fontWeight: "700"
            }}
          >
            Program Expectations
          </Text>
          <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>
            Practice mindfulness for at least 10 minutes each day for 30 days.
          </Text>
        </View>
        <View>
          <View
            style={{
              alignSelf: "center",
              marginTop: "10%",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginBottom: "5%",
                fontSize: 20,
                textAlign: "center",
                fontWeight: "600"
              }}
            >
              Did I Mindfully Meditate at Least 10 Mintues Today?
            </Text>
            
            <RadioForm
              radio_props={[
                { label: "Yes", value: "1" },
                { label: "No", value: "0" }
              ]}
              initial={false}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#4682b4"}
              animation={true}
              onPress={value => {
                this.setState({ mindDaily: value });
              }}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
          <Picker
            selectedValue={this.state.mindType}
            onValueChange={type =>
              this.setState(
                {
                  mindType: type
                },
                () => {
                  this.state.type === "Other"
                    ? this.setState({
                        type: "",
                        otherType: true
                      })
                    : null;
                }
              )
            }
            mode="dropdown"
            placeholder="Select Type of Exercise"
            placeholderStyle={{ color: "white" }}
            placeholderIconColor="white"
            iosHeader="Exercises"
            iosIcon={
              <Icon
                name="ios-arrow-dropdown"
                style={{ color: "white", fontSize: 25 }}
              />
            }
            textStyle={{ color: "white" }}
          >
            {typedata.map(type => (
              <Picker.Item
                key={type.value}
                label={type.value}
                value={type.value}
              />
            ))}
          </Picker>
          </View>
          {this.state.otherType ? (
            <Form>
              <Item floatingLabel>
                <Label>Type of meditation</Label>
                <Input
                  onChangeText={text => this.setState({ mindtype: text })}
                />
              </Item>
            </Form>
          ) : null}
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
