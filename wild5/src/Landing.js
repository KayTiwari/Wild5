import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.textCont}>
      <TouchableOpacity onPress={}>
      <Text style={styles.text}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={}>
      <Text style={styles.text}>Education</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={}>
      <Text style={styles.text}>Kickstart30</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={}>
      <Text style={styles.text}>Quests</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={}>
      <Text style={styles.text}>Devices</Text>
      </TouchableOpacity>
      </View>
      </View>
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