import React, {Component} from 'react';
import {Button, Text, Icon, Container} from 'native-base';
import { ScrollView, View, Dimensions } from 'react-native';
import Navbar from '../components/Navbar';
import { Actions } from 'react-native-router-flux';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

class NewRoadMap extends Component{
    state = {
        counter: 0,
        completed: 0
    }

    render(){
        return (
            <Container style={{height: screenheight, width: screenwidth, display:'flex', flexDirection:'column'}}>
        <ScrollView>

        <View style={{marginBottom:'25%',  marginTop: '20%', borderColor:'red'}}>
        <Text style={{textAlign:'center', fontSize:30, fontWeight:'600'}}>The Road To Wellness</Text>
        <Text style={{textAlign:'center', fontSize:15, fontWeight:'600'}}>Completed: {this.state.completed}%</Text>
        </View>

        <View>
            <Button onPress={() => Actions.exerciseI()} style={{alignSelf:'center'}} success large iconright>
                <Icon name='bicycle' />
                <Text>Exercise I</Text>
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

export default NewRoadMap;