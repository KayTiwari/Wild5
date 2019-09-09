import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text
} from "react-native";
import {
  Item,
  Icon,
  Input,
  Form,
  Textarea,
  Spinner
} from "native-base";
import DatePicker from "react-native-datepicker";
import firebase from "react-native-firebase";
import { Actions } from "react-native-router-flux";
import { withAuthProvider } from "../context/authcontext";
import { scopeRefByUser } from "../utils/registration";
import abstractimg from "../images/abstract2.jpeg";
import Disclaimer from "../components/common/Disclaimer";
const screenheight = Dimensions.get("window").height;
const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [acceptDisclaimer, setAcceptDisclaimer] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [chosenDate, setChosenDate] = useState(new Date());
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [goals, setGoals] = useState("");
  const [raised, setRaised] = useState(true);
  const [date, setInitialDate] = useState(new Date());

  setDate = newDate => {
    setChosenDate(newDate);
  };

  showDisclaimerScreen = () => {
    if (email === "" && password === "") {
      setError("Please enter email and password");
    } else if (email === "") {
      setError("Please enter an email");
    } else if (password === "") {
      setError("Please enter a password");
    } else {
      setError("");
      setShowDisclaimer(true);
    }
  };

  registerPress = () => {
    setAcceptDisclaimer(true);
    setLoading(true);
    setError("");
    if (email !== "" && password !== "") {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          onRegisterSuccess();
        })
        .catch(err => {
          this.onRegisterFail(err);
        });
    } else {
      setError("something went wrong");
    }
  };

  const onRegisterSuccess = useCallback(async () => {
    const registrationRef = scopeRefByUser("UserInfo");

    await firebase
      .database()
      .ref(registrationRef)
      .update({
        accepteddisclaimer: acceptDisclaimer,
        fullName,
        dob,
        goals,
        date: date.toString()
      });
  });

  onRegisterFail = err => {
    setError(err.message);
    setLoading(false);
  };

  return !showDisclaimer ? (
    <ScrollView bounces={false} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={abstractimg}
          style={{
            height: screenheight * 1.5,
            width: "100%",
            resizeMode: "cover"
          }}
        >
          <View
            style={{
              height: screenheight * 1.2,
              backgroundColor: "white",
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "5%",
              borderRadius: 20,
              shadowColor: "black",
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 0.8,
              shadowRadius: 6
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "5%"
                }}
              >
                Register for the Wild 5 Wellness App
              </Text>
            </View>

            <View
              style={{
                marginTop: "10%",
                marginLeft: "5%",
                marginRight: "5%"
              }}
            >
              <View
                style={{
                  height: 50,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Icon
                  active
                  name="mail"
                  style={{ alignSelf: "center", marginRight: 5 }}
                />
                <Input
                  keyboardType={"email-address"}
                  style={{ alignSelf: "center" }}
                  onChangeText={text => setEmail(text)}
                  placeholder="Email Address"
                  autoCapitalize={"none"}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: "10%",
                marginLeft: "5%",
                marginRight: "5%"
              }}
            >
              <View
                style={{
                  height: 50,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Icon
                  active
                  name="key"
                  style={{ alignSelf: "center", marginRight: 5 }}
                />
                <Input
                  style={{ alignSelf: "center" }}
                  secureTextEntry
                  onChangeText={text => setPassword(text)}
                  placeholder="Desired Password"
                />
              </View>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "10%"
                }}
              >
                Tell us more about yourself
              </Text>
            </View>
            <View
              style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}
            >
              <Item>
                <Icon active name="contact" />
                <Input
                  spellCheck={false}
                  onChangeText={text => setFullName(text)}
                  autoCorrect={false}
                  placeholder="Full name"
                />
              </Item>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "10%"
                }}
              >
                Date Of Birth
              </Text>
            </View>
            <View style={{ marginTop: "5%", alignSelf: "center" }}>
              <DatePicker
                style={{ width: 200 }}
                date={dob}
                mode="date"
                placeholder="Select DOB"
                format="MM-DD-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={date => setDob(date)}
              />
            </View>

            <View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "6%"
                  }}
                />
              </View>
              <View style={{ marginLeft: "5%", marginRight: "5%" }}>
                <Form>
                  <Textarea
                    onChangeText={text => setGoals(text)}
                    rowSpan={5}
                    bordered
                    placeholder="What are your Wellness Goals?"
                  />
                </Form>
              </View>
            </View>

            <Text
              style={{
                fontSize: 30,
                color: "red",
                alignSelf: "center",
                textAlign: "center"
              }}
            >
              {error}
            </Text>

            {loading && !error ? (
              <View style={{ alignSelf: "center" }}>
                <Spinner />
              </View>
            ) : null}

            <View style={{ alignSelf: "center", marginTop: "5%" }}>
             <TouchableOpacity style={{height: 70, width:150, backgroundColor:"#041D5D", borderRadius:7, justifyContent:'center'}} onPress={() => showDisclaimerScreen()}>
               <Text style={{fontSize:24, color:"#fff", alignSelf:'center'}}>Register</Text>
             </TouchableOpacity>

            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <Disclaimer />
      {loading && !error ? (
        <Spinner />
      ) : error ? (
        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontSize: 20, color: "red", alignSelf: "center" }}>
            {error}
          </Text>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: "row",
          height: 100,
          justifyContent: "space-around",
          alignContent: "center",
          backgroundColor: "#fff",
          borderColor: "#041D5D",
          borderTopWidth: 2
        }}
      >
        <View style={{ alignSelf: "center" }}>
        <TouchableOpacity style={{height: 70, width:150, backgroundColor:"#041D5D", borderRadius:7, justifyContent:'center'}} onPress={()=> this.registerPress()}>
               <Text style={{fontSize:24, color:"#fff", alignSelf:'center'}}>Accept</Text>
             </TouchableOpacity>
        </View>
        <View style={{ alignSelf: "center" }}>
        <TouchableOpacity style={{height: 70, width:150, backgroundColor:"#041D5D", borderRadius:7, justifyContent:'center'}} onPress={() => Actions.newlogin()}>
               <Text style={{fontSize:24, color:"#fff", alignSelf:'center'}}>Decline</Text>
             </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withAuthProvider(RegisterPage);
