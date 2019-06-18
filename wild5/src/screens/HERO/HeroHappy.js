import React, {Component} from 'react';
import { View, Dimensions } from 'react-native';
import { Text, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Slider } from 'react-native-elements';


const screenheight = Dimensions.get('window').height;
class HeroHappy extends Component{
    state = {
        happyval: 0
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
        const { happyval, user, date } = this.state;
        firebase.database().ref(`HERO/${user}/${date}`).update({
            happyval
          });
          Actions.heroenth();
        }

    feeling = () => {
        if (this.state.happyval === 0){
            return <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%', color:'red'}}>Not at all Happy</Text>
        } else if (this.state.happyval >= 1 && this.state.happyval <= 3){
            return <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%', color:'orange'}}>Mildly Happy</Text>
        } else if (this.state.happyval >= 4 && this.state.happyval <= 6){
            return <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%', color:'#fad859'}}>Moderately Happy</Text>
        } else if (this.state.happyval >= 7 && this.state.happyval <= 9){
            return <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%', color:'#2ecc71'}}>Highly Happy</Text>
        } else if (this.state.happyval === 10){
            return <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%', color: '#52b3d9'}}>Extremely Happy</Text>
        }
    }

    render(){
        return (
            <View style={{backgroundColor: 'white', height: screenheight}}>
                
                <View>
                    <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center', marginTop: '15%'}}>
                    Happiness
                    </Text>
                </View>

                <View>
                    <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%'}}>
                    On average, during the last 7 DAYS, how happy have you felt?
                    </Text>
                </View>

                <View style={{ flex: 1, alignItems: 'stretch', marginLeft:'5%', marginRight:'5%', marginTop:'10%'}}>
                    <Slider
                        value={this.state.value}
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        onValueChange={value => this.setState({ happyval: value })}
                    />
                    <Text style={{fontSize: 25, fontWeight: '600', textAlign: 'center', marginTop: '10%'}}>Value: {this.state.happyval}</Text>
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

export { HeroHappy };