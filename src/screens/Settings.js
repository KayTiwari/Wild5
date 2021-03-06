import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Platform, TimePickerAndroid } from 'react-native';
import {Icon} from 'native-base';
import Navbar from '../components/Navbar';
import ToggleSwitch from 'toggle-switch-react-native';
import PushNotificationIOS from '../components/common/PushNotificationsIOS';
import appConfig from '../../app.json';
import TimePicker from '../components/common/TimePicker';
import {Actions} from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import {  exerciseColor,
  mindfulnessColor,
  nutritionColor,
  sleepColor,
  socialColor} from '../components/common/colors';

type Props = {};
class Settings extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      currentPillar: '',
      exerciseReminder: false,
      mindfulnessReminder: false,
      sleepReminder: false,
      socialReminder: false,
      nutritionReminder: false,
      showTimer: false,
      senderId: appConfig.senderID,
      chosenDate: new Date(),
      user: '',
      chosenAndroidTime: '00:00'
    };
    this.PushNotificationIOS = new PushNotificationIOS(this.onNotif);
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user) {
      var res = user.email.split('.');
      var userEm = res[0].toString();
      this.setState({
        user: userEm,
      });
    } else {
      console.log('set State for user failed sleepquest line 52');
    }
    this.getNotifStatus();
  }

  getNotifStatus = () => {
    firebase
      .database()
      .ref(`notifications/${this.state.user}/`)
      .once('value', snap => {
        if (snap.val() !== null) {
          let data = snap.val();
          this.setState({
            exerciseReminder:
              data[`${this.state.user}`].exercise !== undefined
                ? data[`${this.state.user}`].exercise.notifOn
                : false,
            mindfulnessReminder:
              data[`${this.state.user}`].mind !== undefined
                ? data[`${this.state.user}`].mind.notifOn
                : false,
            sleepReminder:
              data[`${this.state.user}`].sleep !== undefined
                ? data[`${this.state.user}`].sleep.notifOn
                : false,
            socialReminder:
              data[`${this.state.user}`].social !== undefined
                ? data[`${this.state.user}`].social.notifOn
                : false,
            nutritionReminder:
              data[`${this.state.user}`].nutrition !== undefined
                ? data[`${this.state.user}`].nutrition.notifOn
                : false,
          });
        }
      })
      .then()
      .catch();
  };

  androidTimePicker = async () => {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false,
        mode: 'default'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
      const m = (minute < 10) ? `0${minute}` : minute;
      const h = (hour < 10) ? `0${hour}` : hour;
      console.log(`time: ${hour}:${minute}`);
      const date = new Date()
      this.setState({ chosenAndroidTime: `${h}:${m}` }, ()=> this.submitTime(new Date(date.setHours(h,m,)),
        this.state.currentPillar));
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }

  setDate = newDate => {
    this.setState({chosenDate: newDate});
    // schedule notification (this.state.piller, newDate)
  };

  showTimePicker = () => {
    return (
      <TimePicker
        date={this.state.chosenDate}
        onDateChange={this.setDate}
        showTimer={this.state.showTimer}
        onConfirm={()=>this.submitTime(
          this.state.chosenDate,
          this.state.currentPillar
        )}
        onCancel={this.showTimer(this.state.currentPillar)}
      />
    );
  };

  // You only schedule the notification when the date changes
  // You need to keep track (in state) of which toggle button is being configured at the moment

  showTimer = pillar => {
    return () => {
      if (pillar === 'exercise') {
        this.setState({exerciseReminder: !this.state.exerciseReminder});
      } else if (pillar === 'mind') {
        this.setState({mindfulnessReminder: !this.state.mindfulnessReminder});
      } else if (pillar === 'sleep') {
        this.setState({sleepReminder: !this.state.sleepReminder});
      } else if (pillar === 'social') {
        this.setState({socialReminder: !this.state.socialReminder});
      } else if (pillar === 'nutrition') {
        this.setState({nutritionReminder: !this.state.nutritionReminder});
      }
      this.setState(prevState => ({
        showTimer: false,
      }));
    };
  };

  toggleSwitch = pillar => {
    return e => {
      if (pillar === 'exercise') {
        this.state.exerciseReminder
          ? this.setState({
              exerciseReminder: false,
            },()=> this.deleteTime(pillar), this.PushNotificationIOS.cancel('0'))
          : this.setState({
              exerciseReminder: !this.state.exerciseReminder,
              showTimer: true,
              currentPillar: pillar,
            }, ()=> Platform.OS === 'android' ? this.androidTimePicker() : null);
      } else if (pillar === 'mind') {
        this.state.mindfulnessReminder
          ? this.setState({
              mindfulnessReminder: false,
            }, ()=> this.deleteTime(pillar), this.PushNotificationIOS.cancel('1'))
          : this.setState({
              mindfulnessReminder: !this.state.mindfulnessReminder,
              showTimer: true,
              currentPillar: pillar,
            });
      } else if (pillar === 'sleep') {
        this.state.sleepReminder
          ? this.setState({
              sleepReminder: false,
            },()=> this.deleteTime(pillar), this.PushNotificationIOS.cancel('2'))
          : this.setState({
              sleepReminder: !this.state.sleepReminder,
              showTimer: true,
              currentPillar: pillar,
            }, );
      } else if (pillar === 'social') {
        this.state.socialReminder
          ? this.setState({
              socialReminder: false,
            },()=> this.deleteTime(pillar), this.PushNotificationIOS.cancel('3'))
          : this.setState({
              socialReminder: !this.state.socialReminder,
              showTimer: true,
              currentPillar: pillar,
            });
      } else if (pillar === 'nutrition') {
        this.state.nutritionReminder
          ? this.setState({
              nutritionReminder: false,
            },()=> this.deleteTime(pillar), this.PushNotificationIOS.cancel('4'))
          : this.setState({
              nutritionReminder: !this.state.nutritionReminder,
              showTimer: true,
              currentPillar: pillar,
            });
      }
      // this.setState({
      //     showTimer: true,
      //     currentPillar: pillar
      //   })
    };
  };

  deleteTime = (pillar) => {
    firebase.database().ref(`notifications/${this.state.user}/${pillar}`).set(null)
  }

  submitTime = (date, pillar) => {
      console.log(pillar, date)
      this.PushNotificationIOS.scheduleNotif(pillar, date);
      let date1 = date;
      const data = {
        notifOn: '',
        timeChosen: date,
      };
      if (pillar === 'exercise') {
        data.notifOn = this.state.exerciseReminder;
      } else if (pillar === 'mind') {
        data.notifOn = this.state.mindfulnessReminder;
      } else if (pillar === 'sleep') {
        data.notifOn = this.state.sleepReminder;
      } else if (pillar === 'social') {
        data.notifOn = this.state.socialReminder;
      } else if (pillar === 'nutrition') {
        data.notifOn = this.state.nutritionReminder;
      }
      firebase
        .database()
        .ref(`notifications/${this.state.user}/${pillar}`)
        .set(data);
      this.setState(prevState => ({
        showTimer: false,
        currentPillar: '',
      }));
    };

  onRegister = token => {
    Alert.alert('Registered !', JSON.stringify(token));
    console.log(token);
    this.setState({registerToken: token.token, gcmRegistered: true}, ()=>console.log("onRegister setState ran"));
  };

  onNotif = notif => {
    console.log(notif);
    Alert.alert(notif.title, notif.message);
  };

  handlePerm = perms => {
    Alert.alert('Permissions', JSON.stringify(perms));
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          {this.state.showTimer && Platform.OS === 'ios' ? this.showTimePicker() : null}
          <View style={{marginTop: Platform.OS === 'ios' ? '12%' : '5%', marginLeft: '5%'}}>
            <View style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 36, marginBottom: Platform.OS === 'ios' ? 10 : 0, fontWeight: '900', color: '#000'}}>
                Settings
              </Text>
              <Icon />
            </View>
            <Text style={{fontSize: 20, color: '#000'}}>Notifications</Text>
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: '#000',
                width: '90%',
              }}
            >
              <View style={{marginTop: 15}}>
                <Text style={{fontSize: 20, color: '#000'}}>Exercise</Text>
                <ToggleSwitch
                  labelStyle={{color: '#000', fontWeight: '900'}}
                  size="large"
                  onColor={exerciseColor}
                  offColor="#d5eac5"
                  isOn={this.state.exerciseReminder}
                  onToggle={this.toggleSwitch('exercise')}
                />
              </View>
              <View>
                <Text style={{fontSize: 20, color: '#000'}}>Mindfulness</Text>
                <ToggleSwitch
                  labelStyle={{color: '#000', fontWeight: '900'}}
                  size="large"
                  onColor={mindfulnessColor}
                  offColor="#cef0fa"
                  isOn={this.state.mindfulnessReminder}
                  onToggle={this.toggleSwitch('mind')}
                />
              </View>
              <View>
                <Text style={{fontSize: 20, color: '#000'}}>Sleep</Text>
                <ToggleSwitch
                  labelStyle={{color: '#000', fontWeight: '900'}}
                  size="large"
                  onColor={sleepColor}
                  offColor="#f1d5e9"
                  isOn={this.state.sleepReminder}
                  onToggle={this.toggleSwitch('sleep')}
                />
              </View>
              <View>
                <Text style={{fontSize: 20, color: '#000'}}>Social</Text>
                <ToggleSwitch
                  labelStyle={{color: '#000', fontWeight: '900'}}
                  size="large"
                  onColor={socialColor}
                  offColor="#fbd6d3"
                  isOn={this.state.socialReminder}
                  onToggle={this.toggleSwitch('social')}
                />
              </View>
              <View>
                <Text style={{fontSize: 20, color: '#000'}}>Nutrition</Text>
                <ToggleSwitch
                  labelStyle={{color: '#000', fontWeight: '900'}}
                  size="large"
                  onColor={nutritionColor}
                  offColor="#f4d9d2"
                  isOn={this.state.nutritionReminder}
                  onToggle={this.toggleSwitch('nutrition')}
                />
              </View>
            </View>
          </View>
          {/* <Text style={{ fontSize: 20, marginLeft: "5%", marginTop: 20 }}>
            Quests
          </Text> */}
          {/* <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "black",
              width: "90%",
              marginLeft: "5%"
            }}
          > */}
          {/* <TouchableOpacity
              style={{
                marginTop: 15,
                borderRadius: 20,
                width: "45%",
                height: 60,
                backgroundColor: "#E17026",
                justifyContent: "center"
              }}
              onPress={() => Actions.nutritionquestcameraroll()}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
                  Nutrition Quest{"\n"} Photos
                </Text>
              </View>
            </TouchableOpacity> */}
          <View style={{marginLeft: 15, marginTop: 20}}>
            <TouchableOpacity
              style={{
                height: 60,
                width: 100,
                backgroundColor: '#041D5D',
                justifyContent: 'center',
                borderRadius: 7,
              }}
              onPress={() => firebase.auth().signOut()}
            >
              <Text style={{color: '#fff', alignSelf: 'center', fontSize:18}}>Logout</Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
        <Navbar settingsdisable/>
        </View>
    );
  }
}

export default Settings;
