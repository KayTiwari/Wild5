import React, { Component } from 'react'
import {Text, View, TouchableOpacity, Dimensions, AlertIOS } from 'react-native'
import Video from 'react-native-video'

const mp31 = require('../../media/a_moment_of_graditude.mp3')
const mp32 = require('../../media/body_scan.mp3')
const mp33 = require('../../media/five_minute_breathing_space.mp3')
const mp34 = require('../../media/happiness_meditation.mp3')
const mp35 = require('../../media/intro_to_mindful_meal_meditation.mp3')
const mp36 = require('../../media/mindful_breathing.mp3')
const mp37 = require('../../media/mindful_meal_meditation.mp3')
const mp38 = require('../../media/mindful_moment_with_a_raisen.mp3')
const mp39 = require('../../media/pain_meditation.mp3')
const pic = require('../../images/background1.jpeg')
const {height, width} = Dimensions.get('window')

class MindfulnessQuest extends Component {
    state = {
        rate: 1,
        volume: 1,
        muted: false,
        paused: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        track: [mp31, mp32, mp33, mp34, mp35, mp36, mp37, mp38, mp39],
        trackNumber: 0
    }

    onLoad = (data) => {
        console.log('On load fired!');
        this.setState({duration: data.duration});
      }
      
      onProgress = (data) => {
        this.setState({currentTime: data.currentTime});
      }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity style={{height: 100, width: 200, backgroundColor: 'blue'}}>
            <Text>A moment of Graditude</Text>
                <Video 
                source={this.state.track[this.state.trackNumber]}   
                ref={(ref) => {
                  this.player = ref
                }}
                audioOnly={false}
                controls={true}
                rate={this.state.rate}                             
                volume={this.state.volume}                           
                muted={this.state.muted}                           
                paused={this.state.paused}                          
                resizeMode={this.state.resizeMode}                     
                repeat={false}                           
                playInBackground={true}                
                playWhenInactive={false}                
                ignoreSilentSwitch={"ignore"}           
                progressUpdateInterval={250.0}                       
                onProgress={this.onProgress}              
                // onEnd={() => { AlertIOS.alert('Done!') }} 
                />
            </TouchableOpacity>
            </View>
        )
    }
}


export default MindfulnessQuest