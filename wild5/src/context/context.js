import React, {Component} from 'react'
import firebase from 'firebase'
const { Consumer, Provider } = React.createContext();

export default class GlobalProvider extends Component {
    state = {
      user: '',
      date: ''
    }

  //   componentDidMount(){
  //     var user = firebase.auth().currentUser;
  //         if (user) {
  //             var res = user.email.split(".");
  //             var userEm = res[0].toString();
  //             this.setState({
  //                 user: userEm,
  //             })
  //         } else {
  //             console.log('nopez')
  //         }
  //         var today = new Date();
  //         var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  //         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  //         var dateTime = date+' '+time;
  //             this.setState({
  //                 date: dateTime
  //             })
  //             console.log(this.state)
  // }

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
