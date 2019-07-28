import React, {Component} from 'react';
import firebase from 'firebase';
import {format} from 'date-fns';
const {Consumer, Provider} = React.createContext();

export default class AuthProvider extends Component {
  state = {
    user: '',
    ready: false,
  };

  componentDidMount() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyC93k0KGpd8myVQxCTgWPw6Qk9NzNA6b_o",
    //   authDomain: "wild5-5ca8b.firebaseapp.com",
    //   databaseURL: "https://wild5-5ca8b.firebaseio.com",
    //   projectId: "wild5-5ca8b",
    //   storageBucket: "wild5-5ca8b.appspot.com",
    //   messagingSenderId: "714885268112"
    // });
  }

  getUser = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      var res = user.email.split('.');
      var userEm = res[0].toString();
      this.setState({
        user: userEm,
      });
    } else {
      console.log('noperz');
    }
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var dateTime = date;
    this.setState({
      date: dateTime,
    });
  };

  getTrackingData = () => {
    const date = format(new Date(), 'YYYY-MM-DD');
    var database = firebase.database();
    var ref = database.ref(`Surveys/${this.state.user}/${date}`);
    ref.on('value', this.gotData, this.errData);
  };

  getPrincipleData = () => {
    var database = firebase.database();
    var ref = database.ref(`Surveys/${this.state.user}`);
    ref.on('value', this.gotPrincData, this.errData);
  };

  getHeroData = () => {
    var database = firebase.database();
    var ref = database.ref(`HERO/${this.state.user}`);
    ref.on('value', this.gotHeroData, this.errData);
  };

  gotData = data => {
    newData = data.val();
    this.setState(
      {
        ran: true,
        trackdata: newData || {},
      },
      () => {
        this.setState({
          ready: true,
        });
      }
    );
  };

  gotPrincData = data => {
    newData = data.val();
    this.setState(
      {
        princData: newData || {},
      },
      () => {
        this.setState({
          ready1: true,
        });
      }
    );
  };

  gotHeroData = data => {
    newData = data.val();
    this.setState(
      {
        heroData: newData || {},
      },
      () => {
        this.setState({
          ready2: true,
        });
      }
    );
    console.log(this.state.heroData);
  };

  errData = err => {
    console.log(err);
  };

  render() {
    return (
      <Provider
        value={{
          getUser: this.getUser,
          getTrackingData: this.getTrackingData,
          getPrincipleData: this.getPrincipleData,
          getHeroData: this.getHeroData,
          ...this.state,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export function withAuthProvider(C) {
  return props => <Consumer>{value => <C {...value} {...props} />}</Consumer>;
}
