import React, { Component } from 'react'
import { ScrollView, View, Dimensions } from 'react-native'
import { Item, Label, Text, Content, ListItem, CheckBox, Body, Container, Header } from 'native-base'
import { ModButton } from '../../components/common'
import firebase from 'firebase'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Actions } from 'react-native-router-flux';

const screenheight = Dimensions.get('window').height;
class SocialTracking extends Component {
    state = {
        friendcall: false,
        friendinperson: false,
        familycall: false,
        familyinperson: false
    }

    checkBox = (type) => {
        if (type === 'fc') {
            this.setState({
                friendcall: !this.state.friendcall
            })
        } else if (type === 'fip') {
            this.setState({
                friendinperson: !this.state.friendinperson
            })
        } else if (type === 'famc') {
            this.setState({
                familycall: !this.state.familycall
            })
        } else if (type === 'famip') {
            this.setState({
                familyinperson: !this.state.familyinperson
            })
        }
    }

    submitForm(){
        // console.log(this.state);
        const {  friendcall, friendinperson, familycall, familyinperson, user, date } = this.state;
        firebase.database().ref(`Surveys/${user}/${date}`).update({
            socfriendcall: friendcall,
            socfriendinperson: friendinperson,
            socfamilycall: familycall,
            socfamilyinperson: familyinperson
          });
          Actions.landing();
        }

    componentDidMount(){
        var user = firebase.auth().currentUser;
            if (user) {
                var res = user.email.split(".");
                var userEm = res[0].toString();
                this.setState({
                    user: userEm
                })
            } else {
                console.log('noperz')
            }
                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var dateTime = date;
                    this.setState({
                        date: dateTime
                    })
        }


    render() {
        return (
            <Container>
                <Text style={{fontSize: 30, textAlign: 'center', marginTop: '20%', marginBottom:'20%', fontWeight: '600'}}>Track your <Text style={{color: 'red', fontSize: 30, fontWeight: '600'}}>Social</Text></Text>
        <Content>
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: '10%', marginBottom:'10%', fontWeight: '600'}}>Which social practices did you complete?</Text>
          <ListItem onPress={() => this.checkBox('fc')}>
            <CheckBox color='red' checked={this.state.friendcall} onPress={() => this.checkBox('fc')}/>
            <Body>
              <Text>Called Friend</Text>
            </Body>
          </ListItem>
          <ListItem onPress={() => this.checkBox('fip')}>
            <CheckBox color='green' checked={this.state.friendinperson} onPress={() => this.checkBox('fip')}/>
            <Body>
              <Text>Met Friend in person</Text>
            </Body>
          </ListItem>
          <ListItem onPress={() => this.checkBox('famc')}>
            <CheckBox color='blue' checked={this.state.familycall} onPress={() => this.checkBox('famc')}/>
            <Body>
              <Text>Called Family</Text>
            </Body>
          </ListItem>
          <ListItem onPress={() => this.checkBox('famip')}>
            <CheckBox color='orange' checked={this.state.familyinperson} onPress={() => this.checkBox('famip')}/>
            <Body>
              <Text>Met Family in person</Text>
            </Body>
          </ListItem>
          <ModButton style={{alignSelf: 'center', textAlign: 'center'}} color={'black'} onPress={() => this.submitForm()} label="Submit">
                    Submit
                </ModButton>
        </Content>
      </Container>
        )
    }
}
export default SocialTracking