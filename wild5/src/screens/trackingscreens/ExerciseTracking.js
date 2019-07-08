import React, {Component} from 'react';
import {View} from 'react-native';
import {ModButton} from '../../components/common';
import RadioForm from 'react-native-simple-radio-button';
import {Text, Input} from 'native-base';
import {Dropdown} from 'react-native-material-dropdown';
import NumericInput from 'react-native-numeric-input';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import exbackground from '../../images/exercise-background.jpg';
import {BlurredBackgroundImage} from '../../components/common/BlurredBackgroundImage';

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
    console.log(this.state);
    const {type, duration, intensity, user, date} = this.state;
    firebase
      .database()
      .ref(`Surveys/${user}/${date}`)
      .update({
        Extype: type,
        Exduration: duration,
        Exintensity: intensity,
      });
    Actions.landing();
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
      <BlurredBackgroundImage
        style={{paddingHorizontal: 10}}
        source={exbackground}
        blurRadius={20}
      >
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            marginTop: '10%',
            marginBottom: '20%',
            fontWeight: '600',
            color: 'white',
          }}
        >
          Track your{' '}
          <Text style={{color: '#a8eb12', fontSize: 30, fontWeight: '600'}}>
            Exercise
          </Text>
        </Text>

        <View style={{marginLeft: '5%', marginRight: '5%'}}>
          <Dropdown
            baseColor="#a8eb12"
            label="Type of Exercise"
            data={typedata}
            onChangeText={text => this.setState({type: text})}
          />
        </View>
        <View>
          {this.state.type === 'Other' ? (
            <Input
              floatinglabel
              autoCorrect={false}
              onChangeText={text => this.setState({user: text})}
            />
          ) : null}
        </View>

        <View style={{alignSelf: 'center'}}>
          <Text style={{marginBottom: '5%', color: 'white'}}>
            How many minutes did you exercise?
          </Text>
          <NumericInput
            value={this.state.value}
            onChange={value => this.setState({duration: value})}
            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
            totalWidth={240}
            totalHeight={50}
            iconSize={25}
            step={5}
            minValue={0}
            valueType="real"
            rounded
            textColor="white"
            iconStyle={{color: 'white'}}
            rightButtonBackgroundColor="#a8eb12"
            leftButtonBackgroundColor="#a8eb12"
          />
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: '10%',
            marginBottom: '10%',
          }}
        >
          <Text
            style={{
              marginBottom: '5%',
              fontSize: 25,
              fontWeight: '600',
              color: 'white',
            }}
          >
            Intensity of exercise
          </Text>
          <RadioForm
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
            labelColor="white"
            selectedLabelColor="white"
            animation={true}
            onPress={value => {
              this.setState({intensity: value});
            }}
          />
        </View>

        <ModButton
          color={'#a8eb12'}
          onPress={() => this.submitForm()}
          label="Submit"
        >
          Submit
        </ModButton>
      </BlurredBackgroundImage>
    );
  }
}
export default ExerciseTracking;
