import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Container, Footer, FooterTab, Button, Text, Header, Icon } from 'native-base' 
import wild5title from '../images/wild-5-logo-r-color.png'
import { Actions } from 'react-native-router-flux'
import Carousel from '../components/Carousel';

class Landing extends Component {
  state= {
    account: 0
  }

  render() {
    return (
      <Container>
        <View style={{width: '80%', marginLeft: '10%'}}><Image source={wild5title} style={{width: '100%', resizeMode:'contain'}} /></View>
      <View style={{marginBottom: 170}}>
      <Carousel />
      </View>
      <View>
      <Navbar />
      </View>
      </Container>
    )
  }
}

export default Landing;