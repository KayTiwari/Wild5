import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Title } from 'native-base';


class MindfulnessLesson extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container
          style={{ flex: 1, backgroundColor: '#fff' }}>
          <Tabs tabBarUnderlineStyle={{ backgroundColor: '#0AB1E7', height: 1 }}>
            <Tab heading="Learn"
              tabStyle={{ backgroundColor: 'white' }}
              textStyle={{ color: 'grey' }}
              activeTabStyle={{ backgroundColor: 'white' }}
              activeTextStyle={{ color: '#0AB1E7' }}>
              <ScrollView>
                <View style={{flex: 1}}>
                <View style={{marginBottom: 20}}>
            <Text style={styles.mainTitle}>
              Learn about{" "}
              <Text style={[styles.mainTitle, { color: "#0AB1E7" }]}>Mindfulness</Text>
            </Text>
          </View>
          <View style={{backgroundColor:"#0AB1E7", width: '85%', alignSelf: 'center', height: 80 }}>
          <Text style={{fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: '700'}}>
            Program Expectations
          </Text>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
            Practice mindfulness for at least 10 minutes each day for 30 days.
          </Text>
          </View>
       
          
        
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            What others are saying
          </Text>
          
          </View>
              </ScrollView>
            </Tab>
            <Tab heading="FAQ"
              tabStyle={{ backgroundColor: 'white' }}
              textStyle={{ color: 'grey' }}
              activeTabStyle={{ backgroundColor: 'white' }}
              activeTextStyle={{ color: '#0AB1E7' }}>
              <ScrollView>
                <View style={{flex: 1}}>
      
                </View>
              </ScrollView>
              </Tab>

            <Tab 
              heading="Barriers to Success"
              tabStyle={{ backgroundColor: 'white' }}
              textStyle={{ color: 'grey' }}
              activeTabStyle={{ backgroundColor: 'white' }}
              activeTextStyle={{ color: '#0AB1E7' }}>
              <ScrollView>
                <View style={{flex: 1}}>
                <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            Barriers to Success
          </Text>
      

                </View>
              </ScrollView>
            </Tab>
           
          </Tabs>

        </Container>
      </SafeAreaView>
    );
  }
}
export { MindfulnessLesson };


const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: "10%"
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: "20%"
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    textAlign: "center"
  }
});
