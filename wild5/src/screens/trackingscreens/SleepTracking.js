import React, { Component } from 'react'
import { ScrollView, View, Dimensions } from 'react-native'
import { Item, Label, Text, Content, ListItem, CheckBox, Body, Container, Header } from 'native-base'
import { ModButton } from '../../components/common'
import firebase from 'firebase'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Actions } from 'react-native-router-flux';

const screenheight = Dimensions.get('window').height;
class SleepTracking extends Component {
    state = {
        electronics: false,
        sleepmask: false,
        regulartime: false,
        napping: false,
        warmbath: false,
        caffeine: false
    }

    submitForm(){
        // console.log(this.state);
        const {  electronics, sleepmask, regulartime, napping, warmbath, caffeine, user, date } = this.state;
        firebase.database().ref(`Surveys/${user}/${date}`).update({
            electronics: electronics,
            sleepmask: sleepmask,
            regulartime: regulartime,
            napping: napping,
            warmbath: warmbath,
            caffeine: caffeine
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
                <Text style={{fontSize: 30, textAlign: 'center', marginTop: '20%', marginBottom:'20%', fontWeight: '600'}}>Track your <Text style={{color: 'purple', fontSize: 30, fontWeight: '600'}}>Sleep</Text></Text>
        <Content>
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: '10%', marginBottom:'10%', fontWeight: '600'}}>Which sleep hygiene practices did you implement today?</Text>
          <ListItem>
            <CheckBox onPress={() => {this.setState({})}}/>
            <Body>
              <Text>No Electronics 90 minutes before bed</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox />
            <Body>
              <Text>Sleep mask or blackout shades</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox />
            <Body>
              <Text>Regular bedtime</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox />
            <Body>
              <Text>No Napping</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox />
            <Body>
              <Text>Warmm bath/shower prior to bed</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox />
            <Body>
              <Text>Avoid caffeine 10 hours before bed</Text>
            </Body>
          </ListItem>
          <ModButton color={'black'} onPress={() => this.submitForm()} label="Submit">
                    Submit
                </ModButton>
        </Content>
      </Container>
        )
    }
}
export default SleepTracking