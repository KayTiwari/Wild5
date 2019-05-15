import React, {Component} from 'react';
import RadarChart from 'react-svg-radar-chart';
// import 'react-svg-radar-chart/build/css/index.css'


const captions = {
    exercise: 'Exercise',
    mindfulness: 'Mindfulness',
    sleep: 'Sleep',
    connectedness: 'Social',
    nutrition: 'Nutrition'
  };
class RadarChartDisp extends Component{
    state = {
        data: [],
        meta: {color: 'blue'}
    }

    componentDidMount(){
        this.setState({
            data:[
            this.props.exercise,
            this.props.mindfulness,
            this.props.sleep,
            this.props.connectedness,
            this.props.nutrition,
            ]
        })
    }

    render(){
        return (
            <RadarChart 
            captions={captions}
            data={[this.state]}
            size={450}
            />
        )
    }
}

export default RadarChartDisp;