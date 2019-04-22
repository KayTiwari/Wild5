import React, {Component} from 'react';
import { View, Text } from 'react-native'
import Router from './Router'
import { Header, Card, CardSection, Button, Input, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import AuthProvider from './context/authcontext';

class App extends Component{

    render(){
        return (
            <AuthProvider>
              <Router/>
            </AuthProvider>
        )
    }
}

export default App;