import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './screens/LoginForm'
import Landing from './screens/Landing'

const Routercomponent = () => {
  return (
    <Router>
   <Scene key="root">
        <Scene key="loginform" component={LoginForm} title="Login" />
        <Scene key="landing" component={Landing} initial />
    </Scene>
        <Scene key="tabbar" tabs>
          <Scene key="" component={}/>
          <Scene key="" component={}/>
          <Scene key="" component={}/>
          <Scene key="" component={}/>
          <Scene key="" component={}/>
        </Scene>

    </Router>
  )
}


export default Routercomponent