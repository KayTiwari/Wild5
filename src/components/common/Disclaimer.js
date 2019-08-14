import React from "react";
import { View, Text } from "react-native";
import { Accordion } from "native-base";
import { disclaimerData } from "./disclaimerData";

const Disclaimer = () => {
  return (
    <View style={{ flex: 1 }}>
      <Accordion dataArray={disclaimerData} expanded={2} headerStyle={{ backgroundColor: "#fff" }}
            contentStyle={{ backgroundColor: "#fff", color: "#000" }}/>
    </View>
  );
};

export default Disclaimer;
