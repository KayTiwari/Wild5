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
        <Text style={{textAlign:'center', fontSize:30, marginTop: '20%', fontWeight: '600', marginBottom: 40}}>Quests</Text>

       <Button style={{alignSelf:'center'}} warning large onPress={() => Actions.nutritionquest()}>
       <Icon name='nutrition' />
       <Text>Nutrition Tracker</Text>
       <Icon name='camera' />
       </Button>

       <Button style={{alignSelf:'center', color: 'light-blue', marginTop:'15%'}} large onPress={() => Actions.mindfulnessquest()}>
       <Icon name='cloud' />
       <Text>Meditations</Text>
       <Icon name='leaf' />
       </Button>

       <Button style={{alignSelf:'center', color: 'light-blue', marginTop:'15%'}} large onPress={() => Actions.mindfulnessquest()}>
       <Icon name='cloud' />
       <Text>Exercise</Text>
       <Icon name='leaf' />
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