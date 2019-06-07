import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from "react-native-svg";

//https://github.com/JesperLekland/react-native-svg-charts-examples


class BarGraph extends React.PureComponent {
    state = {
        exval: 0,
        mindval: 0,
        sleepval: 0,
        socval: 0,
        nutrval: 0,
    }

    render() {

        const data = [
            {
                value: exval,
                svg: {
                    fill: 'green',
                },
            },
            {
                value: mindval,
                svg: {
                    fill: 'blue',
                },
            },
            {
                value: sleepval,
                svg: {
                    fill: 'purple',
                },
            },
            {
                value: socval,
                svg: {
                    fill: 'red',
                },
            },
            {
                value: nutrval,
                svg: {
                    fill: 'orange',
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

export default BarGraph