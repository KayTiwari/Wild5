import React, { Component } from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import heroTrackImg from "../../images/herologo.png";
import firebase from 'react-native-firebase'
import { TrackingScreen } from './TrackingScreen'
import { scopeRefByUserAndDate } from '../../utils/firebase'
import { Actions } from 'react-native-router-flux'

const radio_props = [{ label: "Yes", value: "1" }, { label: "No", value: "0" }];

const HeroTracking = () => {


const [heroDaily, setHeroDaily] = React.useState("")

   const submitForm = React.useCallback( async ()=>{
     const heroRef = scopeRefByUserAndDate('Surveys', 'heroDaily')
    firebase
    .database()
    .ref(heroRef)
    .update({
      HeroDailyScore: heroDaily
    }).then(()=>Alert.alert(
      'Data submitted Successfully',
      '',
      [
        {
          text: 'ok',
          onPress: () => Actions.landing(),
          style: 'ok',
        }
      ],
    )
  )

  })

  render() {
    return (
      <TrackingScreen 
      backgroundImage={heroTrackImg}
      color="#333"
      activityTitle="Hero Score"
      onSave={submitForm}
      
      >
        <View
          style={{
            height: "30%",
            width: "90%",
            alignSelf: "center",
            marginTop: 15
          }}
        >
          <Image
            source={HEROtrack}
            style={{ height: 120, width: "100%", alignSelf: "center" }}
          />
        </View>
        <View style={{ height: "25%", width: "80%", alignItems: "center", alignSelf:'center'}}>
          <Text style={{fontSize: 30, fontWeight:'700', textAlign:'center', marginBottom: 20}}>Did I Complete My HERO Exercises Today?</Text>
          <RadioForm
            radio_props={radio_props}
            initial={false}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={"#DD3121"}
            labelStyle={{fontSize: 26, color: '#000'}}
            animation={true}
            onPress={value => setHeroDaily(value)}
          />
        </View>
        </TrackingScreen>
    );
  }
}