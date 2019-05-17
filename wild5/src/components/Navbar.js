import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Container, Footer, FooterTab, Button, Text, Header, Icon } from 'native-base' 
import { Actions } from 'react-native-router-flux'

class Navbar extends Component{

    state = {
        
    }


    render(){
    return (
        <View>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.setState({account: 1})}>
            <Icon name={'ios-pulse'} />
              <Text>Account</Text>
            </Button>
            <Button onPress={() => Actions.edroadmap()}>
              <Icon name={"compass"} />
              <Text>RoadMap</Text>
            </Button>
            <Button onPress={() => Actions.kickstart()}>
            <Icon name={"rocket"} />
              <Text>Kickstart</Text>
            </Button>
            <Button onPress={() => Actions.quests()}>
            <Icon name={"flag"} />
              <Text>Quests</Text>
            </Button>
          </FooterTab>
        </Footer>
      <Footer>
      <FooterTab>
        <Button onPress={() => this.setState({account: 0})}>
          <Icon name={'ios-home'} />
          <Text>Home</Text>
        </Button>
        <Button onPress={() => Actions.profile()}>
        <Icon name={'ios-contacts'} />
          <Text>Profile</Text>
        </Button>
        <Button onPress={() => Actions.help()}>
        <Icon name={'md-help'} />
          <Text>Help</Text>
        </Button>
        <Button onPress={() => Actions.feedback()}>
        <Icon name={'ios-chatboxes'} />
          <Text style={{fontSize: 9}}>Feedback</Text>
        </Button>
        <Button onPress={() => Actions.settings()}>
        <Icon name={'ios-settings'} />
          <Text style={{fontSize: 10}}>Settings</Text>
        </Button>
      </FooterTab>
    </Footer>
    </View>
    )
}
}

