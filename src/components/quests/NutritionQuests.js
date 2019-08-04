import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CameraRollExtended from "react-native-store-photos-album";
import { RNCamera } from "react-native-camera";
import { Actions } from "react-native-router-flux";

class NutritionQuest extends Component {
  state = {
    flash: "off",
    type: "back"
  };

  async takePicture() {
    // console.log("running")
    
    if (this.camera) {
      const options = { quality: 0.5, based64: true };
      const fileName = Date.now();
      const data = await this.camera.takePictureAsync(options).then(data =>
        // console.log(data.uri))
        CameraRollExtended.saveToCameraRoll(
          { uri: data.uri, album: "Wild5", fileName: `${fileName}.jpg` },"photo")
      ).catch(e => console.log(e))
  }
  
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Container for 1st Nutrition Quest</Text>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={this.state.type}
          flashMode={this.state.flash}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel"
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel"
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> CAPTURE FOOD </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 25,
            marginRight: 10,
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <TouchableOpacity onPress={()=> Actions.quests()}>
            <Image
              style={{ width: 45, height: 45 }}
              source={require("../../images/exitbutton.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  }
});

export default NutritionQuest;
