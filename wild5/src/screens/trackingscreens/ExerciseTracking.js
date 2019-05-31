import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import { withProvider } from '../../context/context'
import { ModButton } from '../../components/common'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Text } from 'native-base'
import { Dropdown } from 'react-native-material-dropdown';
import NumericInput from 'react-native-numeric-input'
import firebase from 'firebase'
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
        date: '',
    }
    

    submitForm(){
        console.log(this.state);
        console.log(this.props)
        // const {type, duration, intensity} = this.state;
        // firebase.database().ref(`WellnessTrackingForm/${user}`).push({
        //     exercise: exercise,
        //     mindfulness: mindfulness,
        //     sleep: sleep,
        //     connectedness: connectedness,
        //     nutrition: nutrition,
        //     DateTaken: date
        //   });
        }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log(user.email)
            } else {
              console.log('no')
            }
          });
        var user = firebase.auth().currentUser;
            if (user) {
                var res = user.email.split(".");
                var userEm = res[0].toString();
                this.setState({
                    user: userEm
                })
            } else {
                console.log('nopez')
            }
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
                this.setState({
                    date: dateTime
                })
                console.log(this.state)
    }


    render() {
        return (
            <View style={{backgroundColor: 'white', height: screenheight}}>
                <Text style={{fontSize: 30, textAlign: 'center', marginTop: '20%', marginBottom:'20%', fontWeight: '600'}}>Track your <Text style={{color: 'green', fontSize: 30, fontWeight: '600'}}>Exercise</Text></Text>

                <View style={{ marginLeft: '5%', marginRight: '5%'}}> 
                    <Dropdown baseColor='green' label='Type of Exercise' data={typedata} onChangeText={(text) => this.setState({type: text})} />
                </View>

                <View style={{alignSelf:'center', marginTop: '20%'}}>
                <Text>How many minutes did you exercise?</Text>
                <NumericInput 
                    value={this.state.value} 
                    onChange={value => this.setState({duration: value})} 
                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                    totalWidth={240} 
                    totalHeight={50} 
                    iconSize={25}
                    step={1}
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
                <ModButton color={'black'} onPress={() => console.log(this.state)} label="Submit">
                    Submit
                </ModButton>
                </View>
            </View>
        )
    }
}
export default withProvider(ExerciseTracking)