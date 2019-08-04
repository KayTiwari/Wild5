import React from "react";
import {TouchableOpacity, StyleSheet, Text, View} from "react-native";
import {Icon} from "native-base";
import {Actions} from "react-native-router-flux";
import LinearGradient from "react-native-linear-gradient";
import {withAuthProvider} from "../context/authcontext";

const navigationItems = [
  {
    title: "Track Exercise",
    icon: "bicycle",
    action: () => Actions.exercisetracking(),
    background: ["#a8eb12", "#79c141"],
  },
  {
    title: "Track Mindfulness",
    icon: "headset",
    action: () => Actions.mindfulnesstracking(),
    background: ["#00cbea", "#3fb5eb"],
  },
  {
    title: "Track Sleep",
    icon: "moon",
    action: () => Actions.sleeptracking(),
    background: ["#e94c7e", "#b92e91"],
  },
  {
    title: "Track Social",
    icon: "contacts",
    action: () => Actions.socialtracking(),
    background: ["#db1b63", "#ee3422"],
  },
  {
    title: "Track Nutrition",
    icon: "restaurant",
    action: () => Actions.nutritiontracking(),
    background: ["#f66f63", "#f79a2e"],
  },
];

export function Navigation(props) {
  const renderItem = React.useCallback(item => {
    return (
      <TouchableOpacity style={styles.touchable} onPress={item.action}>
        <LinearGradient style={styles.item} colors={item.background}>
          <Icon name={item.icon} style={styles.icon} />
          <Text style={styles.title}>{item.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      {navigationItems.map(item => renderItem(item))}

      {renderItem({
        title: "Today's Progress",
        icon: "stats",
        action: () => {
          props.getTrackingData();
          Actions.progress();
        },
        background: ["#0b2261", "#762e73"],
      })}
    </View>
  );
}

export default withAuthProvider(Navigation);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  touchable: {
    marginBottom: 30,
  },
  item: {
    alignItems: "center",
    borderRadius: 5,
    padding: 20,
  },
  icon: {color: "white", fontSize: 136},
  title: {color: "white", fontSize: 24},
});
