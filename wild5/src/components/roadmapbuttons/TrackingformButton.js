import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const TrackingformButton = (props) => {
    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={[{marginRight: props.marginRight}, buttonStyle, {marginLeft: props.marginLeft}]}>
        <Text style={textStyle}>{props.children}</Text>
        </TouchableOpacity>
    )
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        backgroundColor: '#333',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#36A0B3',
        marginLeft: 5,
        marginTop: 10
    }
}
export { TrackingformButton };