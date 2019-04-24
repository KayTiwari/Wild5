import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const MindfulnessButton = (props) => {
    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity onPress={props.onPress} style={[{marginRight: props.marginRight}, {backgroundColor: props.backgroundColor}, {borderColor: props.borderColor}, buttonStyle, {marginLeft: props.marginLeft}]}>
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
        backgroundColor: '#49b8ea',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#35879d',
        marginLeft: 5,
        marginTop: 10
    }
}
export { MindfulnessButton };