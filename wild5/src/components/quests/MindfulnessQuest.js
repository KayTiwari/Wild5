import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AlertIOS,
  Button,
  Modal
} from "react-native";
import { Icon } from "native-base";
// import { Player } from "@react-native-community/audio-toolkit";
import Sound from "react-native-sound";
import Navbar from "../Navbar";
import firebase from "firebase";

Sound.setCategory("Playback");

const players = [
  {
    path: "a_moment_of_graditude.mp3",
    name: "A Moment of Graditude",
    duration: 10
  },
  { path: "body_scan.mp3", name: "Body Scan", duration: 15 },
  {
    path: "five_minute_breathing_space.mp3",
    name: "Five Minute Breathing Space",
    duration: 7
  },
  {
    path: "happiness_meditation.mp3",
    name: "Happiness Meditation",
    duration: 12
  },
  {
    path: "intro_to_mindful_meal_meditation.mp3",
    name: "Intro to Mindful Meal Meditation",
    duration: 5
  },
  { path: "mindful_breathing.mp3", name: "Mindful Breathing", duration: 15 },
  {
    path: "mindful_meal_meditation.mp3",
    name: "Mindful Meal Meditation",
    duration: 24
  },
  {
    path: "mindful_moment_with_a_raisen.mp3",
    name: "Mindful Moment With a Raisen",
    duration: 10
  },
  { path: "pain_meditation.mp3", name: "Pain Meditation", duration: 13 }
].map(track => ({
  player: new Sound(track.path, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log(error);
    }
  }),
  name: track.name,
  duration: track.duration
}));

const NO_PLAYER = -1;

export default class MindfulnessQuest extends Component {
  state = {
    activePlayerId: NO_PLAYER,
    isPlaying: null,
    duration: null,
    currentTime: 0,
    completedTracks: [],
    modalVisible: false,
    date1: new Date().toString().slice(0,9),
    user: "",
    date: ""
  };

  componentDidMount() {
    
    this.checkData()
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
      date: dateTime,
    });
    console.log(`firebase.database().ref(CompletedTracks/${this.state.user}/${
      this.state.date})`)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activePlayerId !== this.state.activePlayerId) {
      // Loop through the players and pause any that are playing except for the currently active one
      const prevPlayer = players.find(
        player => player._key === prevState.activePlayerId
      );

      if (prevPlayer) {
        prevPlayer.pause();
      }
    }
  }

checkData = () => {
  firebase.database().ref(`CompletedTracks/${this.state.user}/${
    this.state.date}`).once('value', (snap)=> {
      const data = snap.val()
      if(data !== null && data[`${this.state.user}`][0].player_datePlayed === this.state.date1){
          return this.setState({completedTracks: data[`${this.state.user}`]});
        }else{
          firebase.database().ref('CompletedTracks').child(`${this.state.user}`).remove().then(()=> this.setState({completedTracks: []}))
        }
      }
        )
    }


  render() {
    const totalMin = this.state.completedTracks.reduce((total, track) => total + track.player_duration, 0);
    // (this.state.completedTracks.length !== 0)
    //   this.state.completedTracks[0].player_duration
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              height: "35%",
              width: "70%",
              borderWidth: 1,
              borderColor: "black"
            }}
          >
            <Text>Hello</Text>
          </View>
        </Modal>
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
          {players.map(({ player, name, duration }) => {
            // const duration = Math.round(player.getDuration() / 60)
            return (
              <TouchableOpacity
                key={this.state.activePlayerId + Math.random()}
                style={{
                  height: 50,
                  width: "90%",
                  backgroundColor:
                  (this.state.completedTracks.length !==0) ?this.state.completedTracks.some(
                    track => track.player_Name === name
                  )
                    ? "#32CD32"
                    : "#0AB2E8" : 
                  "#0AB2E8",
                  marginBottom: "2%",
                  marginTop: "2%"
                }}
                onPress={() => {
                  // console.log(this.state.activePlayerId, player._key);
                  // Am I the currently playing player? If so, pause me and declare that I am no longer the active player.
                  if (this.state.activePlayerId === player._key) {
                    player.pause();
                    this.setState({ activePlayerId: NO_PLAYER });
                  } else {
                    // We're not playing, we should play, and then declare that we are the active player.
                    player.play(() => {
                    const date =  new Date().toString().slice(0,9)
                      this.setState(
                        prevState => ({
                          completedTracks: [
                            ...prevState.completedTracks,
                            {
                              player_id: this.state.activePlayerId,
                              player_Name: name,
                              player_duration: Math.round(
                                player.getDuration() / 60),
                                player_datePlayed: date
                              
                            }
                          ],
                          activePlayerId: NO_PLAYER
                        }),
                        () => {
                        if(this.state.completedTracks.length === 0){
                          return firebase
                            .database()
                            .ref(
                              `CompletedTracks/${this.state.user}`
                            )
                            .set(this.state.completedTracks)
                            } else {
                              return firebase
                              .database()
                              .ref(
                                `CompletedTracks/${this.state.user}`
                              )
                              .set(this.state.completedTracks)
                            }
                          })
                            });

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
                  <View style={{ width: "87%" }}>
                    <Text
                      style={{
                        marginLeft: 15,
                        fontSize: 20,
                        alignSelf: "center"
                      }}
                    >
                      {name}
                    </Text>
                    <Text style={{ alignSelf: "center" }}>{duration} min</Text>
                  </View>
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
          {(this.state.completedTracks.length !== 0)?
          <View>
            <Text style={{fontSize: 20, color: '#32CD32', fontWeight: '700'}}>Total Listening Time For Today{totalMin}  Min</Text>
          </View> : null}
        </View>
        <Navbar />
      </View>
    );
  }
}
