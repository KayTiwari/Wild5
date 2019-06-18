import React, {Component} from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import Navbar from '../../components/Navbar';


class HeroScore extends Component{
    state = {

    }

    render(){
        return (
            <View>

            <Navbar />
            </View>
        )
    }
}

export { HeroScore };