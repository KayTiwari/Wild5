import React, {Component} from 'react';
import { View, Dimensions } from 'react-native'
import { Text, Icon } from 'native-base'
import { withAuthProvider } from '../../context/authcontext';
// import console = require('console');

// Average ex duration -> Avg
// longest time exercised -> Math.max
// favorite exercise -> Comparison w/ counter?
// Average intensity -> Comparison w/ counter

const screenheight = Dimensions.get('window').height;

class ExerciseStats extends Component{
    state = {
        avgDuration: 0,
        longestTime: 0,
        favEx: '',
        avgIntesity: ''
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
        this.avgDuration(data);
        this.longestTime(data);
        this.favExercise(data);
    }

    avgDuration = (data) => {
        let timer = 0;
        for(let i = 0; i < data.length; i++){
            console.log(data[i])
            if (data[i].Exduration){
            timer += data[i].Exduration
            }
        }
        console.log(timer)
        timer /= data.length;
        console.log(timer)
        this.setState({
            avgDuration: timer.toFixed(2)
        })
        console.log(this.state);
    }

    longestTime = (data) => {
        let time = 0;
        for (let i = 0; i<data.length; i++){
            if (data[i].Exduration > time){
                time = data[i].Exduration
            }
        }
        this.setState({
            longestTime: time
        })
    }

    favExercise = (data) => {
        let mf = 1;
        let m = 0;
        var final;
        let newdata = data.map(data => data.Extype);
        console.log(newdata);
        for (let i = 0; i < newdata.length; i++){
            for(let k = 0; k < newdata.length; k++){
                if (newdata[i] === newdata[k]){
                    m++;
                    if (mf < m){
                        mf = m;
                        final = newdata[i]
                    }
                }
            }
            m=0;
        }
        this.setState({
            favEx: final
        })
    }

    render(){
        return (
            <View style={{height: screenheight, backgroundColor:'white'}}>
                <View>
                    <Text style={{marginTop: '10%', fontSize: 25, fontWeight: '600', textAlign:'center'}}>Exercise Reflection</Text>
                </View>

                <View>
                    <Icon name='alarm' style={{textAlign: 'center', marginTop: '10%'}}/>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Average Exercise Duration:</Text>
                    <Text style={{marginTop: '5%', fontSize: 25, fontWeight: '600', textAlign: 'center'}}>{this.state.avgDuration}</Text>
                </View>

                <View>
                    <Icon name='stopwatch' style={{textAlign: 'center', marginTop: '10%'}}/>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign:'center'}}>Longest Time Exercised:</Text>
                    <Text style={{marginTop: '5%', fontSize: 25, fontWeight: '600', textAlign:'center'}}>{this.state.longestTime} min</Text>
                </View>

                <View>
                    <Icon name='bicycle' style={{textAlign: 'center', marginTop: '10%'}}/>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign:'center'}}>Favorite Exercise:</Text>
                    <Text style={{marginTop: '5%', fontSize: 25, fontWeight: '600', textAlign:'center'}}>{this.state.favEx}</Text>
                </View>
            </View>
        )
    }
}

export default withAuthProvider(ExerciseStats);