import React, {Component} from 'react'
import { PieChart } from 'react-native-svg-charts'
 
class PieChart extends Component {

    state = {
        data: [
        ]
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
 
    render() {
 
        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
 
        return (
            <PieChart
                style={ { height: 200 } }
                data={ pieData }
            />
        )
    }
 
}

export default PieChart