import React from "react";
import { View, Platform } from "react-native";
import { Accordion } from 'native-base'
import Navbar from "../../components/Navbar";
import { aboutData }from '../../components/common/aboutData'

const Help = () => {
  return (
    <View
      style={{flex: 1}}
    >
      <Accordion dataArray={aboutData} expanded={4} headerStyle={{ backgroundColor: "#fff" }}
            contentStyle={{ backgroundColor: "#fff", color: "#000", lineHeight: Platform.OS === 'ios' ? 23 : null }}/>
      
        <Navbar faqdisable/>
    </View>
  );
};

export default Help;
