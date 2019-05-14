import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Footer, FooterTab, Button, Text, Content, Header, Icon } from 'native-base' 
import { Actions } from 'react-native-router-flux'
import Carousel from '../components/Carousel';

class Landing extends Component {
  state= {
    account: 0
  }

  render() {
    return (
      <Container>
        <Header />
      <View style={{marginBottom: 300}}>
      <Carousel />
      </View>
      {this.state.account === 0 ? <Footer style={{bottom: 0}}>
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
        :
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
    </Footer>}
    </Container>
    )
  }
}

export default Landing;