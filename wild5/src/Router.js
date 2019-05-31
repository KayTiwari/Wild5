import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './screens/LoginForm'
import Landing from './screens/Landing'
import Account from './screens/Account';
import EducationWellnessRoadMap from './screens/NewRoadMap';
import ExerciseTracking from './screens/trackingscreens/ExerciseTracking'
import KickStart30 from './screens/KickStart30';
import LearnMore from './screens/LearnMore';
import Settings from './screens/Settings';
import Quests from './screens/Quests';
import { About, FAQ, Feedback, Profile} from './screens/accountmenu';
import Help from './screens/accountmenu/Help'
import TrackingForm from './screens/TrackingForm';
import ExerciseLesson from './screens/lessonscreens/'
import NutritionQuest from './components/quests/NutritionQuests';

const Routercomponent = () => {
  return (
    <Router>
   <Scene key="root">
    <Scene key="loginform" component={LoginForm} header={null} />
        <Scene key="landing" component={Landing} title='Welcome to Wellness' header={null}/>
          <Scene key="account" component={Account} title='Account' header={null}/>
          <Scene key="edroadmap" component={EducationWellnessRoadMap} header={null} title='Wellness Roadmap'/>
          <Scene key="exerciselesson" component={ExerciseLesson} title='Exercise' backTitle='Back'/>
          <Scene key="kickstart" component={KickStart30} title='KickStart30' header={null}/>
          <Scene key="learnmore" component={LearnMore} title='Learn More' backTitle='Back'/>
          <Scene key="quests" component={Quests} title='Quests' header={null}/>
          <Scene key='help' component={Help} backTitle='Back'/>
          <Scene key='trackingform' component={TrackingForm} title='Wellness Tracking Form' backTitle='Back'/>
          <Scene key='nutritionquest' component={NutritionQuest} title="Nutrition Quest" header={null} />
          <Scene key='feedback' component={Feedback} header={null}  title="Feedback" />
          <Scene key='profile' backTitle='Back' title='Your Profile' component={Profile}/>
          <Scene key='settings' backTitle='Back' title='Settings' header={null} component={Settings}/>
          <Scene key='exercisetracking' backTitle='Back' title='Exercise Tracking' header={null} component={ExerciseTracking} initial/>
    </Scene>

    </Router>
  )
}


export default Routercomponent