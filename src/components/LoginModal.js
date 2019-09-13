import React, {useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import {Icon, Input } from 'native-base'
import firebase from 'react-native-firebase'
import {withAuthProvider} from '../context/authcontext'


const LoginModal = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
    >
        <View style={{ flex: 1, justifyContent:'center' }}>
          <View
            style={{
              backgroundColor:'#fff',
              height: '40%',
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "5%",
              borderRadius: 20,
              shadowColor: "black",
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 0.8,
              shadowRadius: 6
            }}
          >
          <View style={{alignSelf:'center', marginTop:'10%', height: 50, width:'80%', borderBottomWidth:2, borderColor: '#041D5D'}}>
          <Input
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              spellCheck={false}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              textContentType={'emailAddress'}
              shake={true}
            />
          </View>
          <View style={{alignSelf:'center', marginTop:'10%',height: 50, width:'80%', borderBottomWidth:2, borderColor: '#041D5D'}}>
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
          {loading ? <View style={{alignSelf:'center', paddingTop:10}}><ActivityIndicator size="large" color="#041D5D"/></View> : null}
          <View style={{alignSelf:'center', width:'90%', marginTop:'5%'}}>
            <TouchableOpacity style={{height: 70, width: "80%", borderRadius:10, backgroundColor:'#041D5D', alignSelf:'center', justifyContent:'center'}} onPress={()=> LoginPress()}>
              <Text style={{alignSelf: 'center', color:'#fff', fontSize:26, fontWeight:800}}>Login</Text>
            </TouchableOpacity></View>
          </View>
          </View>
          </KeyboardAvoidingView>
    )
}

export default LoginModal