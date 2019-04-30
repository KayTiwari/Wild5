import React, { Fragment, Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import {ModButton, Input, CardSection, Button } from "../components/common"
import {withProvider} from '../context/context'
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import Modal from "react-native-modal";

class ForgotPassModal extends Component {
  state = {
    visible: this.props.visible,
    error: '',
    success: '',
    email: '',
  };
  forgotPassword = () => {
    const {email} = this.state;
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        this.setState({
          success: 'Please check your email',
          error: ''
        })
      }).catch(() => {
        this.setState({
          error: 'Something went wrong',
          success: ''
        })
      })
  }


  // onForgotsuccess = () => {
    
  // }

  // onForgotFail = () => {
    
  // }

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
                  "Please Enter Your Account Email\n"
                ]}
              </Text>

              <CardSection>
                <Input
                placeholder='Email Address'
                label='Email Address'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                
                />
            </CardSection>

            <Text style={{color: '#F00'}}>{this.state.error}</Text>
            <Text style={{color: '#BADA55'}}>{this.state.success}</Text>

              <ModButton
                color="#4BA4E8"
                label="Submit"
                onPress={this.forgotPassword}
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

export default withProvider(ForgotPassModal);

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
