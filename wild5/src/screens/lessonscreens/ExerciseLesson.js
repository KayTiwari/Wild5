import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Title } from 'native-base';


class ExerciseLesson extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container
          style={{ flex: 1, backgroundColor: '#fff' }}>
          <Tabs tabBarUnderlineStyle={{ backgroundColor: '#72B83E', height: 1 }}>
            <Tab heading="Learn"
              tabStyle={{ backgroundColor: 'white' }}
              textStyle={{ color: 'grey' }}
              activeTabStyle={{ backgroundColor: 'white' }}
              activeTextStyle={{ color: '#72B83E' }}>
              <ScrollView>
                <View style={{flex: 1}}>
                <View style={{marginBottom: 20}}>
            <Text style={styles.mainTitle}>
              Learn about{" "}
              <Text style={[styles.mainTitle, { color: "#72B83E" }]}>Exercise</Text>
            </Text>
          </View>
          <View style={{backgroundColor:"#72B83E", width: '85%', alignSelf: 'center', height: 80 }}>
          <Text style={{fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: '700'}}>
            Program Expectations
          </Text>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
            Exercise 30 minutes each day for 30 days, aim for at least moderate intensity
          </Text>
          </View>
          <Text style={[styles.mainTitle, {marginTop: '20%'}]}>F.I.D</Text>
            <Text style={styles.subTitle}>Frequency</Text>
            <Text style={styles.paragraph}>
              Exercise is recommended to be done every day for 7 days a week.
            </Text>
            <Text style={styles.subTitle}>Intensity</Text>
            <Text style={styles.paragraph}>
              Exercise done is recommended to be at moderate intensity. This
              optimizes brain and mental health benefits. You know you're at
              moderate intensity when you have trouble speaking in full
              sentences. Method to calculate heart rate:
            </Text>
            <Text style={styles.subTitle}>Duration</Text>
            <Text style={{alignSelf: 'center', marginTop: '5%', marginLeft: '5%',
    marginRight: '5%'}}>
              Recommended duration is for 30 minutes during a session.
            </Text>
            <Text style={{ alignSelf: 'center', fontSize: 30, fontWeight: '600'}}>
          Why Exercise?
        </Text>
        <Text style={styles.paragraph}>
          There is an impressive amount of evidence showing that exercise, if
          done correctly, is not only good for a person's mental and physical
          health , but also leads to positive brain and body changes. Including
          exercise in this wellness program makes sense and offers all
          participants a chance to reap the many associated benefits.
        </Text>
          </View>
              </ScrollView>
            </Tab>
            <Tab heading="FAQ"
              tabStyle={{ backgroundColor: 'white' }}
              textStyle={{ color: 'grey' }}
              activeTabStyle={{ backgroundColor: 'white' }}
              activeTextStyle={{ color: '#72B83E' }}>
              <ScrollView>
                <View style={{flex: 1}}>
                    <Text style={[styles.mainTitle, {marginTop: '20%'}]}>
          What type of exercise is recommended?
        </Text>
        <Text style={styles.paragraph}>
          Acceptable types of exercise are(including but not limited
          to):-walking-jogging-biking-tennis-swimming-weight
          lifting-aerobics-water aerobics.Unacceptable types:-yoga
        </Text>
        <View>
          <Text style={[styles.mainTitle, {marginTop: '20%'}]}>
            What if I’m already exercising and meeting the programs criteria for
            FID? Do I need to make any changes?
          </Text>
          <Text style={styles.paragraph}>
            No, you do not need to make any changes. Just make sure you're
            meeting the principles of FID and keep up the good work.
          </Text>
        </View>
        <View>
          <Text style={[styles.mainTitle, {marginTop: '20%'}]}>
            What if I don’t have time to exercise for 30 minutes?
          </Text>
          <Text style={styles.paragraph}>
            Creating the time for exercise is necessary if mind-body health is
            one of your top priorities. Here’s some good news - breaking down
            your 30 minutes of exercise in 2 15 minutes sections or 3 10 minutes
            is perfectly acceptable. You will receive the same mind & body
            benefits, regardless of the way you structure the timing of your
            exercise routine.{' '}
          </Text>
                </View>
                </View>
              </ScrollView>
              </Tab>
              

            <Tab 
              heading="Barriers to Success"
              tabStyle={{ backgroundColor: 'white' }}
              textStyle={{ color: 'grey' }}
              activeTabStyle={{ backgroundColor: 'white' }}
              activeTextStyle={{ color: '#72B83E' }}>
              <ScrollView>
                <View style={{flex: 1}}>
                <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            Barriers to Success
          </Text>
          <Text style={[styles.subTitle, {marginTop: '5%'}]}>Time</Text>
            <Text style={styles.paragraph}>
              Add exercise to your calendar and set reminder alerts.
            </Text>
            <Text style={[styles.subTitle, {marginTop: '5%'}]}>
              Physical Limitations
            </Text>
            <Text style={styles.paragraph}>
              consult with healthcare provider, physical limitations may require
              you to modify your exercise plans and that is perfectly OK.
            </Text>
            <Text style={[styles.subTitle, {marginTop: '5%'}]}>Weather</Text>
            <Text style={styles.paragraph}>
              Plan accordingly, have a backup plan. Exercise in your home, at a
              gym or walk in a mall.
            </Text>
            <Text style={[styles.subTitle, {marginTop: '5%'}]}>
              Low Motivation
            </Text>
            <Text style={styles.paragraph}>
              Acknowledge your lack of motivation. Push yourself to do it
              anyways. Team up with workout buddy. Have your workout clothes
              packed the night before. Get an accountability buddy. Consider the
              5 second rule when experiencing low motivation
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
export { ExerciseLesson };


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
