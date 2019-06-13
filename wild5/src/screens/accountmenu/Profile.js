// import React, { Component } from 'react'
// import { Container, Header, Content, Form, Item, Input, DatePicker } from 'native-base';
// import { View, Button, Text, Image, ScrollView, TextInput, DatePickerIOS, Modal, TouchableOpacity, StyleSheet, Alert } from 'react-native'
// import Navbar from '../../components/Navbar';
// import ToggleSwitch from 'toggle-switch-react-native'
// import Plus from '../../images/PlusBox.png'
// import PushNotificationIOS from '../../components/common/PushNotificationsIOS'
// import appConfig from '../../../app.json'


// class Profile extends Component {
//   constructor(){
//     super()
//   state = {
//     // startDate: new Date(),
//     firstName: '',
//     lastName: '',
//     email: '',
//     birthday: new Date,
//     exerciseReminder: false,
//     mindfulnessReminder: false,
//     sleepReminder: false,
//     socialReminder: false,
//     nutritionReminder: false,
//     senderId: appConfig.senderID,
//     reminders: [
//       {
//         title: '',
//         date: ''

//       }
//     ],
    
//   }
//   this.PushNotificationIOS = new PushNotificationIOS(this.onRegister, this.onNotif);}

  

//   exerciseReminder = () => {
//     this.setState({
//       exerciseReminder: !this.state.exerciseReminder
//     }, ()=> this.scheduleNotif())
//   }

//   mindfulnessReminder = () => {
//     this.setState({
//       mindfulnessReminder: !this.state.mindfulnessReminder
//     })
//   }

//   sleepReminder = () => {
//     this.setState({
//       sleepReminder: !this.state.sleepReminder
//     })
//   }

//   socialReminder = () => {
//     this.setState({
//       socialReminder: !this.state.socialReminder
//     })
//   }
//   nutritionReminder = () => {
//     this.setState({
//       nutritionReminder: !this.state.nutritionReminder
//     })
//   }

//   setDate = (newdate) => {
//     this.setState({
//       birthday: newdate
//     })
//   }

//   onRegister = (token) => {
//     Alert.alert("Registered !", JSON.stringify(token));
//     console.log(token);
//     this.setState({ registerToken: token.token, gcmRegistered: true });
//   }

//   onNotif = (notif) =>{
//     console.log(notif);
//     Alert.alert(notif.title, notif.message);
//   }

//   handlePerm = (perms) => {
//     Alert.alert("Permissions", JSON.stringify(perms));
//   }


//   render(){
//     return (
//       <>
//       <Container>
//         <Form>
//           <Item>
//           <Input placeholder="Firstname" value={this.state.firstName}/>
//           </Item>
//           <Item>
//           <Input placeholder="Lastname" value={this.state.lastName}/>
//           </Item>
//           <Item>
//           <Input placeholder="Email" value={this.state.email}/>
//           </Item>
//           <Item>
//           <DatePicker
//             defaultDate={new Date(Date.now())}
//             maximumDate={new Date(Date.now())}
//             locale={"en"}
//             timeZoneOffsetInMinutes={undefined}
//             modalTransparent={false}
//             animationType={"fade"}
//             androidMode={"default"}
//             placeHolderText="Select date"
//             textStyle={{ color: "green" }}
//             placeHolderTextStyle={{ color: "#d3d3d3" }}
//             onDateChange={this.setDate}
//             disabled={false}
//             />
//             <Text style={{fontSize: 20}}>
//               Birthday: {this.state.birthday.toString().substr(4, 12)}
//             </Text>
//           </Item>
//         </Form>
//         <View>
//           <Text style={{fontSize: 20}}>Notifications</Text>
//           <View>
//           <Text>Exercise</Text>
//           <ToggleSwitch
//         // label='Exercise'
//         labelStyle={{color: 'black', fontWeight: '900'}}
//         size="large"
//         onColor="#73BA3F"
//         offColor="#bec6d3"
//         isOn={this.state.exerciseReminder}
//         onToggle={() => this.exerciseReminder()}
//         />
//         </View>
//         <View>
//         <Text>Mindfulness</Text>
//         <ToggleSwitch
//         // label='Mindfulness'
//         labelStyle={{color: 'black', fontWeight: '900'}}
//         size="large"
//         onColor="#0AB2E8"
//         offColor="#333"
//         isOn={this.state.mindfulnessReminder}
//         onToggle={() => this.mindfulnessReminder()}
//         />
//         </View>
//         <View>
//           <Text>Sleep</Text>
//         <ToggleSwitch
//         // label='Sleep'
//         labelStyle={{color: 'black', fontWeight: '900'}}
//         size="large"
//         onColor="#B72B90"
//         offColor="#333"
//         isOn={this.state.sleepReminder}
//         onToggle={() => this.sleepReminder()}
//         />
//         </View>
//         <View>
//           <Text>Social</Text>
//         <ToggleSwitch
//         // label='Social'
//         labelStyle={{color: 'black', fontWeight: '900'}}
//         size="large"
//         onColor="#E93422"
//         offColor="#333"
//         isOn={this.state.socialReminder}
//         onToggle={() => this.socialReminder()}
//         />
//         </View>
//         <View>
//           <Text>Nutrition</Text>
//         <ToggleSwitch
//         // label='Nutrition'
//         labelStyle={{color: 'black', fontWeight: '900'}}
//         size="large"
//         onColor="#C6411F"
//         offColor="#333"
//         isOn={this.state.nutritionReminder}
//         onToggle={() => this.nutritionReminder()}
//         />
//         </View>
//         </View>
//       </Container>
//       <Navbar/>
//       </>
//     )
//   }
// }


// export {Profile}