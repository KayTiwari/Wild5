import React, {Component} from 'react';
import {Button, Text, Icon, Container} from 'native-base';
import { ScrollView, View, Dimensions, StyleSheet } from 'react-native';
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

        <View style={{borderColor:'red'}}>
        <Text style={{textAlign:'center', fontSize:30, fontWeight:'600', marginTop:'20%'}}>The Road To Wellness</Text>
        <Text style={{textAlign:'center', fontSize:15, fontWeight:'600', marginBottom:'20%'}}>Completed: {this.state.completed}%</Text>
        </View>

        <View style={{marginBottom: '20%'}}>
            <Button onPress={() => Actions.trackingform()} style={styles.tracking} bordered info large iconright>
                <Text style={{}}>Wellness Tracking Form</Text>
            </Button>
        </View>


        <View>
            <Button onPress={() => Actions.exercise1()} style={{alignSelf:'center'}} success large iconright>
                <Icon name='bicycle' />
                <Text>Exercise I</Text>
            </Button>
        </View>

        <View style={{display:'flex', flexDirection:'column', justifyContent:'space-around' }}>
            <Text style={{color: 'red', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
            <Text style={{color: 'yellow', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
            <Text style={{color: 'green', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
        </View>

        <View>
            <Button style={styles.mindfulness} success large iconright>
                <Icon name='cloud' />
                <Text>Mindfulness I</Text>
            </Button>
        </View>

        <View style={{display:'flex', flexDirection:'column', justifyContent:'space-around' }}>
            <Text style={{color: 'red', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
            <Text style={{color: 'yellow', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
            <Text style={{color: 'green', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
        </View>

        <View>
            <Button style={styles.sleep} success large iconright>
                <Icon name='moon' />
                <Text>Sleep I</Text>
            </Button>
        </View>

        <View style={{display:'flex', flexDirection:'column', justifyContent:'space-around' }}>
            <Text style={{color: 'red', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
            <Text style={{color: 'yellow', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
            <Text style={{color: 'green', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
        </View>

        <View>
            <Button style={styles.social} success large iconright>
                <Icon name='bonfire' />
                <Text>Social I</Text>
            </Button>
        </View>

        <View style={{display:'flex', flexDirection:'column', justifyContent:'space-around' }}>
            <Text style={{color: 'red', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
            <Text style={{color: 'yellow', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
            <Text style={{color: 'green', fontSize: 25, fontWeight: '600', alignSelf:'center'}}>.</Text>
        </View>

        <View>
            <Button style={styles.nutrition} success large iconright>
                <Icon name='restaurant' />
                <Text>Nutrition I</Text>
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
        alignSelf:'center'
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

export default NewRoadMap;