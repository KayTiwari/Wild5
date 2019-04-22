import React, {Component} from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase'
import {withAuthProvider} from '../context/authcontext';
import RegisterModal from './RegisterModal';


class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
        success: '',
        modal: false
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
        // const { email, password } = this.state;
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        // .then(() => {
        //     this.onLoginSuccess();
        // })
        // .catch(() => {
        //     this.onLoginFail();
        // })
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
            loading: false,
            email: '',
            password: '',
            success: 'Login Successful!'
        })
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        })
    }

    render(){
        return (
        <Card>
            {this.state.modal ? <RegisterModal /> : null}
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
            <Text style={styles.successTextStyle}>
                {this.state.success}
            </Text>

            <CardSection>
                {this.renderButton()}
            </CardSection>

            <CardSection>

                <Button onPress={this.OnRegisterPress.bind(this)}>
                <Button>
                    Register
                </Button>
            </CardSection>
        </Card>
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