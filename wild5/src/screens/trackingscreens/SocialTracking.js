import React, {Component} from 'react';
import {Text, Content, ListItem, CheckBox, Body, Container} from 'native-base';
import {Alert} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {ModButton} from '../../components/common';
import socialtracking from '../../images/socialtracking.jpg';
import {BlurredBackgroundImage} from '../../components/common/BlurredBackgroundImage';
import {scopeRefByUserAndDate} from '../../utils/firebase';

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
          style={{paddingHorizontal: 10}}
          source={socialtracking}
          blurRadius={20}
        >
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              marginTop: '20%',
              marginBottom: '20%',
              fontWeight: '600',
            }}
          >
            Track your{' '}
            <Text style={{color: 'red', fontSize: 30, fontWeight: '600'}}>
              Social
            </Text>
          </Text>
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
              Which social practices did you complete?
            </Text>

            <CheckBoxItem
              checked={this.state.calledFriend}
              onPress={() => this.toggleCheckbox(CALLED_FRIEND)}
              color="red"
            >
              Called Friend
            </CheckBoxItem>

            <CheckBoxItem
              checked={this.state.metFriendInPerson}
              onPress={() => this.toggleCheckbox(MET_FRIEND_IN_PERSON)}
              color="green"
            >
              Met Friend in person
            </CheckBoxItem>

            <CheckBoxItem
              checked={this.state.calledFamily}
              onPress={() => this.toggleCheckbox(CALLED_FAMILY)}
              color="blue"
            >
              Called Family
            </CheckBoxItem>

            <CheckBoxItem
              checked={this.state.metFamilyInPerson}
              onPress={() => this.toggleCheckbox(MET_FAMILY_IN_PERSON)}
              color="orange"
            >
              Met Family in person
            </CheckBoxItem>

            <ModButton
              style={{alignSelf: 'center', textAlign: 'center'}}
              color={'black'}
              onPress={this.submitForm}
              label="Submit"
            />
          </Content>
        </BlurredBackgroundImage>
      </Container>
    );
  }
}

function CheckBoxItem({onPress, children, ...checkboxProps}) {
  return (
    <ListItem onPress={onPress}>
      <CheckBox {...checkboxProps} onPress={onPress} />
      <Body>
        <Text>{children}</Text>
      </Body>
    </ListItem>
  );
}

export default SocialTracking;
