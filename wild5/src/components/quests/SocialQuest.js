import React, { Component } from 'react'
import { Text, View, Dimensions, Picker, Button, Modal, TouchableHighlight, TextInput, StyleSheet } from 'react-native'
import {Container, Icon} from 'native-base'

const {width, height} = Dimensions.get('window')

class SocialQuest extends Component {
    state = {
        socialInteraction: [],
        Interactions: ["Dinner with family or friends", "Seeing a movie with family or friends", "Having coffee with family or friends", "taking a walk with family or friends", "joining a book club", "Participating in a sporting activity ie, tennis, basketball", "taking a cooking class", "Taking a dance class"],
        modalVisible: false
    }

    showModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {

        const listInteractions =
        this.state.Interactions.map(i => {
             return (
                 <Picker.Item label={i} value={i}><Button><Icon name="remove-circle"/></Button></Picker.Item>
             )
         })
        return (
            <Container style={{height, width, backgroundColor:'#E93422'}}>
                <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.modalView}>
            <View style={styles.modalInput}>
              <TextInput style={{height: '30%', width:'100%', borderWidth: 0.5, borderColor: '#000'}}/>
            <View style={{flexDirection:"column", justifyContent: 'flex-end'}}>
              <TouchableHighlight
                onPress={() => {
                  this.setState({
                    modalVisible: !this.state.modalVisible});
                }}>
                <Text style={{fontSize: 16}}>Add</Text>
              </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
                <View style={{alignItems: 'center'}}>
                <View style={{alignItems:'center', marginTop: '20%'}}><Text style={{fontWeight: "bold", fontSize:26}}>Branch Out</Text></View><Text style={{marginLeft: 10, marginRight: 10, fontSize:20}}>Experience a New Social Interaction</Text>
                </View>
                <View style={{alignItems: 'center', height: 200, backgroundColor: '#FFF', width: '90%'}}>
                <Picker
                selectedValue={this.state.socialInteraction}
                style={{height: 100, width, justifyContent:'center'}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({socialInteraction: itemValue})
                }>
                {listInteractions}
                </Picker>
                </View>
                <Button title="Add a New Experience" onPress={this.showModal}/>
            </Container>
        )
    }
}


export default SocialQuest

const styles = StyleSheet.create({
    modalView: {
        justifyContent:'center', 
        alignItems: 'center'
    },
    modalInput: {
        width: '80%', 
        height: '40%', 
        backgroundColor: '#fff', 
        borderWidth: 0.5, 
        borderColor: '#000', 
        borderRadius: 5
    }
})