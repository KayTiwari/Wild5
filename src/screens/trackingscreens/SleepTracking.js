import React from 'react';
import {View, Alert} from 'react-native';
import {Text, Content, ListItem, CheckBox, Body, Container} from 'native-base';
import firebase from 'react-native-firebase';
import RadioForm from 'react-native-simple-radio-button';
import {Actions} from 'react-native-router-flux';
import sleepTrackingImage from '../../images/sleeptracking.jpg';
import {TrackingScreen} from './TrackingScreen';
import {scopeRefByUserAndDate} from '../../utils/firebase';
import {sleepColor} from '../../components/common/colors'

const SleepTracking = () => {
  const [
    didImplementSleepPractices,
    setDidImplementSleepPractices,
  ] = React.useState(true);

  const [noElectronics, setNoElectronics] = React.useState(false);
  const [sleepMask, setSleepMask] = React.useState(false);
  const [regularTime, setRegularTime] = React.useState(false);
  const [noNapping, setNoNapping] = React.useState(false);
  const [warmBath, setWarmBath] = React.useState(false);
  const [noCaffeine, setNoCaffeine] = React.useState(false);

  const [
    toggleNoElectronics,
    toggleSleepMask,
    toggleRegularTime,
    toggleNoNapping,
    toggleWarmBath,
    toggleNoCaffeine,
  ] = [
    [noElectronics, setNoElectronics],
    [sleepMask, setSleepMask],
    [regularTime, setRegularTime],
    [noNapping, setNoNapping],
    [warmBath, setWarmBath],
    [noCaffeine, setNoCaffeine],
  ].map(([value, updater]) => () => updater(!value));

  const submitForm = React.useCallback(async () => {
    const sleepRef = scopeRefByUserAndDate('Surveys', 'sleep');

    await firebase
      .database()
      .ref(sleepRef)
      .update({
        didImplementSleepPractices,
        noElectronics,
        sleepMask,
        regularTime,
        noNapping,
        warmBath,
        noCaffeine,
      });

    Alert.alert('Success!', 'Your sleep for today has been recorded.', [
      {text: 'OK', onPress: Actions.landing()},
    ]);
  }, [
    didImplementSleepPractices,
    noElectronics,
    sleepMask,
    regularTime,
    noNapping,
    warmBath,
    noCaffeine,
  ]);

  return (
    <Container>
      <TrackingScreen
        backgroundImage={sleepTrackingImage}
        color={sleepColor}
        activityTitle="Sleep"
        onSave={submitForm}
      >
        <View
          style={{
            backgroundColor: sleepColor,
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
            Program Expectations
          </Text>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
            Implement 4 or more of the 6 sleep hygiene practices each day for 30
            days
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text
            style={{
              marginBottom: '5%',
              fontSize: 20,
              textAlign: 'center',
              fontWeight: '600',
            }}
          >
            Did I Implement 4 or More of the 6 Sleep Hygiene Practices?
          </Text>
          <RadioForm
            radio_props={[
              {label: 'Yes', value: true},
              {label: 'No', value: false},
            ]}
            initial={false}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={sleepColor}
            selectedButtonColor={sleepColor}
            labelStyle={{fontSize: 20, color: '#000'}}
            animation={true}
            onPress={value => setDidImplementSleepPractices(value)}
          />
        </View>
        <Content>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginTop: '10%',
              marginBottom: '10%',
              fontWeight: '600',
            }}
          >
            Which sleep hygiene practices did you implement today?
          </Text>
          <ListItem onPress={toggleNoElectronics}>
            <CheckBox
              color={sleepColor}
              checked={noElectronics}
              onPress={toggleNoElectronics}
            />
            <Body>
              <Text>No Electronics 90 minutes before bed</Text>
            </Body>
          </ListItem>
          <ListItem onPress={toggleSleepMask}>
            <CheckBox
              onPress={toggleSleepMask}
              color={sleepColor}
              checked={sleepMask}
            />
            <Body>
              <Text>Sleep mask or blackout shades</Text>
            </Body>
          </ListItem>
          <ListItem onPress={toggleRegularTime}>
            <CheckBox
              onPress={toggleRegularTime}
              color={sleepColor}
              checked={regularTime}
            />
            <Body>
              <Text>Regular bedtime</Text>
            </Body>
          </ListItem>
          <ListItem onPress={toggleNoNapping}>
            <CheckBox
              onPress={toggleNoNapping}
              color={sleepColor}
              checked={noNapping}
            />
            <Body>
              <Text>No Napping</Text>
            </Body>
          </ListItem>
          <ListItem onPress={toggleWarmBath}>
            <CheckBox
              onPress={toggleWarmBath}
              color={sleepColor}
              checked={warmBath}
            />
            <Body>
              <Text>Warm bath/shower prior to bed</Text>
            </Body>
          </ListItem>
          <ListItem onPress={toggleNoCaffeine}>
            <CheckBox
              onPress={toggleNoCaffeine}
              color={sleepColor}
              checked={noCaffeine}
            />
            <Body>
              <Text>Avoid caffeine 10 hours before bed</Text>
            </Body>
          </ListItem>
        </Content>
      </TrackingScreen>
    </Container>
  );
};
export default SleepTracking;
