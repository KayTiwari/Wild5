import React, { Component } from 'react'
import { View, Button, Text, Image, ScrollView, TextInput, DatePickerIOS, Modal } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'

class Profile extends Component {
  state = {
    startDate: new Date(),
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    modalVisible: false

  }

  render(){
    return (
      <View >
      <Modal visible={this.state.modalVisible}>
        <View>

        </View>
      </Modal>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>Welcome!</Text>
        <View style={{height: 300, width: 'auto'}}>
        <Image style={{height: 150, width: 150}} source={{uri: 'https://blackrockdigital.github.io/startbootstrap-freelancer/img/profile.png'}} />
        </View>
        </View>
        <ScrollView>
          <TextInput style={{borderWidth: 5, borderColor: '#000'}} value={this.state.firstName} placeholder="First Name" onChangeText={(text) => this.setState({firstName: text})}/>
          <TextInput style={{borderWidth: 5, borderColor: '#000'}} value={this.state.lastName} placeholder="Last Name" onChangeText={(text) => this.setState({lastName: text})}/>
          <TextInput style={{borderWidth: 5, borderColor: '#000'}} value={this.state.email} placeholder="Email" onChangeText={(text) => this.setState({email: text})}/>
          <DatePickerIOS
          mode="date"
          date={this.state.startDate}
          onDateChange={(date) => this.setState({
            birthday: date
          })}
          />
        <ToggleSwitch isOn={false}
        onToggle={() => console.log('')}
        />
        </ScrollView>

      </View>
    )
  }
}

export default Profile