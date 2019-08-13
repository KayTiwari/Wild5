import React, { Component } from "react";
import { ScrollView, View, Dimensions, ImageBackground } from "react-native";
import {
  Item,
  Label,
  Text,
  Content,
  ListItem,
  CheckBox,
  Body,
  Container,
  Header
} from "native-base";
import { ModButton } from "../../components/common";
import firebase from 'react-native-firebase';
import RadioForm from "react-native-simple-radio-button";
import { Actions } from "react-native-router-flux";
import sleepTrackingImage from "../../images/sleeptracking.jpg";
import {TrackingScreen} from './TrackingScreen'
import {scopeRefByUserAndDate} from '../../utils/firebase'


const SleepTracking = () => {

  const [sleepDaily, setDailySleepValue] = React.useState("")
  const [electronics, setElectronicsValue] = React.useState(false)
  const [sleepMask, setSleepMaskValue] = React.useState(false)
  const [regularTime, setRegularTimeValue] = React.useState(false)
  const [napping, setNappingValue] = React.useState(false)
  const [warmBath, setWarmbathValue] = React.useState(false)
  const [caffeine, setCaffeineValue] = React.useState(false)

const setElectronics = () => {
  setElectronicsValue(prevValue => !prevValue)
}

const setSleepMask = () => {
  setSleepMaskValue(prevValue => !prevValue)
}

const setRegularTime = () => {
  setRegularTimeValue(prevValue => !prevValue)
}

const setNapping = () => {
  setNappingValue(prevValue => !prevValue)
}

const setWarmBath = () => {
  setWarmbathValue(prevValue => !prevValue)
}

const setCaffeine = () => {
  setCaffeineValue(prevValue => !prevValue)
}
  


  const submitForm = React.useCallback( async () =>{
  const sleepRef = scopeRefByUserAndDate('Surveys', 'sleep')
    await firebase
      .database()
      .ref(sleepRef)
      .update({
        sleepDaily: sleepDaily,
        slelectronics: electronics,
        slsleepmask: sleepMask,
        slregulartime: regularTime,
        slnapping: napping,
        slwarmbath: warmBath,
        slcaffeine: caffeine
      });
    Actions.landing();
  })

    return (
      <Container>
     <TrackingScreen
      backgroundImage={sleepTrackingImage}
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
            <Text style={{ color: "#bf55ec", fontSize: 30, fontWeight: "600" }}>
              Sleep
            </Text>
          </Text>
          <View style={{backgroundColor:"#B72B90", width: '85%', alignSelf: 'center', height: 90 }}>
          <Text style={{fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: '700'}}>
            Program Expectations
          </Text>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
          Implement 4 or more of the 6 sleep hygiene practices each day for 30
            days
          </Text>
          </View>
          <View style={{alignItems:'center', marginTop: 10}}>
            <Text  style={{
                marginBottom: "5%",
                fontSize: 20,
                textAlign: "center",
                fontWeight: "600"
              }}>Did I Implement 4 or More of the 6 Sleep Hygiene Practices?</Text>
            <RadioForm
              radio_props={[
                { label: "Yes", value: "1" },
                { label: "No", value: "0" }
              ]}
              initial={false}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#fff"}
              selectedButtonColor={"#fff"}
              labelStyle={{fontSize: 20, color: '#000'}}
              animation={true}
              onPress={value => setDailySleepValue(value)}
            />
          </View>
          <Content>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                marginTop: "10%",
                marginBottom: "10%",
                fontWeight: "600"
              }}
            >
              Which sleep hygiene practices did you implement today?
            </Text>
            <ListItem onPress={setElectronics}>
              <CheckBox
                color="#f44336"
                checked={electronics}
                onPress={setElectronics}
              />
              <Body>
                <Text>No Electronics 90 minutes before bed</Text>
              </Body>
            </ListItem>
            <ListItem onPress={setSleepMask}>
              <CheckBox
                onPress={setSleepMask}
                color="#ec49b3"
                checked={sleepMask}
              />
              <Body>
                <Text>Sleep mask or blackout shades</Text>
              </Body>
            </ListItem>
            <ListItem onPress={setRegularTime}>
              <CheckBox
                onPress={setRegularTime}
                color="#eb56f2"
                checked={regularTime}
              />
              <Body>
                <Text>Regular bedtime</Text>
              </Body>
            </ListItem>
            <ListItem onPress={setNapping}>
              <CheckBox
                onPress={setNapping}
                color="#7d49f3"
                checked={napping}
              />
              <Body>
                <Text>No Napping</Text>
              </Body>
            </ListItem>
            <ListItem onPress={setWarmBath}>
              <CheckBox
                onPress={setWarmBath}
                color="#0e248d"
                checked={warmBath}
              />
              <Body>
                <Text>Warm bath/shower prior to bed</Text>
              </Body>
            </ListItem>
            <ListItem onPress={setCaffeine}>
              <CheckBox
                onPress={setCaffeine}
                color="#607d8b"
                checked={caffeine}
              />
              <Body>
                <Text>Avoid caffeine 10 hours before bed</Text>
              </Body>
            </ListItem>
          </Content>
          </TrackingScreen>
      </Container>
    );
}
export default SleepTracking;
