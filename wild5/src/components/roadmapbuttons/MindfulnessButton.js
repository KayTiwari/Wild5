import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const MindfulnessButton = (props) => {
    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={[{marginRight: props.marginRight}, buttonStyle, {marginLeft: props.marginLeft}, {backgroundColor: props.backgroundColor || '#49b8ea'}, {borderColor: props.borderColor || '#35879d'}]}>
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