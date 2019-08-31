import React, { Component } from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { Text, Icon, Spinner } from "native-base";
import { withAuthProvider } from "../../context/authcontext";
import { BarChart } from "react-native-chart-kit";

// const chartConfig =
const { height, width } = Dimensions.get("window");

class SleepStats extends Component {
  state = {
    sleepData: [],
    newSleepData: []
  };

  componentWillMount() {
    if (this.props.princData) {
      this.calculateStats();
    }
  }
  componentDidMount() {
    if (this.props.princData) {
      this.calculateStats();
    }
  }
  componentWillReceiveProps() {
    if (this.props.princData) {
      this.calculateStats();
    }
  }

  calculateStats = () => {
    console.log(this.props.princData);
    let data = Object.values(this.props.princData);
    this.renderGraph(data);
  };

  renderGraph = data => {
    console.log(data)
    this.setState({
      sleepData: data
    });

    const data1 = data.map(data => {
      return data.sleep}).map((data,i)=> {
        return Object.values(data)
      });
    console.log(data1);
  };

  render() {
    const data = {
      labels: [
        "caffeine",
        "mask",
        "hot shower",
        "no elec",
        "dark light",
        "take shit"
      ],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43]
        }
      ]
    };
    return (
      <View style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ width: "95%" }}>
          <BarChart
            style={{
              marginVertical: 5
            }}
            data={data}
            width={width}
            height={220}
            fromZero={true}
            chartConfig={{
              backgroundGradientFrom: "#642B73",
              backgroundGradientTo: "#C6426E",
              color: () => `rgba(255, 255, 255, 1)`,
              strokeWidth: 2 // optional, default 3
            }}
          />
        </View>
      </View>
    );
  }
}

export default withAuthProvider(SleepStats);
