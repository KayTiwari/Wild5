import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, CardSection, Button, ModButton } from '../components/common'
import { ExerciseButton, MindfulnessButton, NutritionButton, SleepButton, SocialButton } from '../components/roadmapbuttons'


class EducationWellnessRoadMap extends Component {

  state = {
    completed: 0
  }

  render() {
    return (
        <ScrollView>
          <CardSection>
            <Text style={{textAlign:'center'}}>
              Completed: {this.state.completed}%
            </Text>
          </CardSection>
          <Card>
              <ExerciseButton marginRight={'50%'} marginTop={25}>
               Exercise I 
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
               Mindfulness I 
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
               Sleep I 
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
               Social I 
              </SocialButton>
          </Card>
        </ScrollView>
    )
  }
}

export default EducationWellnessRoadMap