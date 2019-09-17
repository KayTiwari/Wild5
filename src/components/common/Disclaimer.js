import React from "react";
import { View, Platform, Text } from "react-native";
import { Accordion, Icon } from "native-base";
import { disclaimerData } from "./disclaimerData";

const Disclaimer = () => {

  _renderHeader = (item, expanded) => {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#041D5D" }}>
      <Text style={{ fontWeight: "600", color: '#fff' }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18, color:'#fff' }} name="remove-circle" />
          : <Icon style={{ fontSize: 18, color:'#fff' }} name="add-circle" />}
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Accordion dataArray={disclaimerData} expanded={2} renderHeader={this._renderHeader}
            contentStyle={{ backgroundColor: "#fff", color: "#000", lineHeight: Platform.OS === 'ios' ? 23 : null }}/>
    </View>
  );
};

export default Disclaimer;
