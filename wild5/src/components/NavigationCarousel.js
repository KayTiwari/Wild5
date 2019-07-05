import React from "react";
import {Dimensions, TouchableOpacity, StyleSheet, Text} from "react-native";
import Carousel from "react-native-snap-carousel";
import {Icon} from "native-base";
import {Actions} from "react-native-router-flux";
import LinearGradient from "react-native-linear-gradient";

const {width} = Dimensions.get("window");

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
    icon: "bed",
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

export function NavigationCarousel() {
  const renderItem = React.useCallback(({item}) => {
    return (
      <TouchableOpacity onPress={item.action}>
        <LinearGradient style={styles.container} colors={item.background}>
          <Icon name={item.icon} style={styles.icon} />
          <Text style={styles.title}>{item.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  });

  return (
    <Carousel
      data={navigationItems}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width * 0.75}
      layout="default"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 5,
    padding: 20,
  },
  icon: {color: "white", fontSize: 136},
  title: {color: "white", fontSize: 24},
});
