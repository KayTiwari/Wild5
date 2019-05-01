import React, {Component} from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button, ModButton } from '../components/common'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';


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
        HERO: 0
    }
    // componentWillMount(){
    //     firebase.initializeApp({
    //         apiKey: "AIzaSyC93k0KGpd8myVQxCTgWPw6Qk9NzNA6b_o",
    //         authDomain: "wild5-5ca8b.firebaseapp.com",
    //         databaseURL: "https://wild5-5ca8b.firebaseio.com",
    //         projectId: "wild5-5ca8b",
    //         storageBucket: "wild5-5ca8b.appspot.com",
    //         messagingSenderId: "714885268112"
    //       })
    // }

    submitForm(){
        let { exercise, mindfulness, sleep, connectedness, nutrition, HERO } = this.state;
        firebase.database().ref('WellnessTrackingForm/001').set({
            state
        }).then((data)=>{
            //success callback
            console.log('data has been sent successfully' , data)
            Actions.edroadmap();
        }).catch((error)=>{
            //error callback
            console.log('error occurred' , error)
            Actions.exercise1();
        })
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
                    marginBottom: 200,
                    textAlign: 'center',
                    color: 'white'}}>Did I exercise today following the FID principles?</Text>

                    <RadioForm
                    radio_props={radio_props}
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
                    marginBottom: 200,
                    textAlign: 'center',
                    color: 'white'}}>Did I mindfully meditate at least 10 mnutes today?</Text>

                    <RadioForm
                    radio_props={radio_props}
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
                    marginBottom: 200,
                    textAlign: 'center',
                    color: 'white'}}>Did I implement 4 or more of the 6 sleep hygiene practices?</Text>

                    <RadioForm
                    radio_props={radio_props}
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
                    marginBottom: 200,
                    textAlign: 'center',
                    color: 'white'}}>Did I socially connect with at least 2 people today?</Text>

                    <RadioForm
                    radio_props={radio_props}
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
                    marginBottom: 100,
                    textAlign: 'center',
                    color: 'white'}}>Did I log my meals, snacks, and beverages, including alcohol today?</Text>

                    <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#b9702c'}
                    animation={true}
                    onPress={(value) => {this.setState({nutrition:value})}}
                    />
                </View>

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
                    color: 'white'
                    }}>HERO</Text>
                    <Text style={{
                    fontSize: 40,
                    padding: 15,
                    marginBottom: 200,
                    textAlign: 'center',
                    color: 'white'}}>Did I complete my HERO exercises today?</Text>

                    <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'white'}
                    animation={true}
                    onPress={(value) => {this.setState({HERO:value})}}
                    />
                </View>

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
                    color: 'white'}}>Your input today will help with your Wellness tomorrow</Text>

                <ModButton onPress={this.submitForm} label="Submit">
                    Submit
                </ModButton>
                </View>
            </ScrollView>
        )
    }
}

export default TrackingForm;