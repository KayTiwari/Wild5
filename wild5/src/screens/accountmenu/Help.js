import React from "react";
import { ScrollView, View, Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";
import { Container, Text } from "native-base";
import Navbar from "../../components/Navbar";

const screenheight = Dimensions.get("window").height;

const Help = () => {
  return (
    <Container
      style={{
        height: screenheight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <ScrollView style={{ marginLeft: "5%", marginRight: "5%" }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              marginTop: "20%",
              marginBottom: "5%"
            }}
          >
            About
          </Text>
          <Text style={{}}>
            Resource materials created by Saundra and Rakesh Jain.
          </Text>
          <Text style={{ marginTop: "5%" }}>
            App created on React Native by Abhi Tiwari and Bill Violette.
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              marginTop: "20%",
              marginBottom: "5%"
            }}
          >
            FAQ
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            How do I use this app?
          </Text>
          <Text style={{ fontSize: 15, marginTop: "5%" }}>
            Use this app daily as supplemental instruction to the Wild5 booklet.
          </Text>
        </View>
      </ScrollView>
      <View>
        <Navbar faqdisable/>
      </View>
    </Container>
  );
};

export {Help};
