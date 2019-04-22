import React from 'react'
const { Consumer, Provider } = React.createContext();

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
      export function withProvider(C) {
        return props => <Consumer>
          {value => <C {...value}{...props} />}
        </Consumer>
}