import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, CardSection, Button, ModButton } from '../components/common'
import { ExerciseButton, MindfulnessButton, NutritionButton, SleepButton, SocialButton } from '../components/roadmapbuttons'


class EducationWellnessRoadMap extends Component {

  state = {
    completed: 0,
    counter: 0
  }

  render() {
    return (
      <View>
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

            
              {this.state.counter >= 1 ? <MindfulnessButton marginRight={'25%'} marginLeft={'25%'}>
               Mindfulness I 
              </MindfulnessButton> : <MindfulnessButton marginRight={'25%'} marginLeft={'25%'} backgroundColor={'#808080'} borderColor={'#fff'}>
               Mindfulness I 
              </MindfulnessButton>}

            
              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>

              {this.state.counter >= 2 ? <SleepButton marginLeft={'45%'}>
               Sleep I 
              </SleepButton> : <SleepButton marginLeft={'45%'} backgroundColor={'#808080'} borderColor={'#fff'}>
               Sleep I 
              </SleepButton>}

              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center', marginTop: 10}}>
                .
              </Text>

              {this.state.counter >= 3 ? <SocialButton marginRight={'25%'} marginLeft={'25%'}>
               Social I 
              </SocialButton>: <SocialButton marginRight={'25%'} marginLeft={'25%'} backgroundColor={'#808080'} borderColor={'#fff'}>
               Social I 
              </SocialButton>}
              

              <Text style={{left: '25%', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop: 10}}>
                .
              </Text>
            
              <Text style={{left: '25%', marginTop: 10}}>
                .
              </Text>

             {this.state.counter >= 4 ? <NutritionButton marginRight={'50%'} marginTop={10}>
               Nutrition I 
              </NutritionButton> : <NutritionButton marginRight={'50%'} marginTop={10} backgroundColor={'#808080'} borderColor={'#fff'}>
               Nutrition I 
              </NutritionButton> }
          </Card>

          <Card>
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
          </Card>
        </ScrollView>
        </View>
    )
  }
}

export default EducationWellnessRoadMap