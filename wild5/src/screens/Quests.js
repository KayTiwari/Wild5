import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Footer, FooterTab, Button, Text, Header, Icon } from 'native-base' 
import Navbar from '../components/Navbar';
import {QuestButton} from '../components/common/QuestButton'

const screenheight = Dimensions.get('window').height;
class Quests extends Component {
  render() {
    return (
      <Container style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:screenheight}}>
        <View>
          <View>
        <Text style={{textAlign:'center', fontSize:30, marginTop: '20%', fontWeight: '600', marginBottom: 40}}>Quests</Text>

        <QuestButton label="Nutrition" 
        iconName1="camera" 
        iconName2="nutrition" 
        onPress={() => Actions.nutritionquest()}/>

       <QuestButton label="Meditations" 
       iconName1="cloud" 
       iconName2="leaf" 
       onPress={() => Actions.mindfulnessquest()}
       />

       <QuestButton label="Exercise" 
       style={{backgroundColor: '#72B83E'}} 
       iconName1="cloud" 
       iconName2="leaf" 
       onPress={() => Actions.exercisequest()}/>
       

        <QuestButton label="social" style={{color: '#B72B90'}} />

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