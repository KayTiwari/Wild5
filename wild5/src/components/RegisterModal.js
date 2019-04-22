import React from 'react';
import Modal from "react-native-modal";

const RegisterModal = () => {
        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.1}
          onSwipe={this.closeModal}
          // swipeDirection={"left"} <-- We can't specify swipeDirection since we want to scroll inside the modal
          onBackdropPress={this.closeModal}
        ></Modal>
}

export default RegisterModal;