import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Navbar from '../components/Navbar';
import { Container } from 'native-base';


const screenheight = Dimensions.get('window').height;
class KickStart30 extends Component {
  render() {
    return (
      <Container style={{height: screenheight, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <View>
        <Text style={{textAlign: 'center', fontWeight:'600', fontSize:30}}>
          Hang in there, chief.
        </Text>
        </View>

        <View>
          <Navbar />
      </View>
      </Container>
    )
  }
}


export default KickStart30