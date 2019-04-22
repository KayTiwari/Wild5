import React, { Fragment, Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import {ModButton, Input, CardSection, Button } from "./common/"
import {withProvider} from '../context/context'

import Modal from "react-native-modal";

class RegisterModal extends Component {
  state = {
    visible: this.props.visible
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
                {[
                  "Hello, Welcome to the Wild5 Wellness App.\nBefore we start, there's some questions we'd like you to answer"
                ]}
              </Text>

              <CardSection>
                <Input
                placeholder='Email Address'
                label='Desired Email'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                
                />
            </CardSection>

            <CardSection>
            <Input
                placeholder='Enter new password'
                label='Password'
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry
                ><Button>O</Button></Input>
            </CardSection>

              <ModButton
                color="#00D774"
                label="Sure"
                onPress={this.closeModal}
              />
              <ModButton
                color="#333"
                label="Close Modal"
                onPress={this.closeModal}
              />
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
    backgroundColor: "#DCDCDC",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    marginHorizontal: 40,
    marginVertical: 120
  },
  description: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    fontSize: 18
  }
});
