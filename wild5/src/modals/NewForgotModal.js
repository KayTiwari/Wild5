import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { Input, Item } from "native-base";
import firebase from "firebase";
import Modal from "react-native-modal";

//https://github.com/react-native-community/react-native-modal

class NewForgotModal extends Component {
  state = {
    isVisible: this.props.isVisible
  };

  toggleModal = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  forgotPress = () => {
    const { email } = this.state;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        this.setState({
          success: "Please check your Email",
          error: ""
        });
      })
      .catch(() => {
        this.setState({
          error: "Incorrect Email Entered",
          success: ""
        });
      });
  };

  render() {
    return (
      <View>
        <Modal
          isVisible={this.state.isVisible}
          animationIn="lightSpeedIn"
          animationOut="fadeOut"
          backdropTransitionOutTiming={0}
        >
          <View style={{}}>
            <View
              style={{
                height: "50%",
                width: "100%",
                backgroundColor: "white",
                borderRadius: 10
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "600",
                  marginTop: "5%"
                }}
              >
                Please enter your Email address
              </Text>
              {this.state.error ? (
                <Text style={{ textAlign: "center", color: "red" }}>
                  {this.state.error}
                </Text>
              ) : null}
              {this.state.success ? (
                <Text style={{ textAlign: "center", color: "green" }}>
                  {this.state.success}
                </Text>
              ) : null}
              <Item>
                <Input
                  placeholder="Email Address"
                  onChangeText={email => this.setState({ email })}
                  spellCheck={false}
                  textContentType={"emailAddress"}
                  shake={true}
                  autoCorrect={false}
                />
              </Item>
              {this.state.email ? (
                <Button
                  title="Get Password"
                  onPress={() => this.forgotPress()}
                />
              ) : null}
              <Button title="Close" onPress={this.toggleModal} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default NewForgotModal;
