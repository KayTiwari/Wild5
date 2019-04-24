import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './screens/LoginForm'
import Landing from './screens/Landing'
import Account from './screens/Account';
import EducationWellnessRoadMap from './screens/EducationWellnessRoadMap';
import KickStart30 from './screens/KickStart30';
import LearnMore from './screens/LearnMore';
import Quests from './screens/Quests';

const Routercomponent = () => {
  return (
    <Router>
   <Scene key="root">
        <Scene key="loginform" component={LoginForm} title="Login" />
        <Scene key="landing" component={Landing} title='landingpage'/>
          <Scene key="account" component={Account} title='accountpage'/>
          <Scene key="edroadmap" component={EducationWellnessRoadMap} title='wellnessroadmap' initial/>
          <Scene key="kickstart" component={KickStart30} title='kickstart30'/>
          <Scene key="learnmore" component={LearnMore} title='learnmorepage'/>
          <Scene key="quests" component={Quests} title='questpage'/>
    </Scene>

    </Router>
  )
}


export default Routercomponent