import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const ModButton = ({ color, onPress, label }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, { backgroundColor: color }]}
  >
    <Text style={styles.buttonLabel}>{label}</Text>
  </TouchableOpacity>
);

export { ModButton };

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 4,
    width: "80%",
    alignSelf: 'center',
  },
  buttonLabel: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    padding: 15
  }
});