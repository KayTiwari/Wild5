import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { Icon, Input } from "native-base";
import firebase from "react-native-firebase";
import { withAuthProvider } from "../context/authcontext";

const LoginModal = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [raised, setRaised] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPW, setForgotPW] = useState(false);

  LoginPress = () => {
    if (email === "" && password === "") {
      setError("Please enter your email and password");
    } else if (email === "") {
      setError("Please enter your email");
    } else if (password === "") {
      setError("Please enter your password");
    } else {
      setLoading(true);
      setError("");
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("logged in");
        })
        .catch(err => {
          this.onLoginFail(err);
        });
    }
  };

  closeModal = () => {
    return props.closeModal();
  };

  forgotPress = () => {
    setLoading(true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert("Success, Password Reset! Check Your Email", "", [
          {
            text: "ok",
            onPress: () => closeModal(),
            style: "ok"
          }
        ]);
      })
      .catch(err => {
        setError(err);
      });
  };

  onLoginFail = err => {
    console.log(err.message);
    if (err.message === "The email address is badly formatted") {
      setError("Invalid Email Address");
    } else if (
      err.message ===
      "There is no user record corresponding to this identifier. The user may have been deleted."
    ) {
      setError("Email address not registered yet!");
    } else if (
      err.message ===
      "The password is invalid or the user does not have a password."
    ) {
      setError("Wrong Password");
    } else {
      setError(err.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={()=> props.closeModal()}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{backgroundColor: "#fff",
          height:
            !forgotPW && !loading
              ? 320
              : !forgotPW && loading
              ? 410
              : forgotPW && loading
              ? 250
              : 200,
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "5%",
          borderRadius: 20,
          shadowColor: "black",
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 6}}
        >
          <View
            style={styles.inputContainer}
          >
            <Input
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              spellCheck={false}
              keyboardType={"email-address"}
              autoCapitalize={"none"}
              textContentType={"emailAddress"}
              shake={true}
            />
          </View>
          {!forgotPW ? (
            <View
              style={{
                alignSelf: "center",
                marginTop: "10%",
                height: 50,
                width: "80%",
                borderBottomWidth: 2,
                borderColor: "#041D5D"
              }}
            >
              <Input
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                spellCheck={false}
                textContentType={"password"}
                autoCapitalize={"none"}
                secureTextEntry={true}
                shake={true}
                inputContainerStyle={{
                  backgroundColor: "white",
                  borderLeftColor: Platform.OS === "ios" ? "white" : null,
                  borderRightColor: Platform.OS === "ios" ? "white" : null,
                  borderBottomWidth: 0,
                  borderWidth: 1
                }}
              />
            </View>
          ) : null}
          {loading ? (
            <View style={{ alignSelf: "center", paddingTop: 10 }}>
              <ActivityIndicator size="large" color="#041D5D" />
            </View>
          ) : null}
          <View style={{ alignSelf: "center", width: "90%", marginTop: "5%" }}>
          {error ? <Text style={{alignSelf:'center', color:'red'}}>{error}</Text> : null}
            {!forgotPW ? (
              <TouchableOpacity
                style={{
                  height: 70,
                  width: "80%",
                  borderRadius: 10,
                  backgroundColor: "#041D5D",
                  alignSelf: "center",
                  justifyContent: "center"
                }}
                onPress={() => LoginPress()}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#fff",
                    fontSize: 26,
                    fontWeight: "800"
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  height: 70,
                  width: "80%",
                  borderRadius: 10,
                  backgroundColor: "#041D5D",
                  alignSelf: "center",
                  justifyContent: "center"
                }}
                onPress={() => forgotPress()}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#fff",
                    fontSize: 26,
                    fontWeight: "800"
                  }}
                >
                  Reset Password
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {!forgotPW ? (
            <TouchableOpacity
              style={{ alignSelf: "center", marginTop: 10 }}
              onPress={() => setForgotPW(true)}
            >
              <Text style={{ color: "#041D5D" }}>Forgot Password?</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginModal;


const styles = StyleSheet.create({
  modalContainer: {
    
  },
  inputContainer: {
    alignSelf: "center",
    marginTop: "10%",
    height: 50,
    width: "80%",
    borderBottomWidth: 2,
    borderColor: "#041D5D"
  }
})