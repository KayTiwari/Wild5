import React, {Component} from 'react';
import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
import {getScopedUser} from '../utils/firebase';
const {Consumer, Provider} = React.createContext();

export default class AuthProvider extends Component {
  state = {
    user: '',
    ready: false,
    authenticated: false,
  };

  unsubscribe;

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({authenticated: true});
        if (Actions.currentScene !== 'landing') {
          Actions.replace('landing');
        }
      } else {
        this.setState({authenticated: false});
        Actions.replace('newlogin');
      }
    });
  }

  componentWillUnmount() {
    console.log("unmounting")
    this.unsubscribe();
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
    const ref = scopeRefByUserAndDate('Surveys');

    firebase
      .database()
      .ref(ref)
      .on('value', this.gotData, this.errData);
  };

  getPrincipleData = () => {
    firebase
      .database()
      .ref(`Surveys/${getScopedUser()}`)
      .on('value', this.gotPrincData, this.errData);
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
