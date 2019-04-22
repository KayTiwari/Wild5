import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'
import Landing from './Landing'

const Routercomponent = () => {
  return (
    <Router>
   <Scene key="root">
        <Scene key="loginform" component={LoginForm} title="Login" initial />
        <Scene key="landing" component={Landing} title="Landing"/>
 </Scene>

    </Router>
  )
}


export default Routercomponent