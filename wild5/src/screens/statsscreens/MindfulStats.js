import React, {Component} from 'react';
import { View, Dimensions } from 'react-native'
import { Text, Icon } from 'native-base'
import { withAuthProvider } from '../../context/authcontext';
// import console = require('console');

//Favorite type of meditation
// most listened to MP3
// last date meditated


const screenheight = Dimensions.get('window').height;

class MindfulStats extends Component{
    state = {
        favmedi: '',
        lastday: ''
    }

    componentWillMount(){
        if (this.props.princData){
            this.calculateStats()
        }
    }
    componentDidMount(){
        if (this.props.princData){
            this.calculateStats()
        }
    }
    componentWillReceiveProps(){
        if (this.props.princData){
            this.calculateStats()
        }
        }

    calculateStats = () => {
        let data = Object.values(this.props.princData);
        console.log(data);
        this.favMeditation(data);
        this.lastDate(data);
    }

    favMeditation = (data) => {
        let newdata = data.map(data => data.mindtype);
        let m = 0;
        let mf = 1;
        let final;
        for (let i = 0; i < newdata.length; i++){
            for (let k = 0; k < newdata.length; k++){
                if (newdata[k] === newdata[i]){
                    m++;
                    if (mf < m){
                        mf = m;
                        final = newdata[i];
                    }
                }
            }
            m = 0;
            this.setState({
                favmedi: final
            })
        }
    }

    lastDate = (data) => {
        // older date < newer date
        let dates = Object.keys(this.props.princData);
        //sort dates -> find the most recent -> check for 1 in mindprac
        // new Date('dates.')
        let date = dates[0];
        for (let i = 0; i < dates.length; i++){
            if (data[i].mindprac === 1){
                console.log(date, dates[i]);
                if (dates[i] < date){
                    date = dates[i];
                    console.log(date);
            }
        }
    }
    console.log(date);
    this.setState({
        lastday: date
    })
}


    render(){
        return (
            <View style={{height: screenheight, backgroundColor:'white'}}>
                <View>
                    <Text style={{marginTop: '10%', fontSize: 25, fontWeight: '600', textAlign:'center'}}>Mindfulness Reflection</Text>
                </View>

                <View>
                    <Icon name='star-outline' style={{textAlign: 'center', marginTop: '10%'}}/>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Favorite Type of Meditation:</Text>
                    <Text style={{marginTop: '5%', fontSize: 25, fontWeight: '600', textAlign: 'center'}}>{this.state.favmedi}</Text>
                </View>

                <View>
                    <Icon name='musical-note' style={{textAlign: 'center', marginTop: '10%'}}/>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign:'center'}}>Most listened to MP3:</Text>
                    <Text style={{marginTop: '5%', fontSize: 25, fontWeight: '600', textAlign:'center'}}>A Moment Of Gratitude</Text>
                </View>
            </View>
        )
    }
}

export default withAuthProvider(MindfulStats);