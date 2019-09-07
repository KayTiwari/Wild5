import React from "react";
import { View, SafeAreaView } from "react-native";
import { Accordion } from 'native-base'
import Navbar from "../../components/Navbar";
import { aboutData }from '../../components/common/aboutData'

const Help = () => {
  return (
    <View
      style={{flex: 1}}
    >
    <SafeAreaView style={{flex: 1}}>
      <Accordion dataArray={aboutData} expanded={4} headerStyle={{ backgroundColor: "#fff" }}
            contentStyle={{ backgroundColor: "#fff", color: "#000", lineHeight: Platform.OS === 'ios' ? 23 : null }}/>
      
        <Navbar faqdisable/>
        </SafeAreaView>
    </View>
  );
};

export default Help;
