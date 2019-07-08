import React, { Component } from "react";
import { View, Dimensions, ImageBackground, ScrollView } from "react-native";
import {
  Text,
  Item,
  Icon,
  Input,
  Form,
  Textarea,
  Button,
  Spinner
} from "native-base";
import DatePicker from "react-native-datepicker";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { withAuthProvider } from "../context/authcontext";
import abstractimg from "../images/abstract2.jpeg";

const screenheight = Dimensions.get("window").height;
class RegisterPage extends Component {
  state = {
    loading: false
  };
  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  componentDidMount() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    this.setState({
      today: date
    });
  }

  registerPress = () => {
    const { email, password } = this.state;
    this.setState({
      loading: true,
      error: ""
    });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.onRegisterSuccess();
      })
      .catch(() => {
        this.onRegisterFail();
      });
  };

  onRegisterSuccess = () => {
    let newestuser = this.state.email.split(".");
    let newuser = newestuser[0].toString();
    const { fullName, DOB, Goals } = this.state;
    firebase
      .database()
      .ref(`UserInfo/${newuser}`)
      .update({
        fullName,
        DOB,
        Goals
      });
    Actions.landing();
  };

  onRegisterFail = () => {
    if (this.state.password.length < 6) {
      this.setState({
        error: "Password must be at least 6 characters",
        loading: false
      });
    } else {
      this.setState({
        error: "Something went wrong",
        loading: false
      });
    }
  };

  render() {
    return (
      <ScrollView bounces={false} style={{height: screenheight*1.5 }}>
        <View style={{ height: screenheight }}>
          <ImageBackground
            source={abstractimg}
            style={{ height: screenheight*1.5, width: "100%", resizeMode: "cover" }}
          >
            <View
              style={{
                height: screenheight,
                backgroundColor: "white",
                marginLeft: "5%",
                marginRight: "5%",
                marginTop: "5%",
                borderRadius: 20,
                shadowColor: 'black',
                shadowOffset: {width: 4, height: 4},
                shadowOpacity: 0.8,
                shadowRadius: 6,
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
                <Item>
                  <Icon active name="mail" />
                  <Input
                    onChangeText={value => this.setState({ email: value })}
                    placeholder="Email Address"
                    autoCapitalize={"none"}
                  />
                </Item>
              </View>
              <View
                style={{
                  marginTop: "10%",
                  marginLeft: "5%",
                  marginRight: "5%"
                }}
              >
                <Item>
                  <Icon active name="key" />
                  <Input
                    secureTextEntry
                    onChangeText={value => this.setState({ password: value })}
                    placeholder="Desired Password"
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
                    onChangeText={value => this.setState({ fullName: value })}
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
                  date={this.state.DOB}
                  mode="date"
                  placeholder="Select DOB"
                  format="YYYY-MM-DD"
                  // minDate="1930-06-01"
                  maxDate="2019-06-24"
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
                  onDateChange={date => {
                    this.setState({ DOB: date });
                  }}
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
                  >
                    
                  </Text>
                </View>
                <View style={{marginLeft:'5%', marginRight:'5%'}}>
                <Form>
                  <Textarea
                    onChangeText={value => this.setState({ Goals: value })}
                    rowSpan={5}
                    bordered
                    placeholder="What are your Wellness Goals?"
                    />
                </Form>
                </View>
              </View>

              <Text style={{ fontSize: 30, color: "red" }}>
                {this.state.error}
              </Text>

              {this.state.loading ? (
                <View style={{ alignSelf: "center" }}>
                  <Spinner />
                </View>
              ) : null}

              <View style={{ alignSelf: "center" }}>
                <Button
                  style={{ zIndex: 1000 }}
                  title="Register"
                  type="outline"
                  raised={this.state.raised}
                  onPress={() => this.registerPress()}
                >
                  <Text>Register</Text>
                </Button>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

export default withAuthProvider(RegisterPage);
