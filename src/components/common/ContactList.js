import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "native-base";

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
          >{`${contact.givenName} ${contact.familyName}`}</Text>
        ) : (
          <Text>{`${contact.givenName} ${contact.familyName} `}</Text>
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
          <Icon name="checkbox" size={30} color={"light-blue"}/>
        ) : (
          <Icon name="square-outline" size={30} color={"#000"}/>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ContactList;
