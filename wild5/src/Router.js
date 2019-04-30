import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './screens/LoginForm'
import Landing from './screens/Landing'
import Account from './screens/Account';
import EducationWellnessRoadMap from './screens/EducationWellnessRoadMap';
import KickStart30 from './screens/KickStart30';
import LearnMore from './screens/LearnMore';
import Quests from './screens/Quests';
import TrackingForm from './screens/TrackingForm';
import ExerciseI from './screens/lessonscreens/exerciselessons/ExerciseI'

const Routercomponent = () => {
  return (
    <Router>
   <Scene key="root">
        <Scene key="loginform" component={LoginForm} title="Login" />
        <Scene key="landing" component={Landing} title='Landing'/>
          <Scene key="account" component={Account} title='accountpage'/>
          <Scene key="edroadmap" component={EducationWellnessRoadMap} title='Wellness Roadmap' initial/>
          <Scene key="kickstart" component={KickStart30} title='KickStart30'/>
          <Scene key="learnmore" component={LearnMore} title='Learn More'/>
          <Scene key="quests" component={Quests} title='Quests'/>
          <Scene key="exercise1" component={ExerciseI} title='Exercise I'/>
          <Scene key='trackingform' component={TrackingForm} title='Wellness Tracking Form' />
    </Scene>

    </Router>
  )
}


export default Routercomponent