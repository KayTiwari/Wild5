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
    <Container style={{height: screenheight, display:'flex', flexDirection:'column'}}>
    <ScrollView>
        <View style={{width: '80%', marginLeft: '10%', marginTop:'20%', marginBottom:0}}><Image source={wild5title} style={{width: '100%', resizeMode:'contain'}} /></View>
      <View>
      <Carousel />
      </View>

      <View style={{marginTop: '20%'}}>
            <Button onPress={() => Actions.exercisetracking()} style={{alignSelf:'center'}} success large iconright>
                <Text>Exercise Tracking</Text>
            </Button>
      </View>

      <View style={{marginTop:'20%'}}>
            <Button style={styles.mindfulness} success large iconright>
                <Text>Mindfulness Tracking</Text>
            </Button>
      </View>

    </ScrollView>
      <View>
      <Navbar />
      </View>
    </Container>
    )
  }
}
const styles = StyleSheet.create({
  mindfulness: {
      backgroundColor: '#49b8ea',
      alignSelf:'center',
  },
  sleep: {
      alignSelf:'center',
      backgroundColor: '#ba3992'
  },
  social: {
      alignSelf:'center',
      backgroundColor: '#ed3833'
  },
  nutrition: {
      alignSelf:'center',
      backgroundColor: '#f3983e'
  },
  tracking: {
      alignSelf:'center',
      backgroundColor: '#333',
  },
})

export default Landing;