import React, { Component } from 'react'
import {Dimensions} from 'react-native'
import { Button, Icon, Text } from 'native-base'

const {height, width} = Dimensions.get('window')

const QuestButton = ({onPress, iconName1, iconName2, label}) =>{

        return (
            <>
            <Button style={{alignSelf:'center', width: '75%'}} onPress={onPress} large>
            <Icon name={iconName1} />
            <Text>{label}</Text>
            <Icon name={iconName2} />
            </Button>
            </>
        )
    }

export {QuestButton};