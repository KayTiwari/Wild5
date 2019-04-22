import React, { Fragment, Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import ModButton from "./common/ModButton"

import Modal from "react-native-modal";

class RegisterModal extends Component {
  state = {
    visible: false
  };

  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render() {
    return (
      <Fragment>
        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.1}
          onSwipe={this.closeModal}
          // swipeDirection={"left"} <-- We can't specify swipeDirection since we want to scroll inside the modal
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <ScrollView>
              <Text style={styles.description}>
                {[
                  "This is a scrollable modal from the 'react-native-modal' library.\n\n",
                  "You can't swipe this modal away, because it clashes with the scroll of the scrollView.\n\n",
                  "So if you want to scroll inside the modal, you can't specify swipeDirection.\n\n",
                  "However, you can scroll inside the modal to check the content.\n\n",
                  "There are basically 2 ways to close this modal:\n",
                  " - Click on the backdrop.\n",
                  " - Click on the button at the bottom of the scrollView.\n\n",
                  "To provide a better UX, you can put a X at the top right corner of this modal, ",
                  "so that the user doesn't have to scroll all the way."
                ]}
              </Text>
              <ModButton
                color="#00D774"
                label="Close Modal"
                onPress={this.closeModal}
              />
            </ScrollView>
          </View>
        </Modal>

        <ModButton
          color="#00D774"
          label="Scrollable Modal"
          onPress={this.openModal}
        />
      </Fragment>
    );
  }
}

export default RegisterModal;

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
