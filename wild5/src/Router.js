import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './screens/LoginForm'
import Landing from './screens/Landing'
import Account from './screens/Account';
import EducationWellnessRoadMap from './screens/EducationWellnessRoadMap';
import KickStart30 from './screens/KickStart30';
import LearnMore from './screens/LearnMore';
import Settings from './screens/Settings';
import Quests from './screens/Quests';
import { About, FAQ, Feedback, Profile} from './screens/accountmenu';
import Help from './screens/accountmenu/Help'
import TrackingForm from './screens/TrackingForm';
import ExerciseI from './screens/lessonscreens/exerciselessons/ExerciseI'
import NutritionQuest from './components/quests/NutritionQuests';

const Routercomponent = () => {
  return (
    <Router>
   <Scene key="root">
    <Scene key="loginform" component={LoginForm} header={null}/>
        <Scene key="landing" component={Landing} title='Welcome to Wellness' backTitle='Logout' initial/>
          <Scene key="account" component={Account} title='Account' header={null}/>
          <Scene key="edroadmap" component={EducationWellnessRoadMap} backTitle='Back' title='Wellness Roadmap'/>
          <Scene key="exercise1" component={ExerciseI} title='Exercise I' backTitle='Back'/>
          <Scene key="kickstart" component={KickStart30} title='KickStart30' backTitle='Back'/>
          <Scene key="learnmore" component={LearnMore} title='Learn More' backTitle='Back'/>
          <Scene key="quests" component={Quests} title='Quests' header={null}/>
          <Scene key='help' component={Help} backTitle='Back'/>
          <Scene key='about' component={About} backTitle='Back'/>
          <Scene key='faq' component={FAQ} backTitle='Back'/>
          <Scene key='trackingform' component={TrackingForm} title='Wellness Tracking Form' header={null}/>
          <Scene key='nutritionquest' component={NutritionQuest} title="Nutrition Quest" header={null} />
          <Scene key='feedback' component={Feedback} title="Feedback" />
          <Scene key='profile' backTitle='Back' title='Your Profile' component={Profile}/>
          <Scene key='settings' backTitle='Back' title='Settings' component={Settings}/>
    </Scene>

    </Router>
  )
}


export default Routercomponent