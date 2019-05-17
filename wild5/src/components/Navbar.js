import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Container, Footer, FooterTab, Button, Text, Header, Icon, Badge } from 'native-base' 
import { Actions } from 'react-native-router-flux'


class Navbar extends Component{

    state = {
        show: 0
    }

    homePress = () => {
        this.setState({show: 0})
        Actions.landing();
    }

    render(){
    return (
        <View>
        {this.state.show === 0 ?
            <Footer>
                <FooterTab>
            <Button onPress={() => Actions.edroadmap()}>
              <Icon name={"compass"} />
              <Text>RoadMap</Text>
            </Button>
            <Button onPress={() => Actions.kickstart()}>
            <Icon name={"rocket"} />
              <Text>Kickstart</Text>
            </Button>
            <Button badge onPress={() => Actions.quests()}>
            <Badge><Text>1</Text></Badge>
            <Icon name={"flame"} />
              <Text>Quests</Text>
            </Button>
            <Button onPress={() => this.setState({show: 1})}>
              <Text style={{fontSize: 30, fontWeight: '600'}}>...</Text>
            </Button>
          </FooterTab>
        </Footer>
        :
      <Footer>
      <FooterTab>
        <Button onPress={this.homePress.bind(this)}>
          <Icon name={'ios-home'} />
          <Text>Home</Text>
        </Button>
        <Button onPress={() => Actions.profile()}>
        <Icon name={'ios-pulse'} />
          <Text>Profile</Text>
        </Button>
        {/* <Button onPress={() => Actions.help()}>
        <Icon name={'md-help'} />
          <Text>Help</Text>
        </Button> */}
        <Button onPress={() => Actions.feedback()}>
        <Icon name={'chatbubbles'} />
          <Text style={{fontSize: 9}}>Feedback</Text>
        </Button>
        <Button onPress={() => Actions.settings()}>
        <Icon name={'ios-settings'} />
          <Text style={{fontSize: 10}}>Settings</Text>
        </Button>
        <Button onPress={() => this.setState({show: 0})}>
              <Text style={{fontSize: 30, fontWeight: '600'}}>...</Text>
        </Button>
      </FooterTab>
      </Footer>}
      </View>
    )
}
}

export default Navbar;