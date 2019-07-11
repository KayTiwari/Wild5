import React, { Component } from "react";
import { Text, View, TouchableOpacity, AlertIOS, Button } from "react-native";
import { Icon } from "native-base";
// import { Player } from "@react-native-community/audio-toolkit";
import Sound from "react-native-sound";
import Navbar from "../Navbar";

Sound.setCategory("Playback");

const players = [
  {
    path: "a_moment_of_graditude.mp3",
    name: "A Moment of Graditude"
  },
  { path: "body_scan.mp3", name: "Body Scan" },
  {
    path: "five_minute_breathing_space.mp3",
    name: "Five Minute Breathing Space"
  },
  {
    path: "happiness_meditation.mp3",
    name: "Happiness Meditation"
  },
  {
    path: "intro_to_mindful_meal_meditation.mp3",
    name: "Intro to Mindful Meal Meditation"
  },
  { path: "mindful_breathing.mp3", name: "Mindful Breathing" },
  {
    path: "mindful_meal_meditation.mp3",
    name: "Mindful Meal Meditation"
  },
  {
    path: "mindful_moment_with_a_raisen.mp3",
    name: "Mindful Moment With a Raisen"
  },
  { path: "pain_meditation.mp3", name: "Pain Meditation" }
].map(track => ({
  player: new Sound(track.path, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log(error);
    }
  }),
  name: track.name
}));

const NO_PLAYER = -1;

export default class MindfulnessQuest extends Component {
  state = {
    activePlayerId: NO_PLAYER,
    isPlaying: null
  };

  componentDidMount() {
    console.log("mounted");
  }

  // componentWillUnmount(){
  //   players.map(player => {
  //     return (
  //       player.destroy(() => console.log("destroyed"))
  //     )
  //   })
  //   console.log("unmounted")
  // }

  render() {
    console.log(players[0].player);
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            marginTop: "10%",
            height: "85%",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginTop: 10,
              color: "#0AB2E8",
              marginBottom: 25
            }}
          >
            Listen To A Meditation
          </Text>
          {players.map(({ player, name }) => {
            return (
              <TouchableOpacity
                key={this.state.activePlayerId + Math.random()}
                style={{
                  height: 50,
                  width: "90%",
                  backgroundColor:
                    this.state.isPlaying &&
                    this.ref === this.state.activePlayerId
                      ? "#6DB03B"
                      : "#0AB2E8",
                  marginBottom: "2%",
                  marginTop: "2%"
                }}
                onPress={() => {
                  console.log(this.state.activePlayerId, player._key);
                  // Am I the currently playing player? If so, pause me and declare that I am no longer the active player.
                  if (this.state.activePlayerId === player._key) {
                    player.pause();
                    this.setState({ activePlayerId: NO_PLAYER });
                  } else {
                    // We're not playing, we should play, and then declare that we are the active player.
                    player.play(() => {});
                    this.setState({ activePlayerId: player._key });
                  }
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 15,
                      fontSize: 20,
                      alignSelf: "center"
                    }}
                  >
                    {name}
                  </Text>
                  <Icon
                    style={{
                      marginRight: 15,
                      fontSize: 40,
                      alignSelf: "center"
                    }}
                    name={
                      this.state.activePlayerId !== player._key
                        ? "play"
                        : "pause"
                    }
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <Navbar />
      </View>
    );
  }
}
