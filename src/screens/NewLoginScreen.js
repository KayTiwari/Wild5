import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView
} from "react-native"; 
import { Text, Spinner } from "native-base";
import ForgotModal from "../modals/NewForgotModal";
import firebase from 'react-native-firebase';
import { withAuthProvider } from "../context/authcontext";
import { Actions } from "react-native-router-flux";
import abstractimg from "../images/abstract2.jpeg";
import wild5title from "../images/wild-5-logo-r-color.png";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from "react-native-elements";
// import console = require('console');

const screenheight = Dimensions.get("window").height;

class NewLoginScreen extends Component {
  state = {
    email: "",
    password: "",
    raised: true,
    error: "",
    loading: false,
    modal: false
  };

  LoginPress() {
    const { email, password } = this.state;
    this.setState({
      error: "",
      loading: true
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.onLoginSuccess();
      })
      .catch((err) => {
        this.onLoginFail(err);
      });
  }

  onLoginSuccess() {
    Actions.landing();
    this.props.getUser();
  }

  onLoginFail(err) {
    console.log(err.message);
    if (err.message === 'The email address is badly formatted'){
      this.setState({
        error: 'Invalid Email Address'
      })
    } else if (err.message === 'There is no user record corresponding to this identifier. The user may have been deleted.'){
      this.setState({
        error: 'Email address not registered yet!'
      })
    } else if (err.message === 'The password is invalid or the user does not have a password.'){
      this.setState({
        error: 'Wrong Password'
      })
    } else{
    this.setState({
      error: err.message
    });
  }
  }

  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: "gray", height: screenheight }}>
          {this.state.modal ? (
            <ForgotModal isVisible={this.state.modal} />
          ) : null}
          <ImageBackground
            source={abstractimg}
            style={{
              flex: 1,
              resizeMode: "cover",
              height: screenheight,
              width: "100%"
            }}
          >
            <View
              style={{ width: "80%", alignSelf: "center", marginTop: "10%" }}
            >
              <Image
                source={wild5title}
                style={{
                  resizeMode: "contain",
                  width: "100%",
                  marginTop: "15%"
                }}
              />
            </View>

            <View
              style={{
                backgroundColor: "white",
                height: "40%",
                width: "80%",
                padding: 30,
                borderRadius: 5,
                position: "absolute",
                top: "35%",
                shadowColor: 'black',
                shadowOffset: {width: 4, height: 4},
                shadowOpacity: 0.5,
                shadowRadius: 6,
                alignSelf: "center"
              }}
            >
              <Input
                placeholder="Email"
                onChangeText={email => this.setState({ email })}
                spellCheck={false}
                keyboardType={"email-address"}
                autoCapitalize={"none"}
                textContentType={"emailAddress"}
                shake={true}
              />
              <Input
                placeholder="Password"
                onChangeText={password => this.setState({ password })}
                spellCheck={false}
                textContentType={"password"}
                autoCapitalize={"none"}
                secureTextEntry={true}
                shake={true}
                inputContainerStyle={{
                  backgroundColor: "white",
                  borderLeftColor: "white",
                  borderRightColor: "white",
                  borderBottomWidth: 0,
                  borderWidth: 1
                }}
              />
            </View>
          </ImageBackground>
          <Text
            style={{
              position: "absolute",
              top: "50%",
              width: "50%",
              marginBottom: 0,
              alignSelf: "center",
              color: "red"
            }}
          >
            {this.state.error}
          </Text>
          {this.state.loading && !this.state.error ? (
            <View
              style={{
                position: "absolute",
                top: "47%",
                width: "50%",
                marginBottom: 0,
                alignSelf: "center"
              }}
            >
              <Spinner />
            </View>
          ) : null}
          <View
            style={{
              position: "absolute",
              top: "55%",
              width: "50%",
              marginTop: 0,
              alignSelf: "center"
            }}
          >
            <Button
              title="Login"
              type="outline"
              raised={this.state.raised}
              onPress={() => this.LoginPress()}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: "62%",
              width: "50%",
              alignSelf: "center"
            }}
          >
            <Button
              title="Register"
              type="outline"
              raised={this.state.raised}
              onPress={() => Actions.registerpage()}
            />
          </View>

          <View
            style={{
              position: "absolute",
              top: "70%",
              width: "50%",
              alignSelf: "center"
            }}
          >
            <Button
              title="Forgot password?"
              onPress={() => this.setState({ modal: !this.state.modal })}
              type="clear"
              titleStyle={{ fontSize: 15 }}
            />
          </View>
        </View>

        <View style={{ backgroundColor: "#333" }}>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "600",
              textAlign: "center",
              marginTop: "10%"
            }}
          >
            App made on React Native by the Wild Card Team.
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "600",
              textAlign: "center",
              marginBottom: "5%"
            }}
          >
            Wild5 and all its resource materials are a product of the works by
            Rakesh and Saundra Jain MD.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default withAuthProvider(NewLoginScreen);
