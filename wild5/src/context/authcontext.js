import React, {Component} from 'react'
const { Consumer, Provider } = React.createContext();
import firebase from 'firebase'



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