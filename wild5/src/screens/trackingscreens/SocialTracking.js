import React, {Component} from 'react';
import {Text, Content, ListItem, CheckBox, Body, Container} from 'native-base';
import {Alert} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {ModButton} from '../../components/common';
import {BlurredBackgroundImage} from '../../components/common/BlurredBackgroundImage';
import {scopeRefByUserAndDate} from '../../utils/firebase';
import {Card} from '../../components/common/Card';

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
    } = this.state;

    const surveysRef = scopeRefByUserAndDate('Surveys', 'social');

    await firebase
      .database()
      .ref(surveysRef)
      .update({
        calledFriend,
        metFriendInPerson,
        calledFamily,
        metFamilyInPerson,
      });

    // Add error handling here...

    Alert.alert(
      'Success!',
      'Your social interactions for today have been recorded.',
      [{text: 'OK', onPress: Actions.landing}]
    );
  };

  render() {
    return (
      <Container>
        <BlurredBackgroundImage
          style={{padding: 20}}
          source={{uri: 'social-tracking-bg'}}
          blurRadius={20}
        >
          <Card>
            <Text
              style={{fontSize: 30, fontWeight: '600', width: '100%'}}
              adjustsFontSizeToFit
              numberOfLines={1}
            >
              <Text>
                Track your{' '}
                <Text style={{color: '#EE3322'}}>Social Connectedness</Text>
              </Text>
            </Text>
            <Content>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: '10%',
                  marginBottom: '10%',
                  fontWeight: '600',
                }}
                numberOfLines={1}
              >
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
            </Content>
            <ModButton color="#EE3322" onPress={this.submitForm} label="Save" />
          </Card>
        </BlurredBackgroundImage>
      </Container>
    );
  }
}

function CheckBoxItem({onPress, children, ...checkboxProps}) {
  return (
    <ListItem onPress={onPress}>
      <CheckBox {...checkboxProps} onPress={onPress} color="#EE3322" />
      <Body>
        <Text>{children}</Text>
      </Body>
    </ListItem>
  );
}

export default SocialTracking;
