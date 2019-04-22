import React, {Component} from 'react';
import { View, Text } from 'react-native'
import Router from './Router'
import { Header, Card, CardSection, Button, Input, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component{

    render(){
        return (
            <View>
              <Router/>
            </View>
        )
    }
}

export default App;