import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Footer, FooterTab, Button, Text } from 'native-base' 
import { Actions } from 'react-native-router-flux'
import Carousel from '../components/Carousel';

class Landing extends Component {
  state= {
    account: 0
  }

  render() {
    return (
      <>
      <Carousel />
      {/* <View style={styles.container}>
      {this.state.account === 0 ?
      <View style={styles.textCont}>
      <TouchableOpacity onPress={() => this.setState({account: 1})}>
      <Text style={styles.text}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.edroadmap()}>
      <Text style={styles.text}>Education</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.kickstart()}>
      <Text style={styles.text}>Kickstart30</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.quests()}>
      <Text style={styles.text}>Quests</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.quests()}>
      <Text style={styles.text}>Devices</Text>
      </TouchableOpacity>
      </View>
      :
      <View style={styles.textCont}>
      <TouchableOpacity onPress={() => this.setState({account: 0})}>
      <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.profile()}>
      <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.help()}>
      <Text style={styles.text}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.feedback()}>
      <Text style={styles.text}>Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.settings()}>
      <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
      </View>}
      </View> */}
      {this.state.account === 1 ? <Footer>
          <FooterTab>
            <Button onPress={() => this.setState({account: 1})}>
              <Text>Account</Text>
            </Button>
            <Button onPress={() => Actions.edroadmap()}>
              <Text>RoadMap</Text>
            </Button>
            <Button onPress={() => Actions.kickstart()}>
              <Text>Kickstart30</Text>
            </Button>
            <Button onPress={() => Actions.quests()}>
              <Text>Quests</Text>
            </Button>
            {/* <Button>
              <Text>Devices</Text>
            </Button> */}
          </FooterTab>
        </Footer> 
        :
      <Footer>
      <FooterTab>
        <Button onPress={() => this.setState({account: 0})}>
          <Text>Home</Text>
        </Button>
        <Button onPress={() => Actions.profile()}>
          <Text>Profile</Text>
        </Button>
        <Button onPress={() => Actions.help()}>
          <Text>Help</Text>
        </Button>
        <Button onPress={() => Actions.feedback()}>
          <Text>Feedback</Text>
        </Button>
        <Button onPress={() => Actions.settings()}>
          <Text>Settings</Text>
        </Button>
      </FooterTab>
    </Footer>}
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'



  },
  textCont: {
    backgroundColor: 'blue', 
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  text: {
    fontSize: 17,

  }
})


export default Landing