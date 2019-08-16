import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Input, Form, Item, Label, Text, Picker, Icon } from "native-base";
import firebase from "react-native-firebase";
import RadioForm from "react-native-simple-radio-button";
import { TrackingScreen } from "./TrackingScreen";
import { scopeRefByUserAndDate } from "../../utils/firebase";
import { Actions } from "react-native-router-flux";
import mindTrackingImage from "../../images/mindfultracking1.jpg";

let typedata = [
  {
    value: "Mindfulness"
  },
  {
    value: "Transcendental"
  },
  {
    value: "Silent"
  },
  {
    value: "Qigong"
  },
  {
    value: "Compassion"
  },
  {
    value: "Other"
  }
];

const MindfulnessTracking = () => {
  const [mindType, setMindType] = React.useState("");
  const [mindDaily, setMindDaily] = React.useState("");
  const [otherType, setOtherType] = React.useState(false);

  const submitForm = React.useCallback(async () => {
    setTrackedToday(true)
    const mindfulnessRef = scopeRefByUserAndDate("Surveys", "mindfulness");
    firebase
      .database()
      .ref(mindfulnessRef)
      .update({
        mindtype: mindType,
        mindDaily: mindDaily,
      });
    Actions.landing();

  });

  React.useEffect(() => {
    if (mindType === "Other") {
      setOtherType(true);
    }
  });

  return (
    <KeyboardAvoidingView style={{flex:1}}behavior="padding" enabled>
    <TrackingScreen
      backgroundImage={mindTrackingImage}
      color="#81cfe0"
      activityTitle="Mindfulness"
      onSave={submitForm}
    >
      <View
        style={{
          backgroundColor: "#0AB1E7",
          width: "85%",
          alignSelf: "center",
          height: 90
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

      <View style={{ height: 100 }}>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Picker
            style={{ marginLeft: 5, marginRight: 5 }}
            selectedValue={mindType}
            onValueChange={type => setMindType(type)}
            mode="dropdown"
            placeholder="Select Type of Meditation"
            placeholderStyle={{ color: "#000" }}
            placeholderIconColor="#000"
            iosHeader="Exercises"
            iosIcon={
              <Icon
                name="ios-arrow-dropdown"
                style={{ color: "#000", fontSize: 25 }}
              />
            }
            textStyle={{ color: "#000" }}
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
          <View style={{ marginBottom: 10, height: 30}}>
            <Item floatingLabel>
              <Label>Type of meditation</Label>
              <Input
                style={{ marginTop: 5 }}
                onChangeText={text => setMindType(text)}
              />
            </Item>
          </View>
        ) : null}
      </View>
    </TrackingScreen>
    </KeyboardAvoidingView>
  );
};
export default MindfulnessTracking;
