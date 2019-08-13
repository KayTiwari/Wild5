import React, { Component } from "react";
import { ScrollView, View, Dimensions, ImageBackground, SafeAreaView } from "react-native";
import {
  Input,
  Form,
  Item,
  Label,
  Text,
  ListItem,
  CheckBox,
  Body
} from "native-base";
import { ModButton } from "../../components/common";
import firebase from 'react-native-firebase';
import RadioForm from "react-native-simple-radio-button";
import { Actions } from "react-native-router-flux";
import nutriTrackingImage from "../../images/nutritracking.jpg";
import {TrackingScreen} from './TrackingScreen';

const NutritionTracking = () => {

  const [nutritionLoggedDailyValue, dailyValue] = React.useState(false);
  const [mindDietPrinciples, mindDietPrinciplesValue] = React.useState(false);
  const [breakfastMindfulness, breakfastMindfulnessValue] = React.useState(false);
  const [lunchMindfulness, lunchMindfulnessValue] = React.useState(false);
  const [dinnerMindfulness, dinnerMindfulnessValue] = React.useState(false);

  const breakfastCheckBox = () => {
    breakfastMindfulnessValue(prevValue => !prevValue);
  }

  const lunchCheckBox = () => {
    lunchMindfulnessValue(prevValue => !prevValue);
  }

  const dinnerCheckBox = () => {
    dinnerMindfulnessValue(prevValue => !prevValue);
  }


  const submitForm = React.useCallback( async () => {
    const nutritionRef = scopeRefByUserAndDate('Surveys', 'mindfulness')
    firebase
      .database()
      .ref(nutritionRef)
      .update({
        nutritionLoggedDaily: nutritionLoggedDailyValue,
        nutrMIND: mindDietPrinciples,
        nutrbreakfast: breakfastMindfulness,
        nutrlunch: lunchMindfulness,
        nutrdinner: dinnerMindfulness
      });
    Actions.landing();
  })


    return (
      <SafeAreaView style={{ backgroundColor: "white", flex: 1}}>
        <View style={{ flex: 1 }}>
        <TrackingScreen
      backgroundImage={nutriTrackingImage}
      color="#E27027"
      activityTitle="Nutrition"
      onSave={submitForm}
    >
            <ScrollView style={{ flex:1, padding: 30 }}>
              <View
                style={{
                  backgroundColor: "#E27027",
                  width: "100%",
                  alignSelf: "center",
                  height: 180
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
                <Text
                  style={{ fontSize: 18, color: "white", textAlign: "center" }}
                >
                  Log your daily meals/snacks/beverages/alcohol each day for 30
                  days, follow the MIND diet principles as closely as you can
                </Text>
              </View>
              <View style={{alignItems:'center', marginTop: 10}}>
            <Text  style={{
              color: '#000',
                marginBottom: "5%",
                fontSize: 20,
                textAlign: "center",
                fontWeight: "600"
              }}>Did I Log My Meals, Snacks, and Beverages, Including Alcohol Today?</Text>
            <RadioForm
              radio_props={[
                { label: "Yes", value: "1" },
                { label: "No", value: "0" }
              ]}
              initial={false}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#f5bd68"}
              selectedButtonColor={"#f5bd68"}
              labelStyle={{fontSize: 20, color: '#000'}}
              animation={true}
              onPress={value => dailyValue(value)}
            />
          </View>
              <View style={{ alignSelf: "center", marginTop: "10%", alignItems:'center' }}>
                <Text
                  style={{
                    color: '#000',
                    marginBottom: "5%",
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "600"
                  }}
                >
                  Did I implement MIND diet principles?
                </Text>
                <RadioForm
                  radio_props={[
                    { label: "Yes", value: true },
                    { label: "No", value: false }
                    
                  ]}
                  initial={false}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={"#E27027"}
                  selectedButtonColor={"#E27027"}
                  animation={true}
                  onPress={value=> mindDietPrinciplesValue(value)}
                />
              </View>

              <View style={{ marginTop: "10%" }}>
                <Text
                  style={{
                    color: '#000',
                    marginBottom: "5%",
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "600"
                  }}
                >
                  Did I practice Mind Meal Meditation?
                </Text>
                <ListItem onPress={breakfastCheckBox}>
                  <CheckBox
                    color="#f44336"
                    checked={breakfastMindfulness}
                    onPress={breakfastCheckBox}
                  />
                  <Body>
                    <Text>Breakfast</Text>
                  </Body>
                </ListItem>
                <ListItem onPress={lunchCheckBox}>
                  <CheckBox
                    color="#E27027"
                    checked={lunchMindfulness}
                    onPress={lunchCheckBox}
                  />
                  <Body>
                    <Text>Lunch</Text>
                  </Body>
                </ListItem>
                <ListItem onPress={dinnerCheckBox}>
                  <CheckBox
                    color="##E27027"
                    checked={dinnerMindfulness}
                    onPress={dinnerCheckBox}
                  />
                  <Body>
                    <Text>Dinner</Text>
                  </Body>
                </ListItem>
              </View>
            </ScrollView>
          </TrackingScreen>
        </View>
      </SafeAreaView>
    );
  
}
export default NutritionTracking;
