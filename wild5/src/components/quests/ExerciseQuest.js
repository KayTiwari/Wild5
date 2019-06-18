import React, { Component } from 'react'
import {Dimensions} from 'react-native'
import { Container, Label } from 'native-base'
import NumericInput from 'react-native-numeric-input'
const {height,width} = Dimensions.get('window')

class ExerciseQuest extends Component {
    state={
        value: ''
    }


    render() {
        return (
            
                <Container style={{alignItems: 'center', backgroundColor: '#72B83E'}}>
                <Label style={{marginTop: '25%', color: '#FFF', fontSize: 20}}> How long do you want to Exercise?</Label>
                <NumericInput 
                    value={this.state.value} 
                    onChange={value => this.setState({duration: value})} 
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
                </Container>
        )
    }
}

export default ExerciseQuest