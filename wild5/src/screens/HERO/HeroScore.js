import React, { Component } from "react";
import { View, Dimensions, Image } from "react-native";
import { Text, Spinner } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";
import Navbar from "../../components/Navbar";
import HEROlogo from "../../images/herologo.png";
import AnimateNumber from "react-native-animate-number";

const screenheight = Dimensions.get("window").height;
class HeroScore extends Component {
  state = {
    total: 0
  };

  componentWillMount() {
    var user = firebase.auth().currentUser;
    if (user) {
      var res = user.email.split(".");
      var userEm = res[0].toString();
      this.setState({
        user: userEm
      });
    } else {
      console.log("noperz");
    }
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var dateTime = date;
    this.setState({
      date: dateTime
    });
  }

  componentDidMount() {
    var database = firebase.database();
    var ref = database.ref(`HERO/${this.state.user}/${this.state.date}`);
    ref.on("value", this.gotData, this.errData);
  }

  gotData = data => {
    let newData = data.val();
    console.log(newData);
    this.returnTotal(newData);
    this.setState({
      data: newData
    });
  };

  returnTotal = data => {
    let total =
      data.happyval + data.enthval + data.mentval + data.optval + data.resval;
    this.setState({
      total
    });
  };

  totalReview = () => {
    if (this.state.total === 0) {
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "0%",
            color: "#2e3131"
          }}
        >
          Keep it Going!
        </Text>
      );
    } else if (this.state.total >= 10 && this.state.total <= 20) {
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "0%",
            color: "#e47833"
          }}
        >
          Great Start!
        </Text>
      );
    } else if (this.state.total >= 20 && this.state.total <= 30) {
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "0%",
            color: "#f62459"
          }}
        >
          Amazing Work!
        </Text>
      );
    } else if (this.state.total >= 40 && this.state.total <= 49) {
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "0%",
            color: "#1e8bc3"
          }}
        >
          Outstanding work!
        </Text>
      );
    } else if (this.state.total === 50) {
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: "0%",
            color: "#a537fd"
          }}
        >
          Exceptional Work!
        </Text>
      );
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          height: screenheight,
          backgroundColor: "white"
        }}
      >
        <View style={{ width: "80%", alignSelf: "center", marginTop: "15%" }}>
          <Image
            source={HEROlogo}
            style={{ width: "100%", resizeMode: "contain" }}
          />
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "600",
              marginTop: "0%"
            }}
          >
            Your HERO Score For This Week
          </Text>
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: "600",
              marginTop: "-10%"
            }}
          >
            TOTAL SCORE: 0 - 50
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: "600",
              marginTop: "-10%"
            }}
          >
            Higher scores indicate higher levels of wellness
          </Text>
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "600",
              marginTop: "0%",
              marginBottom: "0%"
            }}
          >
            <AnimateNumber
              value={this.state.total}
              formatter={val => {
                return parseFloat(val).toFixed(0);
              }}
            />
          </Text>
        </View>

        <View>{this.state.total ? this.totalReview() : <Spinner />}</View>

        <View>
          <Navbar />
        </View>
      </View>
    );
  }
}

export { HeroScore };
