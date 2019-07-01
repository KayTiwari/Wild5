import React, { Component } from "react";
import { Button, Text, Icon, Container } from "native-base";
import { ScrollView, View, Dimensions, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";
import { Actions } from "react-native-router-flux";

const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;

class NewRoadMap extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <Container
        style={{
          height: screenheight,
          width: screenwidth,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <ScrollView>
          <View style={{ borderColor: "red" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "600",
                marginTop: "20%"
              }}
            >
              The Road To Wellness
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "600",
                marginBottom: "20%"
              }}
            >
              Learn about the Wild 5
            </Text>
          </View>

          {/* <View style={{marginBottom: '20%'}}>
            <Button onPress={() => Actions.trackingform()} style={styles.tracking} bordered info large iconright>
                <Text style={{}}>Wellness Tracking Form</Text>
            </Button>
        </View> */}

          <View>
            <Button
              onPress={() => Actions.exerciselesson()}
              style={{ alignSelf: "center", backgroundColor: "#72B83E" }}
              large
              iconright
            >
              <Icon name="bicycle" />
              <Text>Exercise</Text>
            </Button>
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "600",
              alignSelf: "center"
            }}
          >
            .
          </Text>

          <View>
            <Button
              style={styles.mindfulness}
              onPress={() => Actions.mindfulnesslesson()}
              success
              large
              iconright
            >
              <Icon name="cloud" />
              <Text>Mindfulness</Text>
            </Button>
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "600",
              alignSelf: "center"
            }}
          >
            .
          </Text>

          <View>
            <Button
              style={styles.sleep}
              onPress={() => Actions.sleeplesson()}
              success
              large
              iconright
            >
              <Icon name="moon" />
              <Text>Sleep</Text>
            </Button>
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "600",
              alignSelf: "center"
            }}
          >
            .
          </Text>

          <View>
            <Button
              style={styles.social}
              onPress={() => Actions.sociallesson()}
              success
              large
              iconright
            >
              <Icon name="bonfire" />
              <Text>Social</Text>
            </Button>
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "600",
              alignSelf: "center"
            }}
          >
            .
          </Text>

          <View>
            <Button
              style={styles.nutrition}
              onPress={() => Actions.nutritionlesson()}
              success
              large
              iconright
            >
              <Icon name="restaurant" />
              <Text>Nutrition</Text>
            </Button>
          </View>
        </ScrollView>
        <View>
          <Navbar />
        </View>
      </Container>
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
