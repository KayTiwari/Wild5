import React, { Component } from "react";
import {
  Text,
  View,
  CameraRoll,
  Image,
  AlertIOS,
  Dimensions,
  ScrollView
} from "react-native";

const { height, width } = Dimensions.get("window");

class NutritionQuestCameraRoll extends Component {
  state = {
    photos: [],
    date: new Date
  };

  componentDidMount() {
   this.getPhotos()
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 14,
      assetType: "Photos",
      groupTypes: "album",
      groupName: "Wild5"
    }).then(r => {
      console.log(r.edges),
      this.setState({
        photos: r.edges
      }).catch(err => AlertIOS.alert(err))
    });
  }

  render() {
    const pictures =
      this.state.photos.length !== 0
        ? this.state.photos.map((p,i) => {
          const photoTime = 
          console.log(this.state.date, new Date(p.node.timestamp * 1000))
          if (new Date(p.node.timestamp * 1000) === this.state.date)
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 200
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })
        : null;

    return (
      <ScrollView
        style={{
          height,
          width,
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "15%"
        }}
      >
        {pictures}
      </ScrollView>
    );
  }
}

export default NutritionQuestCameraRoll;
