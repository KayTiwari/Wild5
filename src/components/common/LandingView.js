import React from 'react'
import {View, SafeAreaView, Image, ScrollView, Dimensions, Text} from 'react-native'
import KS30title from "../../images/KS30_578_113.png";
import wild5title from "../../images/wild5_logo_resized4.png";
import Navigation from "../LandingNavigation"
import Navbar from "../Navbar"
import {ProgressRing} from '../../components/charts/ProgressRing'

const {width} = Dimensions.get('window')
const tileSize = width / 2 - 15;
export default LandingView = (props) => {
  console.log(props)
    return (
        <View style={{ flex: 1, backgroundColor:'#fff' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView bounces={false}>
          <Image
            source={KS30title}
            style={{
              width: "80%",
              resizeMode: "contain",
              marginTop: "3%",
              alignSelf: "center"
            }}
          />
          <View style={{ marginTop: "2%", flex: 1 }}>
            <Navigation hero={props.hero} hero2={props.hero2} />
          </View>
          <View style={{height: 100, width: '100%'}}>
            <ProgressRing 
             value={100}
             radius={tileSize / 2 - 20}
             progressColor={'#041D5D'}
            />
            </View>
            <Text>HELLO</Text>
          <Image
            source={wild5title}
            style={{
              width: "80%",
              marginTop: "25%",
              resizeMode: "contain",
              marginBottom: "2%",
              alignSelf: "center"
            }}
          />
        </ScrollView>
      </SafeAreaView>
      <Navbar homedisable />
    </View>
    )
}