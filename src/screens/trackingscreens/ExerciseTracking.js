import React from 'react';
import {Alert, View} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {Text, Item, Label, Input, Picker, Form} from 'native-base';
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

export const EXERCISE_INTENSITY = {
  LOW: 'low',
  MODERATE: 'moderate',
  HIGH: 'high',
};

function ExerciseTracking() {
  const [type, setType] = React.useState('');
  const [otherType, setOtherType] = React.useState('');
  const [duration, setDuration] = React.useState(0);
  const [intensity, setIntensity] = React.useState('');
  const [didFollowFID, setDidFollowFID] = React.useState(1);

  const submitForm = React.useCallback(async () => {
    const exerciseRef = scopeRefByUserAndDate('Surveys', 'exercise');

    await firebase
      .database()
      .ref(exerciseRef)
      .update({
        type: otherType || type,
        duration,
        intensity,
      });

    // Handle errors here

    Alert.alert('Success!', 'Your exercises for today have been recorded.', [
      {text: 'OK', onPress: Actions.landing},
    ]);
  }, [type, duration, intensity]);

  return (
    <TrackingScreen
      backgroundImage={exbackground}
      color="#a8eb12"
      activityTitle="Exercise"
      onSave={submitForm}
    >
      <View
        style={{
          backgroundColor: '#72B83E',
          alignSelf: 'center',
          marginVertical: 10,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            alignSelf: 'center',
            fontWeight: '700',
          }}
        >
          Program Expectations
        </Text>
        <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
          Exercise 30 minutes each day for 30 days, aim for at least moderate
          intensity.
        </Text>
      </View>
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <Text
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            fontWeight: '600',
            marginBottom: 10,
          }}
        >
          Did I Exercise Today Following the FID Practices?
        </Text>
        <RadioForm
          radio_props={[{label: 'Yes', value: 1}, {label: 'No', value: 0}]}
          initial={didFollowFID}
          formHorizontal={true}
          buttonColor={'#a8eb12'}
          selectedButtonColor={'#a8eb12'}
          animation={true}
          onPress={value => setDidFollowFID(value)}
          radioStyle={{marginRight: 20}}
        />
      </View>

      <Text
        style={{
          textAlign: 'center',
          marginTop: '10%',
          fontWeight: '600',
        }}
      >
        Type of Exercise?
      </Text>
      <Form style={{marginBottom: '10%'}}>
        <Picker
          note={false}
          selectedValue={type}
          onValueChange={setType}
          mode="dropdown"
          style={{width: undefined}}
          placeholder="Select One..."
          iosHeader="Exercises"
        >
          {exerciseTypes.map(type => (
            <Picker.Item key={type} label={type} value={type} />
          ))}
        </Picker>

        {type === 'Other' && (
          <Item style={{marginBottom: 20}} floatingLabel>
            <Label>Enter other exercise...</Label>
            <Input autoCorrect={false} onChangeText={setOtherType} />
          </Item>
        )}
      </Form>

      <Text
        style={{
          marginBottom: '5%',
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
        onValueChange={setDuration}
      />
      <Text style={{textAlign: 'center'}}>{duration} minutes</Text>
      <Text
        style={{
          marginTop: '10%',
          marginBottom: 10,
          fontWeight: '600',
          textAlign: 'center',
        }}
      >
        Intensity of Exercise?
      </Text>
      <RadioForm
        style={{alignSelf: 'center'}}
        radio_props={[
          {label: 'Low', value: EXERCISE_INTENSITY.LOW},
          {label: 'Moderate', value: EXERCISE_INTENSITY.MODERATE},
          {label: 'High', value: EXERCISE_INTENSITY.HIGH},
        ]}
        initial={0}
        formHorizontal={false}
        labelHorizontal={true}
        buttonColor={'#a8eb12'}
        selectedButtonColor={'#a8eb12'}
        animation={true}
        onPress={value => setIntensity(value)}
      />
    </TrackingScreen>
  );
}
export default withAuthProvider(ExerciseTracking);
