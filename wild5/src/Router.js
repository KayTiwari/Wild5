import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './screens/LoginForm'
import Landing from './screens/Landing'
import Account from './screens/Account';
import EducationWellnessRoadMap from './screens/NewRoadMap';
import ExerciseTracking from './screens/trackingscreens/ExerciseTracking'
import MindfulnessTracking from './screens/trackingscreens/MindfulnessTracking'
import SleepTracking from './screens/trackingscreens/SleepTracking'
import SocialTracking from './screens/trackingscreens/SocialTracking'
import NutritionTracking from './screens/trackingscreens/NutritionTracking'
import KickStart30 from './screens/KickStart30';
import LearnMore from './screens/LearnMore';
import Settings from './screens/Settings';
import Quests from './screens/Quests';
import Progress from './screens/trackingscreens/Progress';
import Statistics from './screens/Statistics'
import { About, FAQ, Feedback } from './screens/accountmenu';
import Help from './screens/accountmenu/Help'
import TrackingForm from './screens/TrackingForm';
import { ExerciseLesson, MindfulnessLesson, NutritionLesson, SocialLesson, SleepLesson } from './screens/lessonscreens/'
import NutritionQuest from './components/quests/NutritionQuests';
import MindfulnessQuest from './components/quests/MindfulnessQuest';
import Herointro from './screens/HERO/Herointro';
import { HeroEnth, HeroHappy, HeroMent, HeroOpt, HeroRes, HeroScore } from './screens/HERO';
import ExerciseQuest from './components/quests/ExerciseQuest';
import SocialQuest from './components/quests/SocialQuest';
import SleepQuest from './components/quests/SleepQuest';

const Routercomponent = () => {
  return (
    <Router>
   <Scene key="root">
    <Scene key="loginform" component={LoginForm} header={null}/>
        <Scene key="landing" component={Landing} title='Welcome to Wellness' header={null} />
          <Scene key="account" component={Account} title='Account' header={null}/>
          <Scene key="edroadmap" component={EducationWellnessRoadMap} header={null} title='Learn More'/>
          <Scene key="exerciselesson" component={ExerciseLesson} title='Exercise' backTitle='Back'/>
          <Scene key="mindfulnesslesson" component={MindfulnessLesson} title='Mindfulness' backTitle='Back'/>
          <Scene key="sociallesson" component={SocialLesson} title='Social' backTitle='Back'/>
          <Scene key="nutritionlesson" component={NutritionLesson} title='Nutrition' backTitle='Back'/>
          <Scene key="sleeplesson" component={SleepLesson} title='Sleep' backTitle='Back'/>
          <Scene key="kickstart" component={KickStart30} title='KickStart30' header={null}/>
          <Scene key="learnmore" component={LearnMore} title='Learn More' backTitle='Back'/>
          <Scene key="quests" component={Quests} title='Quests' header={null}/>
          <Scene key='help' component={Help} backTitle='Back'/>
          <Scene key='trackingform' component={TrackingForm} title='Wellness Tracking Form' backTitle='Back'/>
          <Scene key='nutritionquest' component={NutritionQuest} title="Nutrition Quest" header={null} />
          <Scene key='mindfulnessquest' component={MindfulnessQuest} title="Mindfulness Quest" header={null}  />
          <Scene key='sleepquest' component={SleepQuest} title="sleep Quest" header={null}  />
          <Scene key='socialquest' component={SocialQuest} title="social Quest" header={null}  initial/>
          <Scene key='exercisequest' component={ExerciseQuest} title="Exercise Quest" header={null}  />
          <Scene key='feedback' component={Feedback} header={null}  title="Feedback" />
          <Scene key='statistics' component={Statistics} header={null}  title="Statistics" />
          <Scene key='settings' backTitle='Back' title='Settings' header={null} component={Settings}
          />
          <Scene key='exercisetracking' backTitle='Back' title='Exercise Tracking' component={ExerciseTracking}/>
          <Scene key='mindfulnesstracking' backTitle='Back' title='Mindfulness Tracking' component={MindfulnessTracking} />
          <Scene key='sleeptracking' backTitle='Back' title='Sleep Tracking' component={SleepTracking} />
          <Scene key='socialtracking' backTitle='Back' title='Social Tracking' component={SocialTracking}/>
          <Scene key='nutritiontracking' backTitle='Back' title='Nutrition Tracking' component={NutritionTracking}/>
          <Scene key='progress' component={Progress} backTitle='Back' title="Today's Progress"/>
          <Scene key='herointro' component={Herointro} backTitle='Back' title="Today's HERO"/>
          <Scene key='herohappy' component={HeroHappy} backTitle='Back' title="Happiness"/>
          <Scene key='heroenth' component={HeroEnth} backTitle='Back' title="Enthusiasm" />
          <Scene key='herores' component={HeroRes} backTitle='Back' title="Resilience" />
          <Scene key='heroopt' component={HeroOpt} backTitle='Back' title="Optimism" />
          <Scene key='heroment' component={HeroMent} backTitle='Back' title="Mental Wellness"/>
          <Scene key='heroscore' component={HeroScore} header={null}/>
    </Scene>

    </Router>
  )
}


export default Routercomponent