import React, {Component} from 'react';
import {Alert} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {Text, Item, Label, Input, Picker, Icon} from 'native-base';
import Slider from '@react-native-community/slider';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import exbackground from '../../images/exercise-background.jpg';
import {TrackingScreen} from './TrackingScreen';
import {withAuthProvider} from '../../context/authcontext';
import {scopeRefByUserAndDate} from '../../utils/firebase';

const exerciseTypes = [
  'Walking',
  'Jogging',
  'Biking',
  'Playing Sports',
  'Swimming',
  'Weight Lifting',
  'Aerobics',
  'Water Aerobics',
  'Other',
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
  };

  submitForm = async () => {
    const {type, duration, intensity} = this.state;

    const exerciseRef = scopeRefByUserAndDate('Surveys', 'exercise');

    await firebase
      .database()
      .ref(exerciseRef)
      .update({
        type,
        duration,
        intensity,
      });

    // Handle errors here

    Alert.alert('Success!', 'Your exercises for today have been recorded.', [
      {text: 'OK', onPress: Actions.landing},
    ]);
  };

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
            {exerciseTypes.map(type => (
              <Picker.Item key={type} label={type} value={type} />
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
