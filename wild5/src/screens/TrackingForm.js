// import console = require('console');
import React, {Component} from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button, ModButton } from '../components/common'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Actions } from 'react-native-router-flux';
import firebase  from 'firebase';
import VictoryChart from '../components/charts/VictoryRadarChart'
// import {withAuthProvider} from '../context/authcontext';



var radio_props = [
    {label: 'No', value: 0 },
    {label: 'Yes', value: 1 },
  ];
class TrackingForm extends Component{

    state = {
        exercise: 0,
        mindfulness: 0,
        sleep: 0,
        connectedness: 0,
        nutrition: 0,
        user: 'usergoeshere',
        date: 'not today!',
        show: false
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

    submitForm(){
        console.log(this.state);
        const { exercise, mindfulness, sleep, connectedness, nutrition, user, date } = this.state;
        firebase.database().ref(`WellnessTrackingForm/${user}`).push({
            exercise: exercise,
            mindfulness: mindfulness,
            sleep: sleep,
            connectedness: connectedness,
            nutrition: nutrition,
            DateTaken: date
          });
          Actions.edroadmap();
        }
    

    render(){
        let screenwidth = Dimensions.get('window').width;
        let screenheight = Dimensions.get('window').height;
        return (
            <ScrollView pagingEnabled={true} horizontal={true}>
            <View style={{
                    backgroundColor: '#333',
                    flex: 1,
                    height: screenheight,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 40,
                    padding: 15,
                    textAlign: 'center',
                    color: 'white'}}>Welcome!</Text>
                <Text style={{
                    fontSize: 30,
                    padding: 50,
                    textAlign: 'center',
                    marginBottom: 150,
                    color: 'white'
                    }}>Wellness Tracking Form</Text>
                </View>

                <View style={{
                    backgroundColor: '#7ac142',
                    flex: 1,
                    height: screenheight,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 30,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Exercise</Text>
                    <Text style={{
                    fontSize: 40,
                    padding: 15,
                    marginBottom: '20%',
                    textAlign: 'center',
                    color: 'white'}}>Did I exercise today following the FID principles?</Text>

                    <RadioForm
                    radio_props={[
                        {label: 'No', value: 0 },
                        {label: 'Yes', value: 1 },
                      ]}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#5a8f30'}
                    animation={true}
                    onPress={(value) => {this.setState({exercise: value})}}
                    />
                </View>

                <View style={{
                    backgroundColor: '#49b8ea',
                    flex: 1,
                    height: screenheight,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 30,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Mindfulness</Text>
                    <Text style={{
                    fontSize: 40,
                    padding: 15,
                    marginBottom: '20%',
                    textAlign: 'center',
                    color: 'white'}}>Did I mindfully meditate at least 10 minutes today?</Text>

                    <RadioForm
                    radio_props={[
                        {label: 'No', value: 0 },
                        {label: 'Yes', value: 2 },
                      ]}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#35879d'}
                    animation={true}
                    onPress={(value) => {this.setState({mindfulness:value})}}
                    />
                </View>

                <View style={{
                    backgroundColor: '#ba3992',
                    flex: 1,
                    height: screenheight,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 30,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Sleep</Text>
                    <Text style={{
                    fontSize: 40,
                    padding: 15,
                    marginBottom: '20%',
                    textAlign: 'center',
                    color: 'white'}}>Did I implement 4 or more of the 6 sleep hygiene practices?</Text>

                    <RadioForm
                    radio_props={[
                        {label: 'No', value: 0 },
                        {label: 'Yes', value: 3 },
                      ]}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#8e2762'}
                    animation={true}
                    onPress={(value) => {this.setState({sleep:value})}}
                    />
                </View>

                <View style={{
                    backgroundColor: '#ed3833',
                    flex: 1,
                    height: screenheight,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 30,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Connectedness</Text>
                    <Text style={{
                    fontSize: 40,
                    padding: 15,
                    marginBottom: '20%',
                    textAlign: 'center',
                    color: 'white'}}>Did I socially connect with at least 2 people today?</Text>

                    <RadioForm
                    radio_props={[
                        {label: 'No', value: 0 },
                        {label: 'Yes', value: 4 },
                      ]}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#b32824'}
                    animation={true}
                    onPress={(value) => {this.setState({connectedness:value})}}
                    />
                </View>

                <View style={{
                    backgroundColor: '#f3983e',
                    flex: 1,
                    height: screenheight,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 30,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Nutrition</Text>
                    <Text style={{
                    fontSize: 40,
                    padding: 15,
                    marginBottom: '20%',
                    textAlign: 'center',
                    color: 'white'}}>Did I log my meals, snacks, and beverages, including alcohol today?</Text>

                    <RadioForm
                    radio_props={[
                        {label: 'No', value: 0 },
                        {label: 'Yes', value: 5 },
                      ]}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#b9702c'}
                    animation={true}
                    onPress={(value) => {this.setState({nutrition:value})}}
                    />
                </View>

                <ScrollView>
                <View style={{
                    backgroundColor: '#333',
                    flex: 1,
                    height: screenheight,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 30,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white',
                    marginBottom:'0%'
                    }}>Here is a graphic of your responses today.</Text>
                <ModButton label="Show" onPress={() => this.setState({show: true})} />
                <View style={{marginBottom: '50%'}}>{this.state.show ? <VictoryChart exercise={this.state.exercise} mindfulness={this.state.mindfulness} sleep={this.state.sleep} social={this.state.connectedness} nutrition={this.state.nutrition}/> : null}</View>
                </View>
                </ScrollView>

                <View style={{
                    backgroundColor: 'gold',
                    flex: 1,
                    height: screenheight,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 40,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Thanks</Text>
                    <Text style={{
                    fontSize: 30,
                    padding: 15,
                    marginBottom: 150,
                    textAlign: 'center',
                    color: 'white'}}>Your input today will help with your Wellness tomorrow.</Text>

                <ModButton onPress={this.submitForm.bind(this)} label="Submit">
                    Submit
                </ModButton>
                </View>
            </ScrollView>
        )
    }
}

export default TrackingForm;