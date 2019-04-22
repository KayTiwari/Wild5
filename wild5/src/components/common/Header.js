import React from 'react';
import { ReactNative, Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle} >
        <Text style={textStyle}>{props.text}</Text>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .5,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20,
    }
};

export { Header }