import React from "react";
import { View, ActivityIndicatorIOS, ActivityIndicator } from "react-native";

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || large} />
    </View>
  );
};
//size prop: large or small

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export { Spinner };
