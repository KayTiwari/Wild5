import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import { withAuthProvider } from "../context/authcontext";
import {Actions} from 'react-native-router-flux';
import KS30 from "../images/KS30_login.png";
import Register from './RegisterPage'
import LoginModal from '../components/LoginModal'

const NewLoginScreen = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [raised, setRaised] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [viewModal, setViewModal] = useState("")

  showModal = (view) => {
    console.log(view)
    setViewModal(view)
    setModal(true)
    
  }

  return (
    
      <View style={{ flex: 1 }}>
      <SafeAreaView style={{flex: 1}}>
      
      <Modal
      transparent={true}
      visible={modal}
      onRequestClose={()=> setModal(false)}
      >
      
      { viewModal === "Register" ?
      
        <Register closeModal={() => setModal(false)} />
         :
        viewModal === "Login" ?
        <LoginModal/> : null
      }
      </Modal>
      
        <View style={{ alignSelf: "center", marginTop: "5%", marginBottom:'10%' }}>
          <Image source={KS30} style={{ alignSelf: "center" }} />
          <View style={{ height: 200, width: 400, display: 'flex', justifyContent:'center', alignSelf:'center', marginTop: '10%' }}>
            <Image
              style={{ flex: 1, height: undefined, width: undefined }}
              source={require("../images/water_rocks.jpg")}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={{width: '50%', backgroundColor: "#52669c", alignSelf:'center', height: 50, justifyContent:'center'}}>
          <Text style={{alignSelf:'center', fontSize:20, color: '#fff', paddingRight:5, paddingLeft: 5}}>Let's Get Started</Text>
          </View>
          <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-around', marginTop:'20%'}}>
            <TouchableOpacity style={styles.buttons} onPress={()=>showModal("Register")}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.imageView}>
            <Image source={require("../images/wild5star.png")}
            style={{ flex: 1, height: undefined, width: undefined }}
            />
            </View>
            <TouchableOpacity style={styles.buttons} onPress={()=>showModal("Login")}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
      </View>
    
  );
};

export default withAuthProvider(NewLoginScreen);

const styles = StyleSheet.create({
  buttons: {
    height: '60%',
    width: '25%',
    justifyContent: 'center',
  },
  buttonText: {
    letterSpacing: 1,
    fontWeight: '900',
    color: '#52669c', 
    fontSize: 18, 
    alignSelf: 'center'
  },
  imageView:{
    height: 60,
    width: 60,
  }
})