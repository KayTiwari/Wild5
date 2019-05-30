import React, { Component } from 'react'
import { View, Button, Text, Image, ScrollView, TextInput, DatePickerIOS, Modal, TouchableOpacity } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import Plus from '../../images/PlusBox.png'
// import ToggleButton from '@bit/lekanmedia.shared-ui.toggle-button';


class Profile extends Component {
  state = {
    startDate: new Date(),
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    reminder: false,
    modalVisible: false,
    addReminder: false,
    reminders: [
      {
        title: '',
        date: ''

      }
    ]

  }

  setReminders = () => {
    if(this.state.reminder === false && this.state.modalVisible === false) {
    this.setState({
      reminder: true,
      modalVisible: true
    })
  } else if(this.state.reminder === true && this.state.modalVisible === false){
    this.setState({
      reminder: false
    })
  }
  }

  addReminder = () => {
    this.setState({
      reminder: true
    })
  }

  render(){
    return (
      <View >
      <Modal visible={this.state.modalVisible} transparent={true}>
        <View style={{height: 650, width: 350, backgroundColor: '#fff', marginHorizontal: 10, marginVertical: 90}}>
        {this.state.addReminder ?  
        <View style={{flex: 1}}>
        <TextInput
        style={{borderWidth: 5, borderColor: '#000', height: 50}}
        placeholder="Reminder Title"
        />
        <DatePickerIOS 
        style={{height: 100}}
        mode="time"
        date={this.state.startDate}
        onDateChange={(date) => this.setState({
          birthday: date
        })}
        />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Button 
        title="Set Reminder"
        />
      </View> 
      </View>
      :
      <>
          <View style={{borderBottomColor: '#000', borderBottomWidth: 3, alignItems: 'center'}}>
          <Text style={{fontSize: 25}}>Reminders</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity style={{marginRight: 10}} onPress={() => this.setState({ addReminder: true})}>
          <Image style={{height: 60, width: 60}} source={Plus}/>
          </TouchableOpacity>
        </View>
          <Button
          color='#333333'
          title="Hide"
          onPress={() => this.setState({modalVisible: false})}
          />
          </View>
          </>
    }
  
        </View>
      </Modal>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>Welcome!</Text>
        <View style={{height: 170, width: 'auto'}}>
        <Image style={{height: 150, width: 150}} source={{uri: 'https://blackrockdigital.github.io/startbootstrap-freelancer/img/profile.png'}} />
        </View>
        </View>
        <ScrollView>
          <TextInput style={{borderWidth: 5, borderColor: '#000', height: 50, marginBottom: 15, marginLeft: 20, marginRight: 20}} value={this.state.firstName} placeholder="First Name" onChangeText={(text) => this.setState({firstName: text})}/>
          <TextInput style={{borderWidth: 5, borderColor: '#000', height: 50, marginBottom: 15, marginLeft: 20, marginRight: 20}} value={this.state.lastName} placeholder="Last Name" onChangeText={(text) => this.setState({lastName: text})}/>
          <TextInput style={{borderWidth: 5, borderColor: '#000', height: 50, marginLeft: 20, marginRight: 20}} value={this.state.email} placeholder="Email" onChangeText={(text) => this.setState({email: text})}/>
          <DatePickerIOS
          mode="date"
          date={this.state.startDate}
          onDateChange={(date) => this.setState({
            birthday: date
          })}
          />
        <View>
        <ToggleSwitch
        label='Set Reminders?'
        labelStyle={{color: 'black', fontWeight: '900'}}
        size="medium"
        onColor="green"
        offColor="#333"
        isOn={this.state.reminder}
        onToggle={() => this.setReminders()}
        style={{display: 'inline-block'}}
        />
        { this.state.reminder === true ?
        <Button
        style={{display: 'inline-block'}}
        title="Edit"
        onPress={() => this.setState({
          modalVisible: true
        })}/>
        :
        null
        }
        </View>

        <View>
          
        </View>
        </ScrollView>

      </View>
    )
  }
}

export {Profile}