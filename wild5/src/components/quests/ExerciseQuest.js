import React, { Component } from 'react'
import {Dimensions, View, AlertIOS} from 'react-native'
import { Container, Text, Label, Button } from 'native-base'
import NumericInput from 'react-native-numeric-input'
const {height,width} = Dimensions.get('window')




class ExerciseQuest extends Component {
    constructor(props){
        super(props)
    this.state={
        duration: 0,
        countdownTimer: 0,
        y: false,
        minutes: '00',
        seconds: '00',
    }
let time = this.state.minutes;
this.secondsRemaining = time * 60;
    }

    timer = () => {
        return () => {
        this.setState({
            y: !this.state.y
        })
    }}

    tick = () => {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);
        this.setState({
        minutes: min,
        seconds: sec
        })
        if (sec < 10) {
        this.setState({
          seconds: "0" + this.state.seconds,
        })
        }
        if (min < 10) {
        this.setState({
        value: "0" + min,
        })
        }
        if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
        }
        this.secondsRemaining--
        }
    
      startCountDown = () => {
          return () => {
      this.intervalHandle = setInterval(this.tick, 1000);
      let time = this.state.minutes;
      this.secondsRemaining = time * 60;
     
         }}



    render() {
        
        return (
            <>
                    <Container style={{marginTop: '15%', backgroundColor: 'light-blue'}}>
                   <Label style={{marginTop: '25%', color: '#FFF', fontSize: 20}}> How long do you want to Exercise?</Label>
                <NumericInput 
                    value={this.state.duration} 
                    onChange={value => this.setState({duration: value}, ()=> this.setState({minutes: this.state.duration}))}
                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                    totalWidth={240} 
                    totalHeight={50} 
                    iconSize={25}
                    step={5}
                    minValue={0}
                    valueType='real'
                    rounded 
                    textColor='darkolivegreen' 
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='darkgreen' 
                    leftButtonBackgroundColor='forestgreen'/>
                     <Button onPress={this.startCountDown()}><Text>Start</Text></Button>
                    {/* </Container> */}
                  
                    {/* <Container style={{marginTop: '20%'}}> */}
                    <Text>{this.state.minutes}:{this.state.seconds}</Text>
                    <Button onPress={""}><Text>Return</Text></Button>
                     </Container>
                    
             
                </>
        )
    }
}


export default ExerciseQuest