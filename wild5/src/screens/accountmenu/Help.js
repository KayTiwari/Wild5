import React from 'react'
import { Button, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
export default function Help() {
  return (
<View>
<Button 
title="About"
onPress={()=> Actions.about()}
/>
<Button
title="FAQ"
onPress={()=> Actions.faq()}
/>
</View>
  )
}
