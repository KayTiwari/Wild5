import React, {Component} from 'react'
import firebase from 'firebase'
const { Consumer, Provider } = React.createContext();

export default class GlobalProvider extends Component {
    state = {
      user: ''
    }

    componentDidMount(){

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
      export function withProvider(C) {
        return props => <Consumer>
          {value => <C {...value}{...props} />}
        </Consumer>
}
