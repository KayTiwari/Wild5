import React from 'react';
import {View, KeyboardAvoidingView, Alert} from 'react-native';
import {Input, Item, Label, Text, Picker, Icon} from 'native-base';
import firebase from 'react-native-firebase';
import RadioForm from 'react-native-simple-radio-button';
import {TrackingScreen} from './TrackingScreen';
import {scopeRefByUserAndDate} from '../../utils/firebase';
import {Actions} from 'react-native-router-flux';
import mindTrackingImage from '../../images/mindfultracking1.jpg';
import {mindfulnessColor} from '../../components/common/colors'

const types = [
  'Mindfulness',
  'Transcendental',
  'Silent',
  'Qigong',
  'Compassion',
  'Other',
];

const MindfulnessTracking = () => {
  const [type, setType] = React.useState('');
  const [didMeditateToday, setDidMeditateToday] = React.useState(true);
  const [showOther, setShowOther] = React.useState(false);
  const [otherType, setOtherType] = React.useState('');

  const submitForm = React.useCallback(async () => {
    const mindfulnessRef = scopeRefByUserAndDate('Surveys', 'mindfulness');

    await firebase
      .database()
      .ref(mindfulnessRef)
      .update({
        type: otherType || type,
        didMeditateToday,
      });

    Alert.alert('Success!', 'Your mindfulness for today have been recorded.', [
      {text: 'OK', onPress: Actions.landing()},
    ]);
  }, [otherType, type, didMeditateToday]);

  React.useEffect(() => {
    setShowOther(type === 'Other');
  }, [type]);

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : null} enabled>
      <TrackingScreen
        backgroundImage={mindTrackingImage}
        color={mindfulnessColor}
        activityTitle="Mindfulness"
        onSave={submitForm}
      >
        <View
          style={{
            backgroundColor: mindfulnessColor,
            width: '85%',
            alignSelf: 'center',
            height: 90,
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
            Practices
          </Text>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
            Practice mindfulness for at least 10 minutes each day for 30 days.
          </Text>
        </View>
        <View>
          <View
            style={{
              alignSelf: 'center',
              marginTop: '10%',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                marginBottom: '5%',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: '600',
              }}
            >
              Did I Mindfully Meditate at Least 10 Mintues Today?
            </Text>

            <RadioForm
              radio_props={[
                {label: 'Yes', value: true},
                {label: 'No', value: false},
              ]}
              initial={false}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={mindfulnessColor}
              animation={true}
              onPress={value => setDidMeditateToday(value)}
            />
          </View>
        </View>

        <View style={{height: 100}}>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Picker
              style={{
                width:(Platform.OS === 'ios') ? undefined : '90%',
                marginLeft: 5, marginRight: 5}}
              selectedValue={type}
              onValueChange={type => setType(type)}
              mode="dropdown"
              placeholder="Select Type of Meditation"
              placeholderStyle={{color: '#000'}}
              placeholderIconColor="#000"
              iosHeader="Exercises"
              iosIcon={
                <Icon
                  name="ios-arrow-dropdown"
                  style={{color: '#000', fontSize: 25}}
                />
              }
              textStyle={{color: '#000'}}
            >
              {types.map(type => (
                <Picker.Item key={type} label={type} value={type} />
              ))}
            </Picker>
          </View>
          {showOther ? (
            <View style={{marginBottom: 10, height: 30}}>
              <Item floatingLabel>
                <Label>Type of meditation</Label>
                <Input
                  style={{marginTop: 5}}
                  onChangeText={text => setOtherType(text)}
                />
              </Item>
            </View>
          ) : null}
        </View>
      </TrackingScreen>
    </KeyboardAvoidingView>
  );
};
export default MindfulnessTracking;
