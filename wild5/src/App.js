import React, {Component} from 'react';
import { View, Text } from 'react-native'
import { Header, Card, CardSection, Button, Input, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component{

    render(){
        return (
            <View>
                <Header text='Wild5'/>
                <LoginForm />
            </View>
        )
    }
}

export default App;