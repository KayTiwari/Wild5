import React, {Component} from 'react';
import { View, Text } from 'react-native'
import Router from './Router'
import { Header, Card, CardSection, Button, Input, Spinner } from './components/common';
import LoginForm from './screens/LoginForm';
import AuthProvider from './context/authcontext';
import GlobalProvider from './context/context';

class App extends Component{

    render(){
        return (
            <GlobalProvider>
            <AuthProvider>
              <Router/>
            </AuthProvider>
            </GlobalProvider>
        )
    }
}

export default App;