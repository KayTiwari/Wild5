import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import LinearGradient from "react-native-linear-gradient";
import chunk from "lodash/chunk";
import { withAuthProvider } from "../context/authcontext";
import HEROlogo from "../images/herologo.png";

const { width } = Dimensions.get("window");

const navigationItems = [
  {
    title: "Track Exercise",
    icon: "bicycle",
    action: () => Actions.exercisetracking(),
    background: ["#a8eb12", "#79c141"]
  },
  {
    title: "Track Mindfulness",
    icon: "headset",
    action: () => Actions.mindfulnesstracking(),
    background: ["#00cbea", "#3fb5eb"]
  },
  {
    title: "Track Sleep",
    icon: "moon",
    action: () => Actions.sleeptracking(),
    background: ["#e94c7e", "#b92e91"]
  },
  {
    title: "Track Social",
    icon: "contacts",
    action: () => Actions.socialtracking(),
    background: ["#db1b63", "#ee3422"]
  },
  {
    title: "Track Nutrition",
    icon: "restaurant",
    action: () => Actions.nutritiontracking(),
    background: ["#f66f63", "#f79a2e"]
  },
  {
    title: "HERO Exercises",
    icon: HEROlogo,
    action: () => Actions.herotracking(),
    background: ["#DD3121", "#0BA2D4", "#70B43C", "#B72B90"]
  }
];

export function Navigation(props) {
  const [bothTrue, setBothTrue] = useState(false);

  useEffect(() => {
    if (props.hero && props.hero2) {
      setBothTrue(true);
    }
  }, []);

  const renderItem = React.useCallback((item, index) => {
    return (
      <TouchableOpacity
        activeOpacity={!props.hero ? 1 : 0.7}
        key={index}
        style={styles.touchable}
        onPress={!props.hero ? null : item.action}
      >
        <LinearGradient
          style={styles.item}
          colors={props.hero ? item.background : ["white", "#ffffff00"]}
        >
          {item.title === "HERO Exercises" ? (
            <Image
              source={item.icon}
              style={{ width: "100%", height: 65, resizeMode: "contain" }}
            />
          ) : (
            <Icon name={item.icon} style={styles.icon} />
          )}
          <Text style={styles.title}>{item.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      {props.hero && !bothTrue ? (
        chunk(navigationItems, 2).map((items, index) => (
          <View key={index} style={styles.row}>
            {items.map(renderItem)}
          </View>
        ))
      ) : !props.hero ? (
        <>
          <Text style={styles.titleHEROMain}>
            Take Your HERO Wellness Survey
          </Text>
          <TouchableOpacity
            style={styles.touchableHERO}
            onPress={() => Actions.herointro()}
          >
            <LinearGradient
              style={[styles.itemHERO, styles.itemHERO2]}
              colors={["#041D5D", "#082774"]}
            >
              <Image
                source={HEROlogo}
                style={{
                  width: "100%",
                  height: "50%",
                  resizeMode: "contain",
                  alignSelf: "center"
                }}
              />
              <Text style={styles.titleHERO}>Hero Wellness{"\n"} Survey</Text>
            </LinearGradient>
          </TouchableOpacity>
        </>
      ) : props.hero && props.hero2 ? (
        <>
          <TouchableOpacity
            style={[styles.touchableHERO3]}
            onPress={() => Actions.herointro()}
          >
            <LinearGradient
              style={styles.itemHERO3}
              colors={["#041D5D", "#082774"]}
            >
              <Text style={styles.titleHERO3}>Hero Wellness{"\n"} Survey</Text>
              <View
                style={{
                  height: 300,
                  width: "100%",
                  alignSelf: "center",
                  padding: 15
                }}
              >
                <Image
                  source={HEROlogo}
                  style={{
                    width: "100%",
                    height: "30%",
                    resizeMode: "contain"
                  }}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {chunk(navigationItems, 2).map((items, index) => (
            <View key={index} style={styles.row}>
              {items.map(renderItem)}
            </View>
          ))}
          {/* <Text style={styles.titleHEROMain}>Take Your HERO Wellness Survey</Text> */}
        </>
      ) : null}
    </View>
  );
}

export default withAuthProvider(Navigation);

const styles = StyleSheet.create({
  container: { flex: 1 },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  touchable: {
    backgroundColor: "transparent",
    marginBottom: 10,
    width: (1 / 2) * width - 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  touchableHERO: {
    justifyContent: "center",
    height: 300,
    backgroundColor: "transparent",
    marginBottom: 10,
    width: width,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  item: {
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    height: 110
  },
  itemHERO: {
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    height: 250,
    width: 300
  },
  icon: { color: "white", fontSize: 60 },
  title: { color: "white", fontSize: 18 },
  titleHERO: { color: "white", fontSize: 28, textAlign: "center" },
  touchableHERO: {
    alignSelf: "center"
  },
  titleHEROMain: {
    color: "#041D5D",
    fontSize: 24,
    alignSelf: "center",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "15%"
  },
  itemHERO2: {
    justifyContent: "center"
  },
  itemHERO3: {
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    height: 180,
    width: "80%",
  },
  titleHERO3: { color: "white", fontSize: 20, textAlign: "center" },
  touchableHERO3:{
    alignSelf:'center',
    justifyContent: "center",
    height: 180,
    backgroundColor: "transparent",
    marginBottom: 10,
    width: width,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
});
