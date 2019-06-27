import React, { Component } from 'react'
import { View, Dimensions, ImageBackground } from 'react-native'
import { ModButton } from '../../components/common'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Text, Input } from 'native-base'
import { Dropdown } from 'react-native-material-dropdown';
import NumericInput from 'react-native-numeric-input'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import exbackground from '../../images/exercisetracking.jpg';
// import console = require('console');

let typedata = [{
    value: 'Walking'
}, {
    value: 'Jogging'
}, {
    value: 'Biking'
}, {
    value: 'Playing Sports'
}, {
    value: 'Swimming'
}, {
    value: 'Weight Lifting'
}, {
    value: 'Aerobics'
}, {
    value: 'Water Aerobics'
}, {
    value: 'Other'
}
]
const screenheight = Dimensions.get('window').height;
class ExerciseTracking extends Component {
    state = {
        type: '',
        duration: 0,
        intensity: '',
        user: '',
        date: ''
    }
    

    submitForm(){
        console.log(this.state);
        const { type, duration, intensity, user, date } = this.state;
        firebase.database().ref(`Surveys/${user}/${date}`).update({
            Extype: type,
            Exduration: duration,
            Exintensity: intensity
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
            <View style={{backgroundColor: 'white', height: screenheight}}>
            <ImageBackground source={exbackground} style={{height: '100%', width: '100%'}}>
                <Text style={{fontSize: 30, textAlign: 'center', marginTop: '10%', marginBottom:'20%', fontWeight: '600'}}>Track your <Text style={{color: 'green', fontSize: 30, fontWeight: '600'}}>Exercise</Text></Text>

                <View style={{ marginLeft: '5%', marginRight: '5%'}}> 
                    <Dropdown baseColor='green' label='Type of Exercise' data={typedata} onChangeText={(text) => this.setState({type: text})} />
                </View>
                <View>
                    {this.state.type === 'Other' ? <Input floatinglabel autoCorrect={false} onChangeText={(text) => this.setState({user: text})}/>: null}
                </View>

                <View style={{alignSelf:'center'}}>
                <Text style={{marginBottom: '5%'}}>How many minutes did you exercise?</Text>
                <NumericInput 
                    value={this.state.value} 
                    onChange={value => this.setState({duration: value})} 
                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                    totalWidth={240} 
                    totalHeight={50} 
                    iconSize={25}
                    step={5}
                    minValue={0}
                    valueType='real'
                    rounded 
                    textColor='darkolivegreen' 
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='darkgreen' 
                    leftButtonBackgroundColor='forestgreen'/>
                </View>

                <View style={{alignSelf: 'center', marginTop: '10%', marginBottom: '10%'}}>
                    <Text style={{marginBottom: '5%', fontSize:25, fontWeight: '600'}}>Intensity of exercise</Text>
                    <RadioForm
                    radio_props={[
                        {label: 'Low', value: 'low' },
                        {label: 'Moderate', value: 'moderate' },
                        {label: 'High', value: 'high' },
                      ]}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#5a8f30'}
                    animation={true}
                    onPress={(value) => {this.setState({intensity: value})}}
                    />
                </View>

                <View style={{alignSelf:'center'}}>
                <ModButton color={'black'} onPress={() => this.submitForm()} label="Submit">
                    Submit
                </ModButton>
                </View>
                </ImageBackground>
            </View>
        )
    }
}
export default ExerciseTracking