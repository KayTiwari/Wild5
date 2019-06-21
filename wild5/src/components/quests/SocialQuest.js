import React, { Component } from 'react'
import { Text, View, Dimensions, Picker, Button, Modal, TouchableHighlight, TextInput, StyleSheet, AsyncStorage } from 'react-native'
import {Container, Icon} from 'native-base'
import Navbar from '../../components/Navbar'

const {width, height} = Dimensions.get('window')

class SocialQuest extends Component {
    state = {
        socialInteraction: [],
        interactions: ["Dinner with family or friends", "Seeing a movie with family or friends", "Having coffee with family or friends", "taking a walk with family or friends", "joining a book club", "Participating in a sporting activity ie, tennis, basketball", "taking a cooking class", "Taking a dance class"],
        modalVisible: false,
        text: ''
    }

    showModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    saveState = async (state) => {
        try {
            await AsyncStorage.setItem('@SocialState:1', `${JSON.stringify(state)}`);
          } catch (error) {
            Alert.alert('storage save failed')
          }
    }

    returnState = async () => {
        try {
            const value = await AsyncStorage.getItem('@SocialState');
            if (value !== null) {
              this.setState({
                interactions: value
              })
            }
          } catch (error) {
           AlertIOS.alert('get storage failed')
          }
    }

    componentWillMount(){
        returnState()
    }


    componentWillUnmount(){
        saveState(this.state.interactions)
    }

    onChange = (text) => {
        this.setState({
            text
        })
    }

    render() {

        const listInteractions =
        this.state.interactions.map(i => {
             return (
                 <Picker.Item label={i} value={i}><Button><Icon name="remove-circle"/></Button></Picker.Item>
             )
         })
        return (
            <View style={{height: '100%', width: '100%', backgroundColor:'#E93422', justifyContent: 'space-between'}}>
            <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.modalView}>
            <View style={styles.modalInput}>
              <TextInput style={styles.modalInput} value={this.state.text} onChangeText={(text) => this.onChange(text)}/>
            <View style={{flexDirection:"column", justifyContent: 'flex-end'}}>
              <TouchableHighlight
                onPress={() => {
                  this.setState((prevState => ({
                    interactions: [...prevState.interactions, this.state.text],
                    modalVisible: !this.state.modalVisible
                })));
                }}>
                <Text style={{fontSize: 16}}>Add</Text>
              </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
                <View >
                <View style={{alignItems:'center', marginTop: '20%'}}><Text style={{fontWeight: "bold", fontSize:26}}>Branch Out</Text></View><Text style={{marginLeft: 10, marginRight: 10, fontSize:20}}>Experience a New Social Interaction</Text>
                </View>
                <View style={{flexDirection: 'row', alignSelf:'center', height: 200, backgroundColor: '#FFF', width: '90%'}}>
                <Picker
                selectedValue={this.state.socialInteraction}
                style={{height: 100, width:'90%'}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({socialInteraction: itemValue})
                }>
                {listInteractions}
                </Picker>
                </View>
                <Button title="Add a New Experience" onPress={this.showModal}/>
                <Navbar />
            </View>
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