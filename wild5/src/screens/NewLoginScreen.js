import React, {Component} from 'react';
import { View, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Text } from 'native-base';
import firebase from 'firebase'
import {withAuthProvider} from '../context/authcontext';
import { Actions } from 'react-native-router-flux';
import abstractimg from '../images/abstract2.jpeg';
import wild5title from '../images/wild-5-logo-r-color.png'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
// import console = require('console');

const screenheight = Dimensions.get('window').height;

class NewLoginScreen extends Component{
    state = {
        email: '',
        password: '',
        raised: true,
        error: ''
    }

    LoginPress() {
        const { email, password } = this.state;
        console.log('yo')
        this.setState({
            error: '',
        })
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('hi')
            this.onLoginSuccess();
        })
        .catch(() => {
            console.log('bye')
                    this.onLoginFail();
                });
    };

    onLoginSuccess() {
        Actions.landing();
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed, try again?',
        })
    }

    render(){
        return (
        <ScrollView>
        <View style={{backgroundColor: 'white', height: screenheight}}>
            <ImageBackground source={abstractimg} style={{flex: 1, resizeMode: 'cover', height: screenheight*.6, width: '100%'}}>
            <View style={{width: '80%', alignSelf: 'center', marginTop: '15%'}}><Image source={wild5title} style={{resizeMode: 'contain', width: '100%', marginTop: '15%'}}/></View> 
            
            <View style={{backgroundColor:'white', height:'25%', width:'80%', padding:30, borderRadius:5, position:'absolute', top:'40%', alignSelf:'center' }}>
            <Input
                placeholder='Email'
                onChangeText={(email) => this.setState({email}) }
                spellCheck={false}
                textContentType={"emailAddress"}
                shake={true}
            />
            <Input
                placeholder='Password'
                onChangeText={(password) => this.setState({password}) }
                spellCheck={false}
                textContentType={"password"}
                secureTextEntry={true}
                shake={true}
                inputContainerStyle={{backgroundColor: 'white', borderLeftColor:'white', borderRightColor:'white', borderBottomWidth:0, borderWidth: 1}}
            />
            </View>
            </ImageBackground> 

            <View style={{position:'absolute', top:'65%', width:'50%', alignSelf:'center'}}>


                <Button 
                title='Login'
                type='outline'
                raised={this.state.raised}
                onPress={() => this.LoginPress()}
                />
            </View>
            <View style={{position:'absolute', top:'73%', width:'50%', alignSelf:'center'}}>
                <Button 
                title='Register'
                type='outline'
                raised={this.state.raised}
                />
            </View>

            <View style={{position:'absolute', top:'80%', width:'50%', alignSelf:'center'}}>
                <Button 
                title='Forgot password?'
                type='clear'
                titleStyle={{fontSize:15}}
                />
            </View>
        </View>

            <View style={{backgroundColor:'#333'}}>
                <Text style={{color: 'white', fontSize:15, textAlign:'center', marginTop:'10%'}}>App made on React Native by the Wild Card Team.</Text>
                <Text style={{color: 'white', fontSize:15, textAlign:'center', marginBottom:'5%'}}>Wild5 and all its resource materials are a product of the works by Rakesh and Saundra Jain MD.</Text>
            </View>
        </ScrollView>
        )
    }
}

export default withAuthProvider(NewLoginScreen);
