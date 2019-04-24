import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const SleepButton = (props) => {
    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity onPress={props.onPress} style={[{marginRight: props.marginRight}, buttonStyle, {backgroundColor: props.backgroundColor || '#ba3992'}, {borderColor: props.borderColor || '#8e2762'}, {marginLeft: props.marginLeft}]}>
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
        backgroundColor: '#ba3992',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#8e2762',
        marginLeft: 5,
        marginTop: 10
    }
}
export { SleepButton };