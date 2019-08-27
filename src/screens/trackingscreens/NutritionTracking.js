import React from 'react';
import {ScrollView, View, SafeAreaView, Alert} from 'react-native';
import {Text, ListItem, CheckBox, Body} from 'native-base';
import firebase from 'react-native-firebase';
import RadioForm from 'react-native-simple-radio-button';
import {Actions} from 'react-native-router-flux';
import nutriTrackingImage from '../../images/nutritracking.jpg';
import {TrackingScreen} from './TrackingScreen';
import {scopeRefByUserAndDate} from '../../utils/firebase';

const NutritionTracking = () => {
  const [loggedNutritionToday, setLoggedNutritionToday] = React.useState(true);

  const [
    implementedMINDDietPrinciples,
    setImplementedMINDDietPrinciples,
  ] = React.useState(true);

  const [breakfastMeditation, setBreakfastMeditation] = React.useState(false);
  const [lunchMeditation, setLunchMeditation] = React.useState(false);
  const [dinnerMeditation, setDinnerMeditation] = React.useState(false);

  const [
    toggleBreakfastMeditation,
    toggleLunchMeditation,
    toggleDinnerMeditation,
  ] = [
    [breakfastMeditation, setBreakfastMeditation],
    [lunchMeditation, setLunchMeditation],
    [dinnerMeditation, setDinnerMeditation],
  ].map(([value, updater]) => () => updater(!value));

  const submitForm = React.useCallback(async () => {
    const nutritionRef = scopeRefByUserAndDate('Surveys', 'nutrition');

    await firebase
      .database()
      .ref(nutritionRef)
      .update({
        loggedNutritionToday,
        implementedMINDDietPrinciples,
        breakfastMeditation,
        lunchMeditation,
        dinnerMeditation,
      });

    Alert.alert('Success!', 'Your nutrition for today has been recorded.', [
      {text: 'OK', onPress: Actions.landing()},
    ]);
  }, [
    loggedNutritionToday,
    implementedMINDDietPrinciples,
    breakfastMeditation,
    lunchMeditation,
    dinnerMeditation,
  ]);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flex: 1}}>
        <TrackingScreen
          backgroundImage={nutriTrackingImage}
          color="#f89829"
          activityTitle="Nutrition"
          onSave={submitForm}
        >
          <ScrollView style={{flex: 1, padding: 30}}>
            <View
              style={{
                backgroundColor: '#f89829',
                width: '100%',
                alignSelf: 'center',
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
                Log your daily meals/snacks/beverages/alcohol each day for 30
                days, follow the MIND diet principles as closely as you can
              </Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Text
                style={{
                  color: '#000',
                  marginBottom: '5%',
                  textAlign: 'center',
                  fontWeight: '600',
                }}
              >
                Did I Log My Meals, Snacks, and Beverages, Including Alcohol
                Today?
              </Text>
              <RadioForm
                radio_props={[
                  {label: 'Yes', value: true},
                  {label: 'No', value: false},
                ]}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#f89829'}
                selectedButtonColor={'#f89829'}
                labelStyle={{fontSize: 20, color: '#000'}}
                animation={true}
                onPress={value => setLoggedNutritionToday(value)}
              />
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: '10%',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: '#000',
                  marginBottom: '5%',
                  textAlign: 'center',
                  fontWeight: '600',
                }}
              >
                Did I implement MIND diet principles?
              </Text>
              <RadioForm
                radio_props={[
                  {label: 'Yes', value: true},
                  {label: 'No', value: false},
                ]}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#f89829'}
                selectedButtonColor={'#f89829'}
                animation={true}
                onPress={value => setImplementedMINDDietPrinciples(value)}
              />
            </View>

            <View style={{marginTop: '10%'}}>
              <Text
                style={{
                  color: '#000',
                  marginBottom: '5%',
                  textAlign: 'center',
                  fontWeight: '600',
                }}
              >
                Did I practice MIND Meal Meditation?
              </Text>
              <ListItem onPress={toggleBreakfastMeditation}>
                <CheckBox
                  color="#f89829"
                  checked={breakfastMeditation}
                  onPress={toggleBreakfastMeditation}
                />
                <Body>
                  <Text>Breakfast</Text>
                </Body>
              </ListItem>
              <ListItem onPress={toggleLunchMeditation}>
                <CheckBox
                  color="#f89829"
                  checked={lunchMeditation}
                  onPress={toggleLunchMeditation}
                />
                <Body>
                  <Text>Lunch</Text>
                </Body>
              </ListItem>
              <ListItem onPress={toggleDinnerMeditation}>
                <CheckBox
                  color="#f89829"
                  checked={dinnerMeditation}
                  onPress={toggleDinnerMeditation}
                />
                <Body>
                  <Text>Dinner</Text>
                </Body>
              </ListItem>
            </View>
          </ScrollView>
        </TrackingScreen>
      </View>
    </SafeAreaView>
  );
};
export default NutritionTracking;
