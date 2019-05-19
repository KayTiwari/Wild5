// import console = require('console');
import React, {Component} from 'react';
import { ImageBackground, View, Image } from 'react-native';
import { Card, CardSection, Input, Spinner } from '../components/common';
import { Button, Text, Container } from 'native-base'
import firebase from 'firebase'
import {withAuthProvider} from '../context/authcontext';
import { Actions } from 'react-native-router-flux';
import RegisterModal from '../modals/RegisterModal';
import ForgotPassModal from '../modals/ForgotPassModal';
import abstractimg from '../images/abstract2.jpeg';
import wild5title from '../images/wild-5-logo-r-color.png'


class LoginForm extends Component {
    
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
        forgot: false,
        modal: false,
    } 

    

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({
            error: '',
            loading: true
        })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.onLoginSuccess();
            })
            .catch(() => {
                    this.onLoginFail();
                });
    };

    OnRegisterPress(){
        if (this.state.modal === false){
        this.setState({
            modal: true
        })
        } else {
            this.setState({
                modal: false
            })
        }
    }

    OnForgotPress(){
        if (this.state.forgot === false){
            this.setState({
                forgot: true
            })
            } else {
                this.setState({
                forgot: false
                })
            }
    }
 
    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />
        } else
        return (
            <Button block info style={{backgroundColor:'#333', alignSelf:'center'}} onPress={this.onButtonPress.bind(this)}>
                    <Text>Login</Text>
            </Button>
        )
    }

    onLoginSuccess() {
        this.setState({
            error: '',
            loading: false,
            email: '',
            password: ''
        })
        Actions.landing();
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed, try again?',
            loading: false
        })
    }

    render(){
        return (
            <View>
            <ImageBackground source={abstractimg} style={{width: '100%', height: '100%'}}>
            <View style={{width: '80%', marginLeft: '10%', marginTop: 70}}><Image source={wild5title} style={{width: '100%', resizeMode:'contain'}} /></View>
            {this.state.modal ? <RegisterModal visible={true}/> : null}
            {this.state.forgot ? <ForgotPassModal visible={true}/> : null}
            
            <View style={{marginTop: 70, width: '90%', marginLeft: '5%'}}>
            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>
            <CardSection>
                <Input
                placeholder='Email address'
                // label='Email'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                
                />
            </CardSection>
            </View>
            
            <View style={{marginTop: 10, width: '90%', marginLeft: '5%'}}>
            <CardSection>
            <Input
                placeholder='Enter your password'
                // label='Password'
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry
                />
            </CardSection>
            </View>

            <View style={{height: '5%', width: '80%', alignSelf:'center', marginTop: 30}}>
                {this.renderButton()}
            </View>

            <View style={{height: '5%', width: '80%', alignSelf:'center', marginTop: 20}}>
            <Button bordered info style={{backgroundColor:'#333', alignSelf:'center'}} onPress={this.OnRegisterPress.bind(this)}>
                    <Text>Register</Text>
            </Button>
            </View>


            <Text onPress={this.OnForgotPress.bind(this)} style={{color: 'white', alignSelf: 'center', marginTop: 20}}>Forgot your password?</Text>

        </ImageBackground>
        </View>
        )
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'white'
    },
    successTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#BADA55'
    }
}

export default withAuthProvider(LoginForm);