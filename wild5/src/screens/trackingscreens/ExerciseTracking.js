import React, {Component} from 'react';
import {View} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {Text, Item, Label, Input, Picker, Icon} from 'native-base';
import Slider from '@react-native-community/slider';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import exbackground from '../../images/exercise-background.jpg';
import {TrackingScreen} from './TrackingScreen';
import {withAuthProvider} from '../../context/authcontext';

let typedata = [
  {
    value: 'Walking',
  },
  {
    value: 'Jogging',
  },
  {
    value: 'Biking',
  },
  {
    value: 'Playing Sports',
  },
  {
    value: 'Swimming',
  },
  {
    value: 'Weight Lifting',
  },
  {
    value: 'Aerobics',
  },
  {
    value: 'Water Aerobics',
  },
  {
    value: 'Other',
  },
];

firebase.initializeApp({
  apiKey: 'AIzaSyC93k0KGpd8myVQxCTgWPw6Qk9NzNA6b_o',
  authDomain: 'wild5-5ca8b.firebaseapp.com',
  databaseURL: 'https://wild5-5ca8b.firebaseio.com',
  projectId: 'wild5-5ca8b',
  storageBucket: 'wild5-5ca8b.appspot.com',
  messagingSenderId: '714885268112',
});

class ExerciseTracking extends Component {
  state = {
    type: '',
    duration: 0,
    intensity: '',
    user: '',
    date: '',
  };

  submitForm() {
    const {type, duration, intensity, user, date} = this.state;

    firebase
      .database()
      .ref(`Surveys/${user}/${date}`)
      .update({
        Extype: type,
        Exduration: duration,
        Exintensity: intensity,
      })
      .then(() =>
        AlertIOS.alert('Data submitted Successfully', '', [
          {
            text: 'ok',
            onPress: () => Actions.quests(),
            style: 'ok',
          },
        ])
      );
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
      console.log('noperz');
    }
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var dateTime = date;
    this.setState({
      date: dateTime,
    });
  }

  render() {
    return (
      <TrackingScreen
        backgroundImage={exbackground}
        color="#a8eb12"
        activityTitle="Exercise"
        onSave={this.submitForm}
      >
        <Text
          style={{
            textAlign: 'center',
            marginTop: '10%',
            marginBottom: '10%',
            fontWeight: '600',
          }}
        >
          Type of Exercise?
        </Text>
        <Item style={{marginBottom: '10%'}} picker>
          <Picker
            selectedValue={this.state.type}
            onValueChange={type => this.setState({type})}
            mode="dropdown"
            style={{width: undefined}}
            placeholder="Select One..."
            iosHeader="Exercises"
            iosIcon={<Icon name="ios-arrow-dropdown" style={{fontSize: 25}} />}
          >
            {typedata.map(type => (
              <Picker.Item
                key={type.value}
                label={type.value}
                value={type.value}
              />
            ))}
          </Picker>
        </Item>

        {this.state.type === 'Other' && (
          <Item style={{marginBottom: 20}} floatingLabel>
            <Label>Enter other exercise...</Label>
            <Input
              autoCorrect={false}
              onChangeText={text => this.setState({type: text})}
            />
          </Item>
        )}

        <Text
          style={{
            marginBottom: '5%',
            fontSize: 24,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Exercise Duration?
        </Text>
        <Slider
          style={{width: '80%', alignSelf: 'center'}}
          minimumValue={0}
          maximumValue={120}
          minimumTrackTintColor="#a8eb12"
          step={5}
          onValueChange={value => this.setState({duration: value})}
        />
        <Text style={{textAlign: 'center'}}>{this.state.duration} minutes</Text>
        <Text
          style={{
            marginVertical: '10%',
            fontSize: 24,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Intensity of Exercise?
        </Text>
        <RadioForm
          style={{alignSelf: 'center'}}
          radio_props={[
            {label: 'Low', value: 'low'},
            {label: 'Moderate', value: 'moderate'},
            {label: 'High', value: 'high'},
          ]}
          initial={0}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={'#a8eb12'}
          selectedButtonColor={'#a8eb12'}
          animation={true}
          onPress={value => {
            this.setState({intensity: value});
          }}
        />
      </TrackingScreen>
    );
  }
}
export default withAuthProvider(ExerciseTracking);
