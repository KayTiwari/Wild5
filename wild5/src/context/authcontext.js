import React, {Component} from 'react'
const { Consumer, Provider } = React.createContext();

const config = {
  apiKey: `${process.env.REACT_APP_F}`,
  authDomain: "wild5-5ca8b.firebaseapp.com",
  databaseURL: "https://wild5-5ca8b.firebaseio.com",
  projectId: "wild5-5ca8b",
  storageBucket: "wild5-5ca8b.appspot.com",
  messagingSenderId: "714885268112"
}

export default class AuthProvider extends Component {
    state = {
        
    }


    render() {
        return (
          <Provider value={{
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