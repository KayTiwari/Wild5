import React, { Component } from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import HEROtrack from "../../images/herologo.png";
// import firebase from "firebase";
import { Actions } from 'react-native-router-flux'

const radio_props = [{ label: "Yes", value: "1" }, { label: "No", value: "0" }];

export default class HeroTracking extends Component {
  state = { heroDaily: "",
user:'',
date: '',
value3Index: null
};

//   componentDidMount() {
//     var user = firebase.auth().currentUser;
//     if (user) {
//       var res = user.email.split(".");
//       var userEm = res[0].toString();
//       this.setState({
//         user: userEm
//       });
//     } else {
//       console.log("noperz");
//     }
//     var today = new Date();
//     var date =
//       today.getFullYear() +
//       "-" +
//       (today.getMonth() + 1) +
//       "-" +
//       today.getDate();
//     var dateTime = date;
//     this.setState({
//       date: dateTime
//     });
//   }

  submitData = () => {
    firebase
    .database()
    .ref(`Surveys/${this.state.user}/${this.state.date}`)
    .update({
      HeroDailyScore: this.state.heroDaily
    }).then(()=>Alert.alert(
      'Data submitted Successfully',
      '',
      [
        {
          text: 'ok',
          onPress: () => Actions.landing(),
          style: 'ok',
        }
      ],
    )
  );

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: "30%",
            width: "90%",
            alignSelf: "center",
            marginTop: 15
          }}
        >
          <Image
            source={HEROtrack}
            style={{ height: 120, width: "100%", alignSelf: "center" }}
          />
        </View>
        <View style={{ height: "25%", width: "80%", alignItems: "center", alignSelf:'center'}}>
          <Text style={{fontSize: 30, fontWeight:'700', textAlign:'center', marginBottom: 20}}>Did I Complete My HERO Exercises Today?</Text>
          <RadioForm
            radio_props={radio_props}
            initial={false}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={"#DD3121"}
            labelStyle={{fontSize: 26, color: '#000'}}
            animation={true}
            onPress={value => {
              this.setState({ heroDaily: value });
            }}
          />
          <TouchableOpacity style={{height:50,width:'80%',alignSelf:'center', backgroundColor:'#000', borderRadius: 7, justifyContent: 'center', marginTop: 15}} onPress={()=> this.submitData()}>
            <Text style={{alignSelf:'center', color: '#fff', fontSize: 20}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
