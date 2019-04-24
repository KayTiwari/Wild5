import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, CardSection, Button, ModButton } from '../components/common'


class EducationWellnessRoadMap extends Component {

  state = {

  }

  render() {
    return (
        <ScrollView>
          <Card>
              <Button style={{}}>
               Exercise I 
              </Button>
            
              <Text>
                .
              </Text>
              .
            
              <Text>
                .
              </Text>
            
              <Text>
                .
              </Text>

            
              <Button>
               Mindfulness I 
              </Button>

            
              <Text style={{alignSelf: 'center'}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center'}}>
                .
              </Text>
            
              <Text style={{alignSelf: 'center'}}>
                .
              </Text>

              <Button>
               Sleep I 
              </Button>
          </Card>
        </ScrollView>
    )
  }
}

export default EducationWellnessRoadMap