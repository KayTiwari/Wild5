import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Footer, FooterTab, Button, Text, Header, Icon } from 'native-base' 
import Navbar from '../components/Navbar';

const screenheight = Dimensions.get('window').height;
class Quests extends Component {
  render() {
    return (
      <Container style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:screenheight}}>
        <View>
          <View>
        <Text style={{textAlign:'center', fontSize:30, marginTop: 70, fontWeight: '600', marginBottom: 40}}>Quests</Text>
       <Button style={{alignSelf:'center'}} warning large onPress={() => Actions.nutritionquest()}>
       <Icon name='nutrition' />
       <Text>Nutrition Tracker</Text>
       <Icon name='camera' />
       </Button>
       </View>
       </View>
       <View style={{justifyContent: 'flex-end'}}>
       <Navbar />
     </View>
     </Container>
    )
  }
}
export default Quests