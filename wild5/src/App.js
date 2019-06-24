import React, {Component} from 'react';
import Router from './Router'
import AuthProvider from './context/authcontext';
import GlobalProvider from './context/context';

class App extends Component{

    render(){
        return (
            <GlobalProvider>
            <AuthProvider>
              <Router/>
            </AuthProvider>
            </GlobalProvider>
        )
    }
}

export default App;