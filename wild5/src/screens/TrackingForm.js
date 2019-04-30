import React, {Component} from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

class TrackingForm extends Component{
    state = {
        exercise: '',
        mindfulness: '',
        sleep: '',
        connectedness: '',
        nutrition: '',
        HERO: ''
    }
    

    render(){
        let screenwidth = Dimensions.get('window').width;
        let screenheight = Dimensions.get('window').height;
        return (
            <ScrollView pagingEnabled={true}>
            <View style={{
                    backgroundColor: '#36A0B3',
                    flex: 1,
                    width: screenwidth,
                    height: screenheight,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 40,
                    padding: 15,
                    textAlign: 'center',
                    color: 'white'}}>Welcome!</Text>
                <Text style={{
                    fontSize: 30,
                    padding: 50,
                    textAlign: 'center',
                    marginBottom: 150,
                    color: 'white'
                    }}>Wellness Tracking Form</Text>
                </View>

                <View style={{
                    backgroundColor: '#5f9ea0',
                    flex: 1,
                    width: screenwidth,
                    height: screenheight,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 30,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Exercise Lesson I</Text>
                    <Text style={{
                    fontSize: 40,
                    padding: 15,
                    marginBottom: 200,
                    textAlign: 'center',
                    color: 'white'}}>FID</Text>
                </View>
            </ScrollView>
        )
    }
}

export default TrackingForm;