import React, {Component} from 'react';
import { Text, ImageBackground } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../components/common';
import firebase from 'firebase'
import {withAuthProvider} from '../context/authcontext';
import { Actions } from 'react-native-router-flux';
import RegisterModal from '../modals/RegisterModal';
import ForgotPassModal from '../modals/ForgotPassModal';
import abstractimg from '/Users/abhiktiwari/dev/wild5/wild5/src/images/abstracttitle.jpeg'


class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
        forgot: false,
        modal: false,
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

    onButtonPress() {
        const { email, password } = this.state
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
            <Button onPress={this.onButtonPress.bind(this)}>
                    Login
            </Button>
        )
    }

    onLoginSuccess() {
        this.setState({
            error: '',
            loading: false
        })
        Actions.landing();
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        })
    }

    render(){
        return (
            <ImageBackground source={abstractimg}>
        <Card>
            {this.state.modal ? <RegisterModal visible={true}/> : null}
            {this.state.forgot ? <ForgotPassModal visible={true}/> : null}
            <CardSection>
                <Input
                placeholder='user@email.com'
                // label='Email'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                
                />
            </CardSection>

            <CardSection>
            <Input
                placeholder='Enter your password'
                // label='Password'
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry
                />
            </CardSection>

            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>

            <CardSection>
                {this.renderButton()}
            </CardSection>

            <CardSection>

                <Button onPress={this.OnRegisterPress.bind(this)}>
                    Register
                </Button>
            </CardSection>
            <Text onPress={this.OnForgotPress.bind(this)} style={{color: 'blue', alignSelf: 'center', marginTop: 10}}>Forgot your password?</Text>

        </Card>
        </ImageBackground>
        )
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#F00'
    },
    successTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#BADA55'
    }
}

export default withAuthProvider(LoginForm);