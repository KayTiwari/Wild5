import React, {Component} from 'react';
import {Text, Content, ListItem, CheckBox, Body, Container} from 'native-base';
import {ModButton} from '../../components/common';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import socialtracking from '../../images/socialtracking.jpg';
import {BlurredBackgroundImage} from '../../components/common/BlurredBackgroundImage';

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

  submitForm() {
    const {
      [CALLED_FRIEND]: calledFriend,
      [MET_FRIEND_IN_PERSON]: metFriendInPerson,
      [CALLED_FAMILY]: calledFamily,
      [MET_FAMILY_IN_PERSON]: metFamilyInPerson,
      user,
      date,
    } = this.state;

    firebase
      .database()
      .ref(`Surveys/${user}/${date}`)
      .update({
        socfriendcall: calledFriend,
        socfriendinperson: metFriendInPerson,
        socfamilycall: calledFamily,
        socfamilyinperson: metFamilyInPerson,
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
