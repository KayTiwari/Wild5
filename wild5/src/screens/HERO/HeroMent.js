import React, {Component} from 'react';
import { View, Dimensions } from 'react-native';
import { Text, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Slider } from 'react-native-elements';


const screenheight = Dimensions.get('window').height;
class HeroMent extends Component{
    state = {
        mentval: 0
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

    submit(){
        console.log(this.state);
        const { mentval, user, date } = this.state;
        firebase.database().ref(`HERO/${user}/${date}`).update({
            mentval
          });
          Actions.heroscore();
        }

    feeling = () => {
        if (this.state.mentval === 0){
            return <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%', color:'red'}}>Not at all Good</Text>
        } else if (this.state.mentval >= 1 && this.state.mentval <= 3){
            return <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%', color:'orange'}}>Mildly Good</Text>
        } else if (this.state.mentval >= 4 && this.state.mentval <= 6){
            return <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%', color:'#fad859'}}>Moderately Good</Text>
        } else if (this.state.mentval >= 7 && this.state.mentval <= 9){
            return <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%', color:'#2ecc71'}}>Highly Good</Text>
        } else if (this.state.mentval === 10){
            return <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%', color: '#52b3d9'}}>Extremely Good</Text>
        }
    }

    render(){
        return (
            <View style={{backgroundColor: 'white', height: screenheight}}>
                
                <View>
                    <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center', marginTop: '15%', color: '#333'}}>
                    Mental Wellness
                    </Text>
                </View>

                <View>
                    <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%'}}>
                    On average, during the last 7 DAYS, how would you rate your overall mental wellness?
                    </Text>
                </View>

                <View style={{ flex: 1, alignItems: 'stretch', marginLeft:'5%', marginRight:'5%', marginTop:'10%'}}>
                    <Slider
                        value={this.state.value}
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        onValueChange={value => this.setState({ mentval: value })}
                    />
                    <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%'}}>Value: {this.state.mentval}</Text>
                    {this.feeling()}

                    <View style={{alignSelf: 'center', marginTop: '20%'}}>
                        <Button onPress={() => this.submit()} light rounded large><Text>Next</Text>
                        <Icon name='arrow-forward' />
                        </Button>
                    </View>
                </View>


            </View>
        )
    }
}

export { HeroMent };