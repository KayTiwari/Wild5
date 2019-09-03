import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import {Text, Spinner} from 'native-base';
import ForgotModal from '../modals/NewForgotModal';
import firebase from 'react-native-firebase';
import {withAuthProvider} from '../context/authcontext';
import {Actions} from 'react-native-router-flux';
import abstractimg from '../images/abstract2.jpeg';
import wild5title from '../images/wild5_logo.png';
import {Input, Button} from 'react-native-elements';

const screenheight = Dimensions.get('window').height;

const NewLoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState(false);
  const [raised, setRaised] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  LoginPress = () => {
    setLoading(true);
    setError('');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.onLoginSuccess();
      })
      .catch(err => {
        this.onLoginFail(err);
      });
  };

  onLoginSuccess = () => {
    props.getUser();
  };

  onLoginFail = err => {
    console.log(err.message);
    if (err.message === 'The email address is badly formatted') {
      setError('Invalid Email Address');
    } else if (
      err.message ===
      'There is no user record corresponding to this identifier. The user may have been deleted.'
    ) {
      setError('Email address not registered yet!');
    } else if (
      err.message ===
      'The password is invalid or the user does not have a password.'
    ) {
      setError('Wrong Password');
    } else {
      setError(err.message);
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 0} behavior={ Platform.OS === 'ios' ? "padding" : null} enabled>
    <ScrollView>
      <View style={{backgroundColor: 'gray', height: screenheight}}>
        {modal ? <ForgotModal isVisible={modal} /> : null}
        <ImageBackground
          source={abstractimg}
          style={{
            flex: 1,
            resizeMode: 'cover',
            height: screenheight,
            width: '100%',
          }}
        >
          <View style={{width: '80%', alignSelf: 'center', marginTop: '10%'}}>
            <Image
              source={wild5title}
              style={{
                resizeMode: 'contain',
                width: '100%',
                marginTop: '15%',
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: 'white',
              height: '40%',
              width: '80%',
              padding: 30,
              borderRadius: 5,
              position: 'absolute',
              top: '35%',
              shadowColor: 'black',
              shadowOffset: {width: 4, height: 4},
              shadowOpacity: 0.5,
              shadowRadius: 6,
              alignSelf: 'center',
            }}
          >
            <Input
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              spellCheck={false}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              textContentType={'emailAddress'}
              shake={true}
            />
            <Input
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              spellCheck={false}
              textContentType={'password'}
              autoCapitalize={'none'}
              secureTextEntry={true}
              shake={true}
              inputContainerStyle={{
                backgroundColor: 'white',
                borderLeftColor: Platform.OS === 'ios' ? 'white' : null,
                borderRightColor: Platform.OS === 'ios' ? 'white' : null,
                borderBottomWidth: 0,
                borderWidth: 1,
              }}
            />
          </View>
        </ImageBackground>
        <Text
          style={{
            position: 'absolute',
            top: '50%',
            width: '50%',
            marginBottom: 0,
            alignSelf: 'center',
            color: 'red',
          }}
        >
          {error}
        </Text>
        {loading && !error ? (
          <View
            style={{
              position: "absolute",
                top: "47%",
                width: "50%",
                marginBottom: 0,
                alignSelf: "center"
            }}
          >
            <Spinner />
          </View>
        ) : null}
        <View
          style={{
            position: 'absolute',
            top: '55%',
            width: '50%',
            marginTop: 0,
            alignSelf: 'center',
          }}
        >
          <Button
            title="Login"
            type="outline"
            raised={raised}
            onPress={() => this.LoginPress()}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: '62%',
            width: '50%',
            alignSelf: 'center',
          }}
        >
          <Button
            title="Register"
            type="outline"
            raised={raised}
            onPress={() => Actions.registerpage()}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: '70%',
            width: '50%',
            alignSelf: 'center',
          }}
        >
          <Button
            title="Forgot password?"
            onPress={() => setModal(prevState => !prevState)}
            type="clear"
            titleStyle={{fontSize: 15}}
          />
        </View>
      </View>

      <View style={{backgroundColor: '#333'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: '600',
            textAlign: 'center',
            marginTop: '10%',
          }}
        >
          App made on React Native by the Wild Card Team.
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '5%',
          }}
        >
          Wild5 and all its resource materials are a product of the works by
          Rakesh and Saundra Jain MD.
        </Text>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default withAuthProvider(NewLoginScreen);
