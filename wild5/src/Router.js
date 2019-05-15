import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './screens/LoginForm'
import Landing from './screens/Landing'
import Account from './screens/Account';
import EducationWellnessRoadMap from './screens/EducationWellnessRoadMap';
import KickStart30 from './screens/KickStart30';
import LearnMore from './screens/LearnMore';
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
        <Scene key="landing" component={Landing} title='Welcome to Wellness' backTitle='Logout' initial />
          <Scene key="account" component={Account} title='Account' header={null}/>
          <Scene key="edroadmap" component={EducationWellnessRoadMap} backTitle='Back' title='Wellness Roadmap'/>
          <Scene key="exercise1" component={ExerciseI} title='Exercise I' backTitle='Back'/>
          <Scene key="kickstart" component={KickStart30} title='KickStart30' header={null}/>
          <Scene key="learnmore" component={LearnMore} title='Learn More' header={null}/>
          <Scene key="quests" component={Quests} title='Quests' backTitle='Back'/>
          <Scene key='help' component={Help} backTitle='Back'/>
          <Scene key='about' component={About} backTitle='Back'/>
          <Scene key='faq' component={FAQ} backTitle='Back'/>
          <Scene key='trackingform' component={TrackingForm} title='Wellness Tracking Form' header={null}/>
          <Scene key='nutritionquest' component={NutritionQuest} title="Nutrition Quest" header={null} />
          <Scene key='feedback' component={Feedback} title="Feedback" header={null} />
          <Scene key='profile' backTitle='Back' title='Your Profile' component={Profile}/>
    </Scene>

    </Router>
  )
}


export default Routercomponent