import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { Player } from "@react-native-community/audio-toolkit";
const med1 = "happiness_meditation.mp3"
const tracks = [
  {
    path: "../../media/a_moment_of_graditude.mp3",
    name: "A Moment of Graditude"
  },
  { path: "../../media/body_scan.mp3", name: "Body Scan" },
  {
    path: "../../media/five_minute_breathing_space.mp3",
    name: "Five Minute Breathing Space"
  },
  {
    path: "../../media/happiness_meditation.mp3",
    name: "Happiness Meditation"
  },
  {
    path: "../../media/intro_to_mindful_meal_meditation.mp3",
    name: "Intro to Mindful Meal Meditation"
  },
  { path: "../../media/mindful_breathing.mp3", name: "Mindful Breathing" },
  {
    path: "../../media/mindful_meal_meditation.mp3",
    name: "Mindful Meal Meditation"
  },
  {
    path: "../../media/mindful_moment_with_a_raisen.mp3",
    name: "Mindful Moment With a Raisen"
  },
  { path: "../../media/pain_meditation.mp3", name: "Pain Meditation" }
];

// tracks.map(/* return a new player */).map(player => JSX)

// const players = tracks
//   .map(track => {
//     const player = new Player(track.path);
//     console.log(player);
//     return {
//       name: track.name,
//       player
//     };
//   })
//   .map(({ name, player }) => {
//     return (
//       <View>
//         <Text>{name}</Text>
//           {!this.state.paused ? <TouchableOpacity 
//           onPress={() => player.prepare().play(() => console.log("hello" + player.isPlaying))}><Icon name="play" />
//           </TouchableOpacity>
//            : 
//            <TouchableOpacity onPress={() => player.pause()}>
//            <Icon name="pause" />
//            </TouchableOpacity>
//            }
        
//       </View>
//     );
//   });


playTrack = file => {
  console.log(file)
  const p = new Player(`${file}`)
  p.prepare().play(()=> this.setState({isPlaying}));
  if (!this.state.isPlaying){
    p.pause(()=> console.log("paused"))

  } else if(this.state.isPlaying){
    p.play(() => this.setState({isPlaying}))
  }
}


export default class MindfulnessQuest extends Component {
state = {
  isPlaying: true
}

  // componentDidMount() {
  //    const p = new Player("happiness_meditation.mp3")
  //    p.prepare().play(()=> console.log("hello" + p.isPlaying));
  //   // console.log("hello" + p.isPlaying);
  //   // new Player("happiness_meditation.mp3").play(() => console.log(Player.isPlaying));
  // }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: "10%" }}>
          <Text>Select a New Mediatation To Listen to</Text>
          
            {(this.state.isPlaying) ? 
            <TouchableOpacity 
            style={{height: 150, width:'100%', backgroundColor:'#000'}}
            onPress={() => this.playTrack(med1)}><Icon name="play"/> 
            </TouchableOpacity>
            : 
            <TouchableOpacity 
            
            onPress={()=> this.setState({isPlaying: !this.state.isPlaying})}>
            <Icon name="play"/>
            </TouchableOpacity>
            }
         
        </View>
      </View>
    );
  }
}
