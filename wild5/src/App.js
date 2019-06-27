import React, {Component} from 'react';
import Router from './Router'
import AuthProvider from './context/authcontext';

class App extends Component{

    render(){
        return (
            <AuthProvider>
              <Router/>
            </AuthProvider>
        )
    }
}

export default App;