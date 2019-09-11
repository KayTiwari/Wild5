import React from 'react'
import {View, SafeAreaView, Image} from 'react-native'
import KS30title from "../../images/KS30_578_113.png";
import wild5title from "../../images/wild5_logo_resized4.png";
import Navigation from "../LandingNavigation"
import Navbar from "../Navbar"


export default InitialHero = (props) => {
  console.log(props)
    return (
    <View style={{ flex: 1, backgroundColor:'#fff' }}>
    <SafeAreaView style={{ flex: 1, backgroundColor:'#fff' }}>
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
        <View style={{flex:1, justifyContent:'flex-end'}}>
      <Image
        source={wild5title}
        style={{
          width: "80%",
          resizeMode: "contain",
          marginBottom: "2%",
          alignSelf: "center"
        }}
      />
      </View>
    </SafeAreaView>
    <Navbar homedisable />
  </View>
    )
}