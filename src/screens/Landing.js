import React from 'react';
import {View, ScrollView, SafeAreaView, Image} from 'react-native';
import KS30title from '../images/KS30_578_113.png';
import wild5title from '../images/wild5_logo_resized4.png'
import Navbar from '../components/Navbar';
import Navigation from '../components/LandingNavigation';

export default function Landing() {
  return (
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
            <Navigation />
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
