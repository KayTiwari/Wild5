import React, {Component} from 'react';
import {View, ScrollView, SafeAreaView, Image} from 'react-native';
import wild5title from '../images/wild-5-logo-r-color.png';
import Navbar from '../components/Navbar';
import Navigation from '../components/LandingNavigation';

export default class Landing extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView bounces={false}>
            <Image
              source={wild5title}
              style={{
                width: '80%',
                resizeMode: 'contain',
                marginTop: '5%',
                alignSelf: 'center',
              }}
            />
            <View style={{marginTop: '5%', flex: 1}}>
              <Navigation />
            </View>
          </ScrollView>
        </SafeAreaView>
        <Navbar homedisable />
      </View>
    );
  }
}
