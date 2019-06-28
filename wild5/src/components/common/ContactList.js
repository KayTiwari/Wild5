import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ContactList = ({ onPress, isChecked, contact }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: "#ecf0f1"
      }}
      onPress={() => onPress(contact)}
    >
      <View
        style={{
          flex: 3,
          alignItems: "flex-start",
          justifyContent: "center"
        }}
      >
        {isChecked ? (
          <Text
            style={{
              fontWeight: "bold"
            }}
          >{`${contact.familyName} ${contact.givenName}`}</Text>
        ) : (
          <Text>{`${contact.familyName} ${contact.givenName}`}</Text>
        )}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "center"
        }}
      >
        {isChecked ? (
          <Icon name="ios-checkbox" size={30} color={"light-blue"}></Icon>
        ) : (
          <Icon name="ios-square-outline" size={30} color={"#000"}></Icon>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ContactList;
