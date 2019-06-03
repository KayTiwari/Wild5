import React, { Component } from 'react'
import { ScrollView, View, Dimensions } from 'react-native'


const screenheight = Dimensions.get('window').height;
class MindfulnessTracking extends Component {
    state = {

    }

    submitForm(){
        console.log(this.state);
        const { type, duration, intensity, user, date } = this.state;
        firebase.database().ref(`Surveys/${user}/${date}`).update({
            Extype: type,
            Exduration: duration,
            Exintensity: intensity
          });
          Actions.edroadmap();
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
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date+' '+time;
                    this.setState({
                        date: dateTime
                    })
        }

    render() {
        return (
            <View>

            </View>
        )
    }
}
export default MindfulnessTracking