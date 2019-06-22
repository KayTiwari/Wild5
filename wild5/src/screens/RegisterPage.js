import React, {Component} from 'react';
import { View, Dimensions, ImageBackground, ScrollView } from 'react-native';
import { Text, Item, Icon, Input, DatePicker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {withAuthProvider} from '../context/authcontext';
import abstractimg from '../images/abstract2.jpeg';


const screenheight = Dimensions.get('window').height;
class RegisterPage extends Component{
    state = {

    }
    setDate = (newDate) => {
        this.setState({ chosenDate: newDate });
      }

    componentDidMount(){
        var today = new Date();
            var year = today.getFullYear()
            var month = (today.getMonth()+1)
            var day = today.getDate();
                this.setState({
                    year,
                    month,
                    day
                })
    }

    render(){
        return(
            <ScrollView>
            <View style={{height: screenheight}}>
            <ImageBackground source={abstractimg} style={{height: screenheight, width: '100%', resizeMode: 'cover'}}>
            
            <View style={{height: screenheight, backgroundColor:'white', marginLeft: '5%', marginRight: '5%', marginTop: '10%'}}>

            <View><Text style={{fontSize: 15, fontWeight: '600', textAlign:'center', marginTop:'5%'}}>Register for the Wild 5 Wellness App</Text></View>

            <View style={{marginTop:'10%', marginLeft:'5%', marginRight:'5%'}}><Item><Icon active name='mail' /><Input placeholder='Email Address'/></Item></View>
            <View style={{marginTop:'10%', marginLeft:'5%', marginRight:'5%'}}><Item><Icon active name='key' /><Input secureTextEntry placeholder='Desired Password'/></Item></View>

            <View><Text style={{fontSize: 15, fontWeight: '600', textAlign:'center', marginTop:'10%'}}>Tell us more about yourself</Text></View>
            <View style={{marginTop:'5%', marginLeft:'5%', marginRight:'5%'}}><Item><Icon active name='contact' /><Input spellCheck={false} autoCorrect={false} placeholder='Full name'/></Item></View>
            <View><Text style={{fontSize: 15, fontWeight: '600', textAlign:'center', marginTop:'10%'}}>Date Of Birth</Text></View>
            <DatePicker
            // defaultDate={new Date(this.state.year, this.state.month, this.state.day)}
            // maximumDate={new Date(this.state.year, this.state.month, this.state.day)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            </View>
            <View><Text style={{fontSize: 15, fontWeight: '600', textAlign:'center', marginTop:'5%'}}>{this.state.chosenDate}</Text></View>

            </ImageBackground>
            </View>
            </ScrollView>
        )
    }
}

export default RegisterPage;