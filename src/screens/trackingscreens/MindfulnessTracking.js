import React, { Component } from "react";
import { ScrollView, View, Dimensions, ImageBackground } from "react-native";
import { Input, Form, Item, Label, Text, Picker, Icon } from "native-base";
import { ModButton } from "../../components/common";
import firebase from 'react-native-firebase';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import {TrackingScreen} from './TrackingScreen'
import {scopeRefByUserAndDate} from '../../utils/firebase'
import { Actions } from "react-native-router-flux";
import mindTrackingImage from "../../images/mindfultracking1.jpg";

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



const MindfulnessTracking = () => {
  const [mindType, setMindType] = React.useState("");
  const [mindDaily, setMindDaily] = React.useState("");
  const [otherType, setOtherType] = React.useState(false)

  const submitForm = React.useCallback(async ()=> {
    const mindfulnessRef = scopeRefByUserAndDate('Surveys', 'mindfulness')
    firebase
      .database()
      .ref(mindfulnessRef)
      .update({
        mindtype: mindtype,
        mindDaily: mindDaily
      });
    Actions.landing();
  })



    return (
      // <View style={{ backgroundColor: "white", height: screenheight }}>
      <TrackingScreen
      backgroundImage={mindTrackingImage}
      color="#81cfe0"
      activityTitle="Mindfulness"
      onSave={submitForm}
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
              onPress={value => setMindDaily(value)}
            />
          </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
          <Picker
            selectedValue={this.state.mindType}
            onValueChange={""}
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
          {otherType ? (
            <Form>
              <Item floatingLabel>
                <Label>Type of meditation</Label>
                <Input
                  onChangeText={text => this.setState({ mindtype: text })}
                />
              </Item>
            </Form>
          ) : null}
        </TrackingScreen>
      // </View>
    );
  
}
export default MindfulnessTracking;
