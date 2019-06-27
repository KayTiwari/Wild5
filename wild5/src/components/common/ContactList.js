import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const ContactList = ({onPress}) =>  {



        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                padding: 10,
                borderBottomWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ecf0f1'
              }} onPress={() => onPress(this.props.item)}>
                <View style={{
                  flex: 3,
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}>
                  {item.check
                    ? (
                      <Text style={{
                        fontWeight: 'bold'
                      }}>{`${item.familyName} ${item.givenName}`}</Text>
                    )
                    : (
                      <Text>{`${item.familyName} ${item.givenName}`}</Text>
                    )}
                </View>
                <View style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center'
                }}>
                  {item.check
                    ? (
                      <Icon name="ios-checkbox" size={30} color={primaryColor}></Icon>
                    )
                    : (
                      <Icon name="ios-square-outline" size={30} color={darkGrey}></Icon>
                    )}
                </View>
              </TouchableOpacity>
        )
    }



export default ContactList