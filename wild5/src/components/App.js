import React, {Component} from 'react';
import { View, Text } from 'react-native'
import { Header, Card, CardSection, Button, Input, Spinner } from './common'

class App extends Component{
    state = {

    }
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyC93k0KGpd8myVQxCTgWPw6Qk9NzNA6b_o",
            authDomain: "wild5-5ca8b.firebaseapp.com",
            databaseURL: "https://wild5-5ca8b.firebaseio.com",
            projectId: "wild5-5ca8b",
            storageBucket: "wild5-5ca8b.appspot.com",
            messagingSenderId: "714885268112"
          })
    }

    render(){
        return (
            <View>
                <Header text='Wild5'/>
            </View>
        )
    }
}

export default App;