import React from "react";
import {StyleSheet, Text, View, Dimensions} from "react-native";
import RNSnapCarousel from "react-native-snap-carousel";
import LinearGradient from "react-native-linear-gradient";

const {width: screenWidth} = Dimensions.get("window");

class Carousel extends React.Component {
  state = {
    carouselItems: [
      {
        id: 2,
        title: `"Perfection is not the goal, set your goals high and do your best everyday!"`,
      },
      {
        id: 3,
        title: `"Be kind to yourself as you begin making these changes.  Change is never easy."`,
      },
      {
        id: 4,
        title: `"If you miss a day or 2 shake it off, regroup, and begin again."`,
      },
      {
        title: `"Do not throw in the towel.  Remember to track your daily exercise practices using the participant tracking from"`,
      },
    ],
  };

  renderItem = ({item}) => {
    return (
      <LinearGradient
        colors={["#22c1c3", "#0AB1E7"]}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          borderRadius: 5,
        }}
      >
        <Text style={{color: "white", fontSize: 20}} adjustsFontSizeToFit>
          {item.title}
        </Text>
      </LinearGradient>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Words of Advice</Text>
        <RNSnapCarousel
          data={this.state.carouselItems}
          sliderWidth={screenWidth}
          itemWidth={250}
          renderItem={this.renderItem}
          autoplay={true}
          autoplayInterval={5000}
          loop={true}
          layout={"default"}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  header: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Carousel;
