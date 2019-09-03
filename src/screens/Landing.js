import React, {useState, useEffect} from 'react';
import {View, ScrollView, SafeAreaView, Image, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import KS30title from '../images/KS30_578_113.png';
import wild5title from '../images/wild5_logo_resized4.png'
import Navbar from '../components/Navbar';
import Navigation from '../components/LandingNavigation';
import HEROlogo from '../images/herologo.png';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase'
import {format} from 'date-fns'


const {width} = Dimensions.get('window');

export default function Landing() {
  const [hero, setHero] = useState(false)
  const [date, setDate] = useState(new Date())
  const [heroData, setHeroData] = useState([])

  useEffect(() => {
    checkHeroData()
    return () => {
      cleanup
    };
  }, [])

checkHeroData = () => {
  const date = format(new Date(), 'YYYY-MM-DD')
  const user = firebase.auth().currentUser
  const [scopedUser] = user.email.split('.')
  console.log(scopedUser)
  firebase.database().ref(`HERO/${scopedUser}`).once('value', snapshot => {
    if(snapshot.val() !== null){
      const data = Object.keys(snapshot.val())
      console.log(data)
      return data.forEach(survey => {
        console.log(survey, date)
        if(date === survey){
          return setHero(true)
        }
      });
    }
  })
}

  return (
    !hero ? <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
      <ScrollView bounces={false}>
          <Image
            source={KS30title}
            style={{
              width: '80%',
              resizeMode: 'contain',
              marginTop: '3%',
              alignSelf: 'center',
            }}
          />
          <View style={{marginTop: '2%', flex: 1}}>
            <Navigation hero={hero} />
          </View>
          <Image
            source={wild5title}
            style={{
              width: '80%',
              marginTop: '25%',
              resizeMode: 'contain',
              marginBottom: '2%',
              alignSelf: 'center',
            }}
          />
          </ScrollView>
      </SafeAreaView>
      <Navbar homedisable />
    </View> 
    :
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
          <Image
            source={KS30title}
            style={{
              width: '80%',
              resizeMode: 'contain',
              marginTop: '3%',
              alignSelf: 'center',
            }}
          />
          <View style={{marginTop: '2%', flex: 1}}>
            <Navigation hero={hero} />
          </View>
          <Image
            source={wild5title}
            style={{
              width: '80%',
              marginTop: '25%',
              resizeMode: 'contain',
              marginBottom: '2%',
              alignSelf: 'center',
            }}
          />
      </SafeAreaView>
      <Navbar homedisable />
    </View>  
  );
}

const styles = StyleSheet.create({
  icon: {color: 'white', fontSize: 60},
  title: {color: 'white', fontSize: 18},
  touchable: {
    backgroundColor: 'transparent',
    marginBottom: 10,
    width: (1 / 2) * width - 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }, item: {
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    height: 110,
  }
})