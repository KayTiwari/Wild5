import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Carousel from '../components/Carousel';


class Landing extends Component {
  state= {
    account: 0
  }

  render() {
    let screenwidth = Dimensions.get('window').width
    return (
      <>
      <Carousel />
      <View style={styles.container}>
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
      </View>
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
    color: "#FFFFFF"

  }
})


export default Landing