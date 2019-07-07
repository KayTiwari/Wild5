import React, { Component } from "react";
import { Button, Text, Icon, Container } from "native-base";
import { ScrollView, View, Dimensions, StyleSheet } from "react-native";
import { human, iOSUIKit, sanFranciscoWeights, iOSColors } from 'react-native-typography'
import Navbar from "../components/Navbar";
import LinearGradient from "react-native-linear-gradient";
import { Actions } from "react-native-router-flux";
import { Tile } from 'react-native-elements'

const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;

class NewRoadMap extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <View
        style={{
          height: screenheight,
          width: screenwidth,
          display: "flex",
          backgroundColor: '#333',
          flexDirection: "column"
        }}
      >
          <LinearGradient style={{alignItems: "center", borderRadius: 5,}}
          colors={["#348F50", "#56B4D3"]}>
            <Text
              style={[{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "600",
                marginTop: "20%",
                shadowColor: 'white',
                shadowOffset: {width: 4, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 6,
              }, sanFranciscoWeights.heavy]}
              >
              The Road To Wellness
            </Text>
            <Text
              style={[{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "600",
                marginBottom: "20%",
                color: 'white',
                shadowColor: 'black',
                shadowOffset: {width: 4, height: 4},
                shadowOpacity: 0.5,
                shadowRadius: 6,
              }, iOSUIKit.title3White]}
              >
              Learn about the Wild 5
            </Text>
          </LinearGradient>

            <ScrollView>
          <View>
          <Tile
            imageSrc={require('../images/exerciselesson.jpeg')}
            title="Exercise"
            overlayContainerStyle={{}}
            featured
            activeOpacity={.8}
            titleStyle={[iOSUIKit.title3EmphasizedWhiteObject]}
            captionStyle={human.bodyWhiteObject}
            onPress={() => Actions.exerciselesson()}
            caption="“To enjoy the glow of good health, you must exercise.”"
          />
          </View>
          

          <View>
          <Tile
            imageSrc={require('../images/mindfulnesslesson.jpeg')}
            title="Mindfulness"
            featured
            activeOpacity={.8}
            onPress={() => Actions.mindfulnesslesson()}
            caption="“The past is already gone, the future is not yet here. There’s only one moment for you to live.”"
          />
          </View>

          <View>
          <Tile
            imageSrc={require('../images/sleeptile.jpeg')}
            title="Sleep"
            featured
            activeOpacity={.8}
            onPress={() => Actions.sleeplesson()}
            caption="“There is a time for many words, and there is also a time for sleep.”"
          />
          </View>


          <View>
          <Tile
            imageSrc={require('../images/socialtile.jpeg')}
            title="Social"
            featured
            activeOpacity={.8}
            onPress={() => Actions.sociallesson()}
            caption="“Alone we can do so little; together we can do so much.”"
          />
          </View>

          <View>
          <Tile
            imageSrc={require('../images/nutritiontile.jpeg')}
            title="Nutrition"
            featured
            activeOpacity={.8}
            onPress={() => Actions.nutritionlesson()}
            caption="“Our bodies are our gardens our wills are our gardeners.”"
          />
          </View>

        </ScrollView>
        <View>
          <Navbar />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mindfulness: {
    backgroundColor: "#49b8ea",
    alignSelf: "center"
  },
  sleep: {
    alignSelf: "center",
    backgroundColor: "#ba3992"
  },
  social: {
    alignSelf: "center",
    backgroundColor: "#ed3833"
  },
  nutrition: {
    alignSelf: "center",
    backgroundColor: "#f3983e"
  },
  tracking: {
    alignSelf: "center",
    backgroundColor: "#333"
  }
});

export default NewRoadMap;
