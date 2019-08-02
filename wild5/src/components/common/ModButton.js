import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const ModButton = ({color, onPress, label, style}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, style, {backgroundColor: color}]}
  >
    <Text style={styles.buttonLabel}>{label}</Text>
  </TouchableOpacity>
);

export {ModButton};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    alignSelf: 'stretch',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    padding: 15,
    alignSelf: 'center',
  },
});
