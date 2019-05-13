import React, { Component } from 'react'
import { View, Text, Platform, TextInput } from 'react-native'
import t from 'tcomb-form-native'

const Form = t.form.Form;

const Feedback1 = t.struct({

  email: t.String,
  title: t.String
  

})

const Feedback2 = t.struct({
  feedback: t.maybe(t.String)
})

const stylesheet = Object.freeze({ 

          fields: {},
          formGroup: {
            normal: {
              marginBottom: 10
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
                    marginBottom: 5
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
      <View style={stylesheet.formGroup.normal}>
          <Form type={Feedback1}/>
          <TextInput type={Feedback2} style={stylesheet.textbox.normal}  />
      </View>
    )
  }
}


export default Feedback;


// options={Options}
