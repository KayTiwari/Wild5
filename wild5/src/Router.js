import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './screens/LoginForm'
import Landing from './screens/Landing'
import Account from './screens/Account';
import EducationWellnessRoadMap from './screens/EducationWellnessRoadMap';
import KickStart30 from './screens/KickStart30';
import LearnMore from './screens/LearnMore';
import Quests from './screens/Quests';
import Profile from './screens/accountmenu/Profile'
import Help from './screens/accountmenu/Help'
import About from './screens/accountmenu/About'
import FAQ from './screens/accountmenu/FAQ'
import TrackingForm from './screens/TrackingForm';
import ExerciseI from './screens/lessonscreens/exerciselessons/ExerciseI'
import NutritionQuest from './screens/NutritionQuests';

const Routercomponent = () => {
  return (
    <Router>
   <Scene key="root">
    <Scene key="loginform" component={LoginForm} header={null}/>
        <Scene key="landing" component={Landing} title='Landing' backTitle='Logout' header={null} initial/>
          <Scene key="account" component={Account} title='Account' header={null}/>
          <Scene key="edroadmap" component={EducationWellnessRoadMap} title='Wellness Roadmap'/>
          <Scene key="kickstart" component={KickStart30} title='KickStart30' header={null}/>
          <Scene key="learnmore" component={LearnMore} title='Learn More' header={null}/>
          <Scene key="quests" component={Quests} title='Quests' header={null}/>
          <Scene key='profile' component={Profile} header={null}/>
          <Scene key='help' component={Help} header={null}/>
          <Scene key='about' component={About} header={null}/>
          <Scene key='faq' component={FAQ} header={null}/>
          <Scene key="exercise1" component={ExerciseI} title='Exercise I' header={true}/>
          <Scene key='trackingform' component={TrackingForm} title='Wellness Tracking Form' header={null}/>
          <Scene key='nutritionquest' component={NutritionQuest} title="Nutrition Quest" header={null} />
    </Scene>

    </Router>
  )
}


export default Routercomponent