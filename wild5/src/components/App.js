import React, {Component} from 'react';
import { View, Text } from 'react-native'
import { Header, Card, CardSection, Button, Input, Spinner } from './common'
import LoginForm from './LoginForm';

class App extends Component{
    state = {

    }
    

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