import React, { Component } from 'react'
import { View, ScrollView, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import { Container, Footer, FooterTab, Button, Text, Header, Icon } from 'native-base' 
import wild5title from '../images/wild-5-logo-r-color.png'
import { Actions } from 'react-native-router-flux'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';


const screenheight = Dimensions.get('window').height;
class Landing extends Component {
  state= {
    account: 0
  }
  render() {
    return (
      <View style={{display:'flex', backgroundColor:'white', flexDirection:'column', justifyContent:'space-between', height:screenheight}}>
      <ScrollView>
        <View style={{width: '80%', marginLeft: '10%', marginTop:'20%', marginBottom:0}}><Image source={wild5title} style={{width: '100%', resizeMode:'contain'}} /></View>

      <View>
      <Carousel />
      </View>

      <View>
        <Button onPress={() => Actions.exercise1()} style={{alignSelf:'center'}} success large iconright>
          <Icon name='bicycle' />
            <Text>Exercise I</Text>
        </Button>
      </View>

      <View>
            <Button style={styles.mindfulness} success large iconright>
                <Icon name='cloud' />
                <Text>Mindfulness I</Text>
            </Button>
        </View>

      </ScrollView>
      <Navbar />
      </View>
    )
  }
}

export default Landing;