import React, {Component} from 'react';
import {View} from 'react-native'
import {Text, ListItem, CheckBox, Body} from 'native-base';
import {Alert, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
import {scopeRefByUserAndDate} from '../../utils/firebase';
import {TrackingScreen} from './TrackingScreen';
import RadioForm from "react-native-simple-radio-button";
import {socialColor} from '../../components/common/colors'

const CALLED_FRIEND = 'calledFriend';
const MET_FRIEND_IN_PERSON = 'metFriendInPerson';
const CALLED_FAMILY = 'calledFamily';
const MET_FAMILY_IN_PERSON = 'metFamilyInPerson';

class SocialTracking extends Component {
  state = {
    [CALLED_FRIEND]: false,
    [MET_FRIEND_IN_PERSON]: false,
    [CALLED_FAMILY]: false,
    [MET_FAMILY_IN_PERSON]: false,
    didSociallyConnect: false,
  };

  toggleCheckbox = stateKey => {
    this.setState({[stateKey]: !this.state[stateKey]});
  };

  submitForm = async () => {
    const {
      [CALLED_FRIEND]: calledFriend,
      [MET_FRIEND_IN_PERSON]: metFriendInPerson,
      [CALLED_FAMILY]: calledFamily,
      [MET_FAMILY_IN_PERSON]: metFamilyInPerson,
      didSociallyConnect,
    } = this.state;

    const socialRef = scopeRefByUserAndDate('Surveys', 'social');

    await firebase
      .database()
      .ref(socialRef)
      .update({
        didSociallyConnect,
        calledFriend,
        metFriendInPerson,
        calledFamily,
        metFamilyInPerson,
      });

    // Add error handling here...

    Alert.alert(
      "Success!",
      "Your social interactions for today have been recorded.",
      [{text: "OK", onPress: Actions.landing}]
    );
  };

  render() {
    return (
      <TrackingScreen
        backgroundImage={{uri: "social-tracking-bg"}}
        color={socialColor}
        activityTitle="Social Connectedness"
        onSave={this.submitForm}
      >
        <View
          style={{
            backgroundColor: socialColor,
            width: "85%",
            alignSelf: "center",
            height: 90,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              alignSelf: "center",
              fontWeight: "700",
            }}
          >
            Practices
          </Text>
          <Text style={{fontSize: 18, color: "white", textAlign: "center"}}>
            Meet or call a minimum of two friends or family each day for 30
            days.
          </Text>
        </View>
        <View style={{alignItems: "center", marginTop: 10}}>
          <Text
            style={{
              marginBottom: "5%",
              fontSize: 20,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Did I Socially Connect With at Least 2 People Today
          </Text>
          <RadioForm
            radio_props={[{label: "Yes", value: 1}, {label: "No", value: 0}]}
            initial={false}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={socialColor}
            selectedButtonColor={socialColor}
            labelStyle={{fontSize: 20, color: "#000"}}
            animation={true}
            onPress={value => {
              this.setState({didSociallyConnect: Boolean(value)});
            }}
          />
        </View>
        <Text style={styles.subtitle} numberOfLines={1}>
          What social contacts did you make?
        </Text>

        <CheckBoxItem
          checked={this.state.calledFriend}
          onPress={() => this.toggleCheckbox(CALLED_FRIEND)}
        >
          Called Friend
        </CheckBoxItem>

        <CheckBoxItem
          checked={this.state.metFriendInPerson}
          onPress={() => this.toggleCheckbox(MET_FRIEND_IN_PERSON)}
        >
          Met Friend in Person
        </CheckBoxItem>

        <CheckBoxItem
          checked={this.state.calledFamily}
          onPress={() => this.toggleCheckbox(CALLED_FAMILY)}
        >
          Called Family
        </CheckBoxItem>

        <CheckBoxItem
          checked={this.state.metFamilyInPerson}
          onPress={() => this.toggleCheckbox(MET_FAMILY_IN_PERSON)}
        >
          Met Family in Person
        </CheckBoxItem>
      </TrackingScreen>
    );
  }
}

const styles = StyleSheet.create({
  subtitle: {
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '10%',
    fontWeight: '600',
  },
});

function CheckBoxItem({onPress, children, ...checkboxProps}) {
  return (
    <ListItem onPress={onPress}>
      <CheckBox {...checkboxProps} onPress={onPress} color={socialColor} />
      <Body>
        <Text>{children}</Text>
      </Body>
    </ListItem>
  );
}

export default SocialTracking;
