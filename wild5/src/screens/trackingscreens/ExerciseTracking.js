import React, { Component } from 'react'
import { View } from 'react-native'
import { withProvider } from '../../context/context'
import { ModButton } from '../../components/common'
import { Text } from 'native-base'
import { Dropdown } from 'react-native-material-dropdown';

let typedata = [{
    value: 'Walking'
}, {
    value: 'Jogging'
}, {
    value: 'Biking'
}, {
    value: 'Playing Sports'
}, {
    value: 'Swimming'
}, {
    value: 'Weight Lifting'
}, {
    value: 'Aerobics'
}, {
    value: 'Water Aerobics'
},
]

class ExerciseTracking extends Component {
    state = {
        type: '',
        duration: 0,
        intensity: ''
    }


    render() {
        return (
            <View>
                <Text style={{fontSize: 30, textAlign: 'center'}}>Track your exercise</Text>
                <ModButton>?</ModButton>

                <View>
                    <DropDown label='Type of Exercise' data={typedata} />
                </View>
            </View>
        )
    }
}
export default withProvider(ExerciseTracking)