import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import { Card, CardSection, Button, ModButton } from '../components/common'
import { ExerciseButton, MindfulnessButton, NutritionButton, SleepButton, SocialButton, TrackingformButton } from '../components/roadmapbuttons'
import { Actions } from 'react-native-router-flux';
import { withProvider } from '../context/context';
import background1 from '/Users/bill/dev/React_native/Wild5/Wild5/wild5/src/images/background1.jpeg'


class EducationWellnessRoadMap extends Component {

  state = {
    completed: 0,
    counter: 0
  }
  componentDidMount(){
    let count = this.state.counter;
    this.setState({
      completed: count*6.5
    })
  }

  render() {
    return (
      <ImageBackground source={background1} style={{width: '100%', height: '100%'}}>
      <View>
        <ScrollView>
          <CardSection>
            <Text style={{textAlign:'center'}}>
              Completed: {this.state.completed}%
            </Text>
          </CardSection>
              <TrackingformButton onPress={() => Actions.trackingform()} marginRight={'25%'} marginLeft={'25%'}>
              Wellness Tracking
              </TrackingformButton>

              <ExerciseButton onPress={() => Actions.exercise1()} marginRight={'50%'} marginTop={25}>
               Exercise I 
              </ExerciseButton>
            
              {this.state.counter >= 1 ? <View><Text style={{left: '25%', marginTop:-20, fontSize: 50, color: 'gold'}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop:-20, fontSize: 50, color: 'gold'}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop:-20, fontSize: 50, color: 'gold'}}>
                .
              </Text></View> : <View><Text style={{left: '25%', marginTop:-20, fontSize: 50}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop:-20, fontSize: 50}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop:-20, fontSize: 50}}>
                .
              </Text></View>}

            
              {this.state.counter >= 1 ? <MindfulnessButton marginRight={'25%'} marginLeft={'25%'}>
               Mindfulness I 
              </MindfulnessButton> : <MindfulnessButton disabled={true} marginRight={'25%'} marginLeft={'25%'} backgroundColor={'#808080'} borderColor={'#fff'}>
               Mindfulness I 
              </MindfulnessButton>}

            
              { this.state.counter >= 2 ? <View><Text style={{alignSelf: 'center', marginTop:-20, fontSize: 50, color: 'gold'}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop:-20, fontSize: 50, color: 'gold'}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop:-20, fontSize: 50, color: 'gold'}}>
                .
              </Text></View> : <View><Text style={{alignSelf: 'center', marginTop:-20, fontSize: 50}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop:-20, fontSize: 50}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop:-20, fontSize: 50}}>
                .
              </Text></View> }

              {this.state.counter >= 2 ? <SleepButton marginLeft={'50%'}>
               Sleep I 
              </SleepButton> : <SleepButton disabled={true} marginLeft={'50%'} backgroundColor={'#808080'} borderColor={'#fff'}>
               Sleep I 
              </SleepButton>}

              <Text style={{alignSelf: 'center', marginTop:-20, fontSize: 50}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop:-20, fontSize: 50}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop:-20, fontSize: 50}}>
                .
              </Text>

              {this.state.counter >= 3 ? <SocialButton marginRight={'25%'} marginLeft={'25%'}>
               Social I 
              </SocialButton>: <SocialButton disabled={true} marginRight={'25%'} marginLeft={'25%'} backgroundColor={'#808080'} borderColor={'#fff'}>
               Social I 
              </SocialButton>}
              

              <Text style={{left: '25%', marginTop:-20, fontSize: 50}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop:-20, fontSize: 50}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop:-20, fontSize: 50}}>
                .
              </Text>

             {this.state.counter >= 4 ? <NutritionButton marginRight={'50%'} marginTop={10}>
               Nutrition I 
              </NutritionButton> : <NutritionButton disabled={true} marginRight={'50%'} marginTop={10} backgroundColor={'#808080'} borderColor={'#fff'}>
               Nutrition I 
              </NutritionButton> }

          {/* <Card>
              <ExerciseButton marginRight={'50%'} marginTop={25}>
               Exercise II 
              </ExerciseButton>
            
              <Text style={{left: '25%', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop: 10}}>
                .
              </Text>

            
              <MindfulnessButton marginRight={'25%'} marginLeft={'25%'}>
               Mindfulness II 
              </MindfulnessButton>

            
              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>

              <SleepButton marginLeft={'45%'}>
               Sleep II 
              </SleepButton>

              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>

              <SocialButton marginRight={'25%'} marginLeft={'25%'}>
               Social II 
              </SocialButton>

              <Text style={{left: '25%', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop: 10}}>
                .
              </Text>

              <NutritionButton marginRight={'50%'} marginTop={10}>
               Nutrition II 
              </NutritionButton>
          </Card> */}
        </ScrollView>
        </View>
        </ImageBackground>
    )
  }
}

export default withProvider(EducationWellnessRoadMap);