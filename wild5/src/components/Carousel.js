import React from "react";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";
import Carousel from "react-native-snap-carousel";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          id: 1,
          title: "Words of Advice"
        },
        {
          id: 2,
          title: `"Perfection is not the goal, set your goals high and do your best everyday!"`
        },
        {
          id: 3,
          title: `"Be kind to yourself as you begin making these changes.  Change is never easy."`
        },
        {
          id: 4,
          title: `"If you miss a day or 2 shake it off, regroup, and begin again."`
        },
        {
          title: `"Do not throw in the towel.  Remember to track your daily exercise practices using the participant tracking from"`
        }
      ]
    };
  }
  _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={
            this.state.carouselItems[0].id === 1
              ? { fontSize: 30, color: "#fff" }
              : { fontSize: 20, color: "#fff" }
          }
        >
          {item.title}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          data={this.state.carouselItems}
          sliderWidth={250}
          itemWidth={250}
          renderItem={this._renderItem}
          autoplay={true}
          loop={true}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 250,
    backgroundColor: "#0AB1E7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }
});
export default App;
