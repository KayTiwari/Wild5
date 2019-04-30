import React, {Component} from 'react';
import { View, Text, ScrollView } from 'react-native';

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
        return (
            <ScrollView pagingEnabled={true}>
            <View>
                <Text>Enter your answer</Text>
            </View>
            </ScrollView>
        )
    }
}

export default TrackingForm;