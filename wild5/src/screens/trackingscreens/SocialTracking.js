import React, {Component} from 'react';
import {Text, Content, ListItem, CheckBox, Body, Container} from 'native-base';
import {ModButton} from '../../components/common';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import socialtracking from '../../images/socialtracking.jpg';
import {BlurredBackgroundImage} from '../../components/common/BlurredBackgroundImage';

class SocialTracking extends Component {
  state = {
    calledFriend: false,
    metFriendInPerson: false,
    calledFamily: false,
    metFamilyInPerson: false,
  };

  checkBox = type => {
    if (type === 'fc') {
      this.setState({
        calledFriend: !this.state.calledFriend,
      });
    } else if (type === 'fip') {
      this.setState({
        metFriendInPerson: !this.state.metFriendInPerson,
      });
    } else if (type === 'famc') {
      this.setState({
        calledFamily: !this.state.calledFamily,
      });
    } else if (type === 'famip') {
      this.setState({
        metFamilyInPerson: !this.state.metFamilyInPerson,
      });
    }
  };

  submitForm() {
    const {
      calledFriend,
      metFriendInPerson,
      calledFamily,
      metFamilyInPerson,
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
            <ListItem onPress={() => this.checkBox('fc')}>
              <CheckBox
                color="red"
                checked={this.state.calledFriend}
                onPress={() => this.checkBox('fc')}
              />
              <Body>
                <Text>Called Friend</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.checkBox('fip')}>
              <CheckBox
                color="green"
                checked={this.state.metFriendInPerson}
                onPress={() => this.checkBox('fip')}
              />
              <Body>
                <Text>Met Friend in person</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.checkBox('famc')}>
              <CheckBox
                color="blue"
                checked={this.state.calledFamily}
                onPress={() => this.checkBox('famc')}
              />
              <Body>
                <Text>Called Family</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.checkBox('famip')}>
              <CheckBox
                color="orange"
                checked={this.state.metFamilyInPerson}
                onPress={() => this.checkBox('famip')}
              />
              <Body>
                <Text>Met Family in person</Text>
              </Body>
            </ListItem>
            <ModButton
              style={{alignSelf: 'center', textAlign: 'center'}}
              color={'black'}
              onPress={() => this.submitForm()}
              label="Submit"
            >
              Submit
            </ModButton>
          </Content>
        </BlurredBackgroundImage>
      </Container>
    );
  }
}
export default SocialTracking;
