import React, {Component} from 'react';
import { View, Text } from 'react-native';
import BarGraph from '../components/charts/BarGraph'

class Statistics extends Component{
    state = {
        exval: 0,
        mindval: 0,
        sleepval: 0,
        socval: 0,
        nutrval: 0,
    }
    componentDidMount(){
        //firebase read-> data->store as state-> pass as prop
    }

    render(){
        return(
            <View>
                <BarGraph exval={this.state.exval} mindval={this.state.mindval} sleepval={this.state.sleepval} socval={this.state.socval} nutrval={this.state.nutrval} />
            </View>
        )
    }
}

export default Statistics;