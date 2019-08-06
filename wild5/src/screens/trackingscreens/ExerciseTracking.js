import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {ModButton} from '../../components/common';
import RadioForm from 'react-native-simple-radio-button';
import {Text, Item, Label, Input, Picker, Icon} from 'native-base';
import Slider from '@react-native-community/slider';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import exbackground from '../../images/exercise-background.jpg';
import {BlurredBackgroundImage} from '../../components/common/BlurredBackgroundImage';

const radio_props = [{ label: "Yes", value: "1" }, { label: "No", value: "0" }];
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

class ExerciseTracking extends Component {
  state = {
    type: '',
    duration: 0,
    intensity: '',
    user: '',
    date: '',
    otherType: false,
    exercisevalue: 0
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
      }).then(()=>Alert.alert(
        'Data submitted Successfully',
        '',
        [
          {
            text: 'ok',
            onPress: () => Actions.landing(),
            style: 'ok',
          }
        ],
      )
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

  checkOther = ()=> {
    this.state.type === "other" ?
                  this.setState({otherType: true}) : null
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
            marginBottom: '5%',
            fontWeight: '600',
            color: 'white',
          }}
        >
          Track your{' '}
          <Text style={{color: '#a8eb12', fontSize: 30, fontWeight: '600'}}>
            Exercise
          </Text>
        </Text>
        <View style={{backgroundColor:"#72B83E", width: '85%', alignSelf: 'center', height: 90, marginBottom: 10 }}>
          <Text style={{fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: '700'}}>
            Program Expectations
          </Text>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
            Exercise 30 minutes each day for 30 days, aim for at least moderate intensity
          </Text>
          </View>
          <View style={{alignSelf:'center', alignItems:'center'}}>
            <Text  style={{
              textAlign:'center',
              color: 'white',
              alignSelf: 'center',
              fontSize: 24,
              fontWeight: '600',
              marginBottom: 7
            }}>Did I Exercise Today Following the FID Practices?</Text>
            <RadioForm
            radio_props={radio_props}
            initial={1}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={"#a8eb12"}
            selectedButtonColor={"#a8eb12"}
            labelStyle={{fontSize: 20, color: '#fff'}}
            animation={true}
            onPress={value => {
              this.setState({ exerciseValue: value });
            }}
          />
          </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 24,
              fontWeight: '600',
            }}
          >
            Type of Exercise?
          </Text>
          <Item style={{marginVertical: 20}} picker>
            <Picker
              selectedValue={this.state.type}
              onValueChange={type => this.setState({

                type}, ()=> {
                this.state.type === "Other" ? this.setState({
                  type: "",
                  otherType: true}) : null
              })}
              mode="dropdown"
              placeholder="Select Type of Exercise"
              placeholderStyle={{color: 'white'}}
              placeholderIconColor="white"
              iosHeader="Exercises"
              iosIcon={
                <Icon
                  name="ios-arrow-dropdown"
                  style={{color: 'white', fontSize: 25}}
                />
              }
              textStyle={{color: 'white'}}
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

          {this.state.otherType === true ?
            <Item style={{marginBottom: 20}} floatingLabel>
              <Label style={{color: 'white'}}>Enter other exercise...</Label>
              <Input
                style={{color: 'white'}}
                autoCorrect={false}
                onChangeText={text => this.setState({type: text})}
                value={this.state.type}
              />
            </Item>
           : null}
        </View>

        <View style={{alignItems: 'center', alignSelf: 'stretch'}}>
          <Text
            style={{
              marginBottom: '5%',
              color: 'white',
              fontSize: 24,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Exercise Duration?
          </Text>
          <Slider
            style={{width: '80%'}}
            minimumValue={0}
            maximumValue={120}
            minimumTrackTintColor="#a8eb12"
            step={5}
            onValueChange={value => this.setState({duration: value})}
          />
          <Text style={{color: 'white'}}>{this.state.duration} minutes</Text>
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
              fontSize: 24,
              fontWeight: '600',
              color: 'white',
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
          label="Save My Exercise"
        />
      </BlurredBackgroundImage>
    );
  }
}
export default ExerciseTracking;
