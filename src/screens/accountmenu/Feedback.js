import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Picker, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import firebase from "react-native-firebase";
import {format} from 'date-fns';
import {Actions} from 'react-native-router-flux'
import Navbar from '../../components/Navbar'

const Feedback = () => {
  const [model, setPhoneModel] = useState("");
  const [text, setTextValue] = useState("")
  const [error, setError] = useState("")


  onSubmit= () => {
    Keyboard.dismiss()
    const date = format(new Date(), 'YYYY-MM-DD');
    const user = firebase.auth().currentUser.email
    const feedBack = {
        user,
        model: model,
        feedBackText: text
    }
    if(model === "" && text === "" && Platform.OS === 'ios'){
      setError("Please Input Your Feedback")
    } else if (model === "" && Platform.OS === 'ios'){
      setError("Please Select Phone Model")
    } else if( text === ""){
      setError("Please fill out your feedback")
    } else {
      firebase.database().ref(`Feedback/${date}`).push().set(feedBack, ()=> Alert.alert('Success!', 'Feedback Submitted, Thank you!', [
        {text: 'OK', onPress: Actions.landing()},
      ]))
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={{ flex: 1, backgroundColor:'#fff' }}>
     <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : null}
    enabled
  >
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: "10%",
            width: "100%",
            backgroundColor: "#041D5D",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: "#fff",
              alignSelf: "center",
              fontWeight: 800,
              letterSpacing: 5
            }}
          >
            Feedback
          </Text>
        </View>
       {Platform.OS === 'ios' ? <View style={{marginTop:'10%'}}>
        <Text style={{alignSelf:'center', fontSize:20, marginBottom:5, fontWeight:700}}>Phone Model</Text>
        <Picker
          selectedValue={model}
          style={{ height: 100, width: "100%" }}
          itemStyle={{height: 100}}
          onValueChange={itemValue => setPhoneModel(itemValue)}
        >
          <SafeAreaView style={{flex: 1}}>
            <View
              style={{
                height: "10%",
                width: "100%",
                backgroundColor: "#041D5D",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: "#fff",
                  alignSelf: "center",
                  fontWeight: 800,
                  letterSpacing: 5,
                }}
              >
                Feedback
              </Text>
            </View>
            {Platform.OS === "ios" ? (
              <View style={{marginTop: "10%"}}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    marginBottom: 5,
                    fontWeight: 700,
                  }}
                >
                  Phone Model
                </Text>
                <Picker
                  selectedValue={model}
                  style={{height: 100, width: "100%"}}
                  itemStyle={{height: 100}}
                  onValueChange={itemValue => setPhoneModel(itemValue)}
                >
                  <Picker.Item label="Select A Model" value="" />
                  <Picker.Item label="iPhone 7" value="iPhone 7" />
                  <Picker.Item label="iPhone 7 Plus" value="iPhone 7 Plus" />
                  <Picker.Item label="iPhone 8" value="iPhone 8" />
                  <Picker.Item label="iPhone 8 Plus" value="iPhone 8 Plus" />
                  <Picker.Item label="iPhone X" value="iPhone X" />
                  <Picker.Item label="iPhone XR" value="iPhone XR" />
                  <Picker.Item label="iPhone XS" value="iPhone XS" />
                  <Picker.Item label="iPhone XS Max" value="iPhone XS Max" />
                  <Picker.Item label="iPhone 11" value="iPhone 11" />
                  <Picker.Item label="iPhone 11 Pro" value="iPhone 11 Pro" />
                  <Picker.Item
                    label="iPhone 11 Pro Max"
                    value="iPhone 11 Pro Max"
                  />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </View>
            ) : null}
            <View style={{flex: 1, alignItems: "center", marginTop: 5}}>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 20,
                  marginBottom: 10,
                  fontWeight: "700",
                }}
              >
                What Can We Do Better?
              </Text>
              <TextInput
                style={{
                  height: "60%",
                  width: "90%",
                  borderWidth: 1,
                  borderColor: "black",
                  fontSize: 22,
                  padding: 10,
                }}
                multiline={true}
                numberOfLines={8}
                placeholder="Type your comments here..."
                onChangeText={value => setTextValue(value)}
                onSubmitEditing={Keyboard.dismiss}
              />
              {error ? (
                <Text style={{color: "red", fontWeight: "700"}}>{error}</Text>
              ) : null}
              <TouchableOpacity
                style={{
                  height: 50,
                  width: "90%",
                  backgroundColor: "#041D5D",
                  justifyContent: "center",
                  marginTop: 10,
                  borderRadius: 9,
                }}
                onPress={() => onSubmit()}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
        <Navbar feedbackdisable />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Feedback;
