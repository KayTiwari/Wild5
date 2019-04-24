import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const NutritionButton = (props) => {
    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity onPress={props.onPress} style={[{marginRight: props.marginRight}, {backgroundColor: props.backgroundColor}, {borderColor: props.borderColor}, buttonStyle, {marginLeft: props.marginLeft, marginTop: props.marginTop},]}>
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
        // flex: 1,
        // alignSelf: 'stretch',
        backgroundColor: '#f3983e',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#b9702c',
        marginLeft: 5,
    }
}
export { NutritionButton };