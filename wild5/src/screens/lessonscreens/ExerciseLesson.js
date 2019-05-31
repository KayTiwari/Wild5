import React, {Component} from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Image } from 'react-native';
import { Text, Icon, Container } from 'native-base'
import { Actions } from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


class ExerciseLesson extends Component{

    state = {

    }

    render(){
        return (
            <ScrollView>
                <Container>
                    <View>
                    <Text style={styles.mainTitle}>Learn about <Text style={[styles.mainTitle, {color: 'green'}]}>Exercise</Text></Text>
                    </View>

                    
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>F.I.D</Text>
                        <Text style={styles.subTitle}>Frequency</Text>
                        <Text style={styles.paragraph}>Exercise is recommended to be done every day for 7 days a week.</Text>
                        <Text style={styles.subTitle}>Intensity</Text>
                        <Text style={styles.paragraph}>Exercise done is recommended to be at moderate intensity. This optimizes brain and mental health benefits. You know you're at moderate intensity when you have trouble speaking in full sentences.
                        Method to calculate heart rate: 
                        </Text>
                        <Text style={styles.subTitle}>Duration</Text>
                        <Text style={styles.paragraph}>Recommended duration is for 30 minutes during a session.</Text>
                    
                </Container>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>Why Exercise?</Text>
                        <Text style={styles.paragraph}>There is an impressive amount of evidence showing that exercise, if done correctly, is not only good for a person's mental and physical health , but also leads to positive brain and body changes.  Including exercise in this wellness program makes sense and offers all participants a chance to reap the many associated benefits.</Text>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>What type of exercise is recommended?</Text>
                        <Text style={styles.paragraph}>Acceptable types of exercise are(including but not limited to):-walking-jogging-biking-tennis-swimming-weight lifting-aerobics-water aerobics.Unacceptable types:-yoga</Text>
                <View>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>What if I’m already exercising and meeting the programs criteria for FID? Do I need to make any changes?</Text>
                        <Text style={styles.paragraph}>No, you do not need to make any changes. Just make sure you're meeting the principles of FID and keep up the good work.</Text> 
                </View>
                <View>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>What if I don’t have time to exercise for 30 minutes?</Text>
                        <Text style={styles.paragraph}>Creating the time for exercise is necessary if mind-body health is one of your top priorities. Here’s some good news - breaking down your 30 minutes of exercise in 2 15 minutes sections or 3 10 minutes is perfectly acceptable.  You will receive the same mind & body benefits, regardless of the way you structure the timing of your exercise routine. </Text>   
                </View>
            <Container>
            <View>
                <Text style={[styles.mainTitle, {marginTop: '20%'}]}>Barriers to Success</Text>
                <Text style={[styles.subTitle, {marginTop: '5%'}]}>Time</Text>
                <Text style={styles.paragraph}>Add exercise to your calendar and set reminder alerts.</Text> 
                <Text style={[styles.subTitle, {marginTop: '5%'}]}>Physical Limitations</Text>
                <Text style={styles.paragraph}>consult with healthcare provider, physical limitations may require you to modify your exercise plans and that is perfectly OK.</Text> 
                <Text style={[styles.subTitle, {marginTop: '5%'}]}>Weather</Text>
                <Text style={styles.paragraph}>Plan accordingly, have a backup plan. Exercise in your home, at a gym or walk in a mall.</Text> 
                <Text style={[styles.subTitle, {marginTop: '5%'}]}>Low Motivation</Text>
                <Text style={styles.paragraph}>Acknowledge your lack of motivation. Push yourself to do it anyways. Team up with workout buddy. Have your workout clothes packed the night before. Get an accountability buddy. Consider the 5 second rule when experiencing low motivation</Text> 
            </View>
            </Container>
            <Container style={{marginBottom: 0, height: '90%'}}>
            <Text style={[styles.mainTitle, {marginTop: '0%'}]}>What others are saying</Text>
            <Text style={styles.paragraph}>“The exercise part got me sleeping much better and feeling better” I felt like I was accountable to someone for working out vs. just telling myself that I was supposed to work out everyday.”</Text>
            <Text style={styles.paragraph}>“I think exercise must have released a lot of endorphins or something because it would really bring my mood up for the whole rest of the day if I did the jogging or whatever.”</Text>
            </Container>
        </ScrollView>
        )
    }
}

export {ExerciseLesson};

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '10%'
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '20%'
    },
    paragraph: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        textAlign: 'center'
    }
})