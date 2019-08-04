import React from 'react';
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

function ExerciseTracking() {
  const [type, setType] = React.useState('');
  const [duration, setDuration] = React.useState(0);
  const [intensity, setIntensity] = React.useState('');

  const submitForm = React.useCallback(async () => {
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
  }, [type, duration, intensity]);

  return (
    <TrackingScreen
      backgroundImage={exbackground}
      color="#a8eb12"
      activityTitle="Exercise"
      onSave={submitForm}
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
          selectedValue={type}
          onValueChange={setType}
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

      {type === 'Other' && (
        <Item style={{marginBottom: 20}} floatingLabel>
          <Label>Enter other exercise...</Label>
          <Input autoCorrect={false} onChangeText={setType} />
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
        onValueChange={setDuration}
      />
      <Text style={{textAlign: 'center'}}>{duration} minutes</Text>
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
        onPress={value => setIntensity(value)}
      />
    </TrackingScreen>
  );
}
export default withAuthProvider(ExerciseTracking);
