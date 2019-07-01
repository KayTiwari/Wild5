import React, {Component} from 'react';
import { View } from 'react-native'
import { withAuthProvider } from '../../context/authcontext';

// Average ex duration -> Avg
// longest time exercised -> Math.max
// favorite exercise -> Comparison w/ counter?
// Average intensity -> Comparison w/ counter

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
        this.avgDuration(data);
        this.longestTime(data);
        this.favExercise(data);
    }

    avgDuration = (data) => {
        for(let i = 0; i < data.length; i++){
            timer += data[i].exDuration
        }
        timer /= data.length;
        this.setState({
            avgDuration: timer
        })
    }

    longestTime = (data) => {
        let time = 0;
        for (let i = 0; i<data.length; i++){
            if (data[i].exDuration > time){
                time = data[i].exDuration
            }
        }
        this.setState({
            longestTime: time
        })
    }

    favExercise = (data) => {
        for (let i = 0; i < data.length; i++){

        }
    }

    render(){
        return (
            <View>

            </View>
        )
    }
}

export default withAuthProvider(ExerciseStats);