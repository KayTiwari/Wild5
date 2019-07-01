import React, { Fragment, Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { ModButton, Input, CardSection, Button } from "../components/common";
import { withProvider } from "../context/context";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";

import Modal from "react-native-modal";

class RegisterModal extends Component {
  state = {
    visible: this.props.visible,
    error: "",
    email: "",
    password: ""
  };

  registerUser = () => {
    const { email, password } = this.state;
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
    this.setState({
      visible: false
    });
    Actions.landing();
  };

  onRegisterFail = () => {
    if (this.state.password.length < 6) {
      this.setState({
        error: "Password must be at least 6 characters"
      });
    } else {
      this.setState({
        error: "Something went wrong"
      });
    }
  };

  closeModal = () => this.setState({ visible: false });

  render() {
    return (
      <Fragment>
        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.1}
          onSwipe={this.closeModal}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <ScrollView>
              <Text style={styles.description}>
                {["Welcome to the Wild5 Wellness App.\n"]}
              </Text>

              <CardSection>
                <Input
                  placeholder="Email Address"
                  label="Desired Email"
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />
              </CardSection>

              <View style={{ marginTop: 20 }}>
                <CardSection>
                  <Input
                    placeholder="Enter new password"
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry
                  ></Input>
                </CardSection>
              </View>

              <Text style={{ color: "#F00", alignSelf: "center" }}>
                {this.state.error}
              </Text>

              <View style={{ marginTop: 30 }}>
                <ModButton
                  color="purple"
                  label="Submit"
                  onPress={this.registerUser}
                />
                <ModButton
                  color="#333"
                  label="Close"
                  onPress={this.closeModal}
                />
              </View>
            </ScrollView>
          </View>
        </Modal>
      </Fragment>
    );
  }
}

export default withProvider(RegisterModal);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    marginHorizontal: 40,
    marginVertical: 120
  },
  description: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    fontSize: 18,
    color: "white"
  }
});
