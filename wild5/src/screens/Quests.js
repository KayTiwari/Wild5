import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
class Quests extends Component {
  render() {
    return (
        <View>
       <TouchableOpacity onPress={() => Actions.nutritionquest()}>
         <Image source={require('../images/Nutritionbutton.png')} style={{width: 'auto', maxHeight: 200}} />
       </TouchableOpacity>
     </View>
    )
  }
}
export default Quests