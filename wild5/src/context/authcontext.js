import React, {Component} from 'react'
import firebase from 'firebase';
const { Consumer, Provider } = React.createContext();



export default class AuthProvider extends Component {
    state = {
      email: '',
    }

    componentWillMount(){
      firebase.initializeApp({
          apiKey: "AIzaSyC93k0KGpd8myVQxCTgWPw6Qk9NzNA6b_o",
          authDomain: "wild5-5ca8b.firebaseapp.com",
          databaseURL: "https://wild5-5ca8b.firebaseio.com",
          projectId: "wild5-5ca8b",
          storageBucket: "wild5-5ca8b.appspot.com",
          messagingSenderId: "714885268112"
        })
        
  }

  setEmail = (email) => {
    this.setState({
      email: email
    })
    console.log('fired');
    console.log(this.state);
  }

    

    render() {
        return (
          <Provider value={{
            setEmail: this.setEmail,
            ...this.state
          }}>
            {this.props.children}
          </Provider>
        )
      }
    }
      export function withAuthProvider(C) {
        return props => <Consumer>
          {value => <C {...value}{...props} />}
        </Consumer>
}