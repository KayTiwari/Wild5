import React, {Component} from 'react';
import firebase from 'firebase';
import format from 'date-fns/format';
import Config from 'react-native-config';
const {Consumer, Provider} = React.createContext();

export default class AuthProvider extends Component {
  state = {
    user: '',
    ready: false,
  };

  componentDidMount() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: Config.FIREBASE_API_KEY,
        authDomain: Config.FIREBASE_AUTH_DOMAIN,
        databaseURL: Config.FIREBASE_DB_URL,
        projectId: Config.FIREBASE_PROJECT_ID,
        storageBucket: Config.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
      });
    }
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