import React, {Component} from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import Navbar from '../../components/Navbar';


class HeroScore extends Component{
    state = {

    }

    render(){
        return (
            <View>
                <View>
                <Text>Your HERO score for this week</Text>
                </View>

                <Navbar />
            </View>
        )
    }
}

export { HeroScore };