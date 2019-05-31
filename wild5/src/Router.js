import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './screens/LoginForm'
import Landing from './screens/Landing'
import Account from './screens/Account';
import EducationWellnessRoadMap from './screens/NewRoadMap';
import KickStart30 from './screens/KickStart30';
import LearnMore from './screens/LearnMore';
import Settings from './screens/Settings';
import Quests from './screens/Quests';
import { About, FAQ, Feedback, Profile} from './screens/accountmenu';
import Help from './screens/accountmenu/Help'
import TrackingForm from './screens/TrackingForm';
import NutritionQuest from './components/quests/NutritionQuests'
import { ExerciseLesson, SleepLesson, NutritionLesson, SocialLesson } from './screens/lessonscreens'
import ExerciseTracking from './screens/trackingscreens/ExerciseTracking'
import MindfulnessTracking from './screens/trackingscreens/MindfulnessTracking'
import SocialTracking from './screens/trackingscreens/SocialTracking'
import SleepTracking from './screens/trackingscreens/SleepTracking'
import NutritionTracking from './screens/trackingscreens/NutritionTracking'

const Routercomponent = () => {
  return (
    <Router>
   <Scene key="root">
    <Scene key="loginform" component={LoginForm} header={null} />
        <Scene key="landing" component={Landing} title='Welcome to Wellness' header={null} initial/>
          <Scene key="account" component={Account} title='Account' header={null}/>
          <Scene key="edroadmap" component={EducationWellnessRoadMap} header={null} title='Wellness Roadmap'/>
          <Scene key="exerciselesson" component={ExerciseLesson} title='Exercise' backTitle='Back'/>
          <Scene key="nutritionlesson" component={NutritionLesson} title='Nutrition' backTitle='Back'/>
          <Scene key="sleeplesson" component={SleepLesson} title='Sleep' backTitle='Back'/>
          <Scene key="sociallesson" component={SocialLesson} title='Social' backTitle='Back'/>
          <Scene key="kickstart" component={KickStart30} title='KickStart30' header={null}/>
          <Scene key="learnmore" component={LearnMore} title='Learn More' backTitle='Back'/>
          <Scene key="quests" component={Quests} title='Quests' header={null}/>
          <Scene key='help' component={Help} backTitle='Back'/>
          <Scene key='trackingform' component={TrackingForm} title='Wellness Tracking Form' backTitle='Back'/>
          <Scene key='nutritionquest' component={NutritionQuest} title="Nutrition Quest" header={null} />
          <Scene key='feedback' component={Feedback} header={null}  title="Feedback" />
          <Scene key='profile' backTitle='Back' title='Your Profile' component={Profile}/>
          <Scene key='settings' backTitle='Back' title='Settings' header={null} component={Settings}/>
          <Scene key='exercisetracking' backTitle='Back' title='Settings' header={null} component={ExerciseTracking}/>
          <Scene key='mindfulnesstracking' backTitle='Back' title='Settings' header={null} component={MindfulnessTracking}/>
          <Scene key='sleeptracking' backTitle='Back' title='Settings' header={null} component={SleepTracking}/>
          <Scene key='socialtracking' backTitle='Back' title='Settings' header={null} component={SocialTracking}/>
          <Scene key='nutritiontracking' backTitle='Back' title='Settings' header={null} component={NutritionTracking}/>
    </Scene>

    </Router>
  )
}


export default Routercomponent