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
          <Text style={styles.mainTitle}>What is Mindfulness?</Text>
          <Text style={styles.paragraph}>Experiences Demonstrating Mindfulness</Text>
          <Text style={styles.paragraph}>You probably had the experience of driving in your car and arriving at your destination without remembering how you got there</Text>
          <Text style={styles.paragraph}>There may be time when you realize that your plate is empty, shortly after you sit down to eat a meal, but you have no memory of eating</Text>
          <Text style={styles.paragraph}>When you engage in these behaviors it's as if you're on "autopilot".  When you're on autopilot you are missing out on living your life fully and are at greater risk for feeling unhappy</Text>
          <Text style={styles.paragraph}>Opposite of mindless, autostate, autopilot</Text>
          <Text style={styles.paragraph}>""Paying attention in a particular way: on purpose, in the present moment, and non-judgementally" -Dr. Jon Kabat-Zinn</Text>
          <Text style={styles.paragraph}>Paying Attention on purpose</Text>

       
          
        
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            What others are saying
          </Text>
          <Text style={styles.paragraph}>
          “I have not done mindful meditation in the past and this program has really helped me to do this. We have sometimes done the meditation early (before I have really woken up) and I am semi-awake for the time. I am doing more breathing meditations and really like both the Gratitude and the Happiness meditations. We are still using them even after the program.”
          </Text>
          <Text style={styles.paragraph}>
          “I attempt to take time everyday to meditate, do deep breathing and stretching. It really starts my day off well”
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
                <Text style={[styles.mainTitle, {marginTop: '20%'}]}>
                Why is mindfulness part of KickStart30
        </Text>
        <Text style={styles.paragraph}>
        There is extremely solid evidence supporting the effectiveness of mindfulness in improving overall mental and physical wellness. There is now convincing evidence that those that regularly practice mindfulness can change the size and functioning of their brains. Mindfulness also alters and improves immune functioning. Best of all, regular mindfulness practice makes us more resilient and improves our wellbeing. It’s a star member of KickStart30!
        </Text>
        <View>
          <Text style={[styles.mainTitle, {marginTop: '20%'}]}>
          I have never practiced mindfulness. I’m too intimidated to begin. How do I get started?
          </Text>
          <Text style={styles.paragraph}>
          You’re not alone - we completely understand! Please know that despite these hesitations, anyone can begin and grow a mindfulness-based practice. You have several options regarding which guided meditations to use: 
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
            exercise routine.
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
              activeTextStyle={{ color: '#0AB1E7' }}>
              <ScrollView>
                <View style={{flex: 1}}>
                <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            Barriers to Success
          </Text>
          <Text style={[styles.subTitle, {marginTop: '5%'}]}>Time</Text>
            <Text style={styles.paragraph}>
            We suggest adding your mindfulness-based meditation practice plan to your calendar and set reminder alerts to ensure that you meet your goals. To avoid interruptions, let family and friends know when you will be meditating.
            </Text>
            <Text style={[styles.subTitle, {marginTop: '5%'}]}>
              Low Motivation
            </Text>
            <Text style={styles.paragraph}>
            Acknowledge your lack of drive/motivation as a common feeling when beginning your mindfulness-based practice. On days when you don’t feel like meditating, or you are struggling with the practice, make it happen anyway - no matter what! Remember, when you are doing your mindfulness-based meditation, you may encounter feelings of frustration or boredom. No matter what feelings you encounter - good, bad, or indifferent - stick with the practice, knowing there is no right or wrong way to meditate. A couple of other suggestions: 
            -Consider enlisting the help of an accountability buddy; someone you’ll alert each day letting them know you’ve completed your wellness practices.
            -Consider practicing the 5 Second Rule On days when you’re experiencing low motivation.

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
