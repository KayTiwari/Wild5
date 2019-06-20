import React, { Component } from 'react'
import { Text, View, Dimensions, Picker } from 'react-native'
import {Container} from 'native-base'

const {width, height} = Dimensions.get('window')

export default class SocialQuest extends Component {
    state = {
        socialInteraction: [],
        Interactions: ["Dinner with family or friends", "Seeing a movie with family or friends", "Having coffee with family or friends", "taking a walk with family or friends", "joining a book club", "Participating in a sporting activity ie, tennis, basketball", "taking a cooking class", "Taking a dance class"]
    }

    render() {

        const listInteractions =
        this.state.Interactions.map(i => {
             return (
                 <Picker.Item label={i} value={i} />
             )
         })
        return (
            <Container style={{height, width}}>
                <Text style={{marginTop: '15%'}}> Branch out, Experience a new Social Interaction </Text>
                <Picker
                selectedValue={this.state.socialInteraction}
                style={{alignItems:'center', height: '30%', width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({socialInteraction: itemValue})
                }>
                {listInteractions}
                </Picker>
            </Container>
        )
    }
}
