import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from "react-native-svg";

class SleepGraph extends React.PureComponent {

    render() {
        console.log(this.props)
        const data = [
            {
                value: this.props.logmeals,
                svg: {
                    fill: '#67809f',
                },
            },
            {
                value: this.props.MIND,
                svg: {
                    fill: '#d2527f',
                },
            },
            {
                value: this.props.breakfast,
                svg: {
                    fill: '#fef160',
                },
            },
            {
                value: this.props.lunch,
                svg: {
                    fill: '#1e824c',
                },
            },
            {
                value: this.props.dinner,
                svg: {
                    fill: '#cf000f',
                },
            },
        ]

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )

        return (
            <BarChart
                style={{ height: 200 }}
                data={data}
                gridMin={0}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                yAccessor={({ item }) => item.value}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
                <Gradient/>
            </BarChart>
        )
    }

}

export default SleepGraph
