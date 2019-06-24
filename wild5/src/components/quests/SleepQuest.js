import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { CheckBox, ListItem, Body } from 'native-base'
import PushNotificationIOS from '../common/PushNotificationsIOS'
import Navbar from '../Navbar'

const {width, height} = Dimensions.get('window')

class SleepQuest extends Component {
    state = {
            sleep1: false,
            sleep2: false,
            sleep3: false,
            sleep4: false,
            sleep5: false,
            sleep6: false

    }

    checkBox = (type) => {
        return () => {
        if(type === 'sleep1'){
        this.setState(prevState =>({
            sleep1: !prevState.sleep1
        }))
    } else if(type === 'sleep2'){
        this.setState(prevState =>({
            sleep2: !prevState.sleep1
        }))
    } else if(type === 'sleep3'){
        this.setState(prevState =>({
            sleep3: !prevState.sleep1
        }))
    } else if(type === 'sleep4'){
        this.setState(prevState =>({
            sleep4: !prevState.sleep1
        }))
    } else if(type === 'sleep5'){
        this.setState(prevState =>({
            sleep5: !prevState.sleep1
        }))
    } else if(type === 'sleep6'){
        this.setState(prevState =>({
            sleep6: !prevState.sleep1
        }))
    }
    }}

    render() {
        return (
            <View style={{width, height, backgroundColor: '#B72B90', justifyContent: 'space-between'}}>
                <View style={{marginTop: '20%'}}>
                <Text style={{fontSize: 28, alignSelf:'center'}}>Get Better Sleep!</Text>
                <Text>Select Best Practices to Receive Reminders</Text>
                <ListItem>
                <CheckBox checked={this.state.sleep1} color="green" onPress={this.checkBox('sleep1')}/>
                <Body>
                <Text>Avoid Electronics 90 min Prior Bedtime</Text>
                </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={this.state.sleep2} color="green" onPress={this.checkBox('sleep2')}/>
                <Body>
                <Text>Avoid Napping During the Day</Text>
                </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={this.state.sleep3} color="green" onPress={this.checkBox('sleep3')}/>
                <Body>
              <Text>Eliminate Ambient Light in your Bedroom</Text>
            </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={this.state.sleep4} color="green" onPress={this.checkBox('sleep4')}/>
                <Body>
              <Text>Enjoy a Warm Bath Prior to Bedtime</Text>
            </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={this.state.sleep5} color="green" onPress={this.checkBox('sleep5')}/>
                <Body>
              <Text>Stick to Regular Bedtime Each Night</Text>
            </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={this.state.sleep6} color="green" onPress={this.checkBox('sleep6')}/>
                <Body>
              <Text>Avoid Caffeine 10 hrs Prior to Bed</Text>
            </Body>
            </ListItem>
            </View>
            <Navbar />
            </View>
        )
    }
}


export default SleepQuest