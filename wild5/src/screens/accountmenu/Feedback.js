import React, { Component } from 'react'
import { View, Dimensions, Platform, TextInput } from 'react-native'
import t from 'tcomb-form-native'
import { Button, Container, Text } from 'native-base';
import Navbar from '../../components/Navbar';

const Form = t.form.Form;

const Feedback1 = t.struct({

  email: t.String,
  title: t.String
  

})

const Feedback2 = t.struct({
  feedback: t.maybe(t.String)
})

const screenheight = Dimensions.get('window').height;

const stylesheet = Object.freeze({ 

          fields: {},
          formGroup: {
            normal: {
              marginLeft: '5%',
              marginRight: '5%',
              marginTop: '15%'
            }
          },
            textbox: {
              normal: {
                    color: '#fff',
                    fontSize: 20,
                    height: 36,
                    paddingVertical: Platform.OS === "ios" ? 7 : 0,
                    paddingHorizontal: 7,
                    borderRadius: 4,
                    borderColor: '#000',
                    borderWidth: 1,
                    marginBottom: 5,
                  }
                },
              // textboxView: {
              //     normal: {},
              //     error: {},
              //     notEditable: {}
              //   }


})

class Feedback extends Component {

  render() {
    return (
      <Container style={{display:'flex', height:screenheight, flexDirection:'column', justifyContent:'space-between'}}>

      <View>
        <Text style={{marginTop:'20%', fontSize:30, fontWeight:'600', textAlign:'center'}}>Feedback</Text>


      <View style={stylesheet.formGroup.normal}>
          <Form type={Feedback1}/>
          <TextInput type={Feedback2} style={stylesheet.textbox.normal}  />
      </View>
      </View>

      <View>
        <Navbar />
      </View>

      </Container>
    )
  }
}

export {Feedback};