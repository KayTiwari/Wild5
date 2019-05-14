import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
    backgroundGradientFrom: 'gray',
    backgroundGradientTo: '#333',
    color: (opacity = 1) => `rgba(62, 152, 187, ${opacity})`,
    strokeWidth: 3
};
class RadarChart extends Component{
    state = {
        data: [
            this.props.exercise,
            this.props.mindfulness,
            this.props.sleep,
            this.props.connectedness,
            this.props.nutrition,
        ]
    }


    render(props){
        console.log(this.props);
        return (
            <View>
                <Text>Today's chart</Text>
                <ProgressChart
                    data={this.state.data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                />
            </View>
        )
    }
}

export default RadarChart;