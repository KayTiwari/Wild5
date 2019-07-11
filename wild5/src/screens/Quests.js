import React, { Component } from "react";
import { View, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Text,
  Header,
  Icon
} from "native-base";
import Navbar from "../components/Navbar";
import { QuestButton } from "../components/common/QuestButton";

const screenheight = Dimensions.get("window").height;
class Quests extends Component {
  render() {
    return (
      <>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: screenheight,
          backgroundColor:'white'
        }}
      >
        <ScrollView bounces={false}>
        <View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 50,
                marginTop: "10%",
                fontWeight: "900",
                marginBottom: 40
              }}
            >
              Quests
            </Text>
              <View style={{height: '70%', justifyContent:'space-around'}}>
            <QuestButton
              label="Nutrition"
              color="#E06F26"
              iconName1="camera"
              iconName2="nutrition"
              onPress={() => Actions.nutritionquest()}
            />

            <QuestButton
              label="Mindfulness"
              color="#0AB1E8"
              iconName1="cloud"
              iconName2="leaf"
              onPress={() => Actions.mindfulnessquest()}
            />

            <QuestButton
              label="Exercise"
              color="#72B83E"
              iconName1="bicycle"
              iconName2="walk"
              onPress={() => Actions.exercisequest()}
            />

            <QuestButton
              label="Social"
              color="#E93422"
              iconName1="people"
              iconName2="mail-open"
              onPress={() => Actions.socialquest()}
            />

            <QuestButton
              label="Sleep"
              color="#BD2C95"
              iconName1="moon"
              iconName2="bed"
              onPress={() => Actions.sleepquest()}
            />
            </View>
          </View>
        </View>

        </ScrollView>
        <View>
        <Navbar questdisable/>
        </View>
      </View>
      </>
    );
  }
}
export default Quests;
