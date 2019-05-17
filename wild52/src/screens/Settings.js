import React from 'react';
import { View, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import {Container, Button, Text, Icon } from 'native-base';
import Navbar from '../components/Navbar';

const screenheight = Dimensions.get('window').height;
const Settings = () => {
    return (  
        <Container style={{display:'flex', flexDirection:'column', height:screenheight, justifyContent:'space-between'}}>

        <View style={{}}>
            <Text style={{fontSize: 30, fontWeight:'600', textAlign:'center', marginTop: '20%'}}>Settings</Text>
        </View>

        <Button dark large style={{alignSelf:'center'}}>
            <Text>Logout</Text>
        </Button>

        <Button transparent style={{alignSelf:'center'}} onPress={() => Actions.help()}>
          <Text>Help</Text>
        </Button>

        <View>
            <Navbar />
        </View>

        </Container>  
    )
}

export default Settings;