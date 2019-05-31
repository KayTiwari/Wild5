import React, {Component} from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Image } from 'react-native';
import { Text, Icon, Container } from 'native-base'
import { Actions } from 'react-native-router-flux'
// var Pedometer = require('react-native-pedometer');

var now = new Date();

class SleepLesson extends Component{

    state = {

    }

    render(){
        return (
            <ScrollView>
                <Container>
                    <View>
                    <Text style={styles.mainTitle}>Learn about <Text style={[styles.mainTitle, {color: 'purple'}]}>Sleep</Text></Text>
                    </View>

                    
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>Program Expectations</Text>
                        <Text style={styles.subTitle}>Implement 4 or more of the 6 sleep hygiene practices each day for 30 days</Text>
                        <Text style={styles.paragraph}>Sleep is crucial for overall good health. Lack of sleep or poor quality of sleep is connected to increased inflammation. Lack of sleep can lead to poor daytime concentration and productivity, weight gain and pain. Insomnia increases the risk of nearly every mental health and physical issue.
</Text>
                        <Text style={styles.subTitle}>6 Sleep Hygiene Practices</Text>
                        <Text style={styles.subTitle}>Avoid all electronic devices 90 minutes before bed</Text>
                        <Text style={styles.paragraph}>What classifies as an electronic device? Tv, smartphone,online games, tablets, computers, e-readers</Text>
                        <Text style={styles.subTitle}>Avoid napping during the day</Text>
                        <Text style={styles.subTitle}>Eliminate ambient light in your bedroom</Text>
                        <Text style={styles.paragraph}>Ways to achieve this? Use blackout shades. What can cause ambient light? Light from clock/radio, cell phone, windows</Text>
                        <Text style={styles.subTitle}>Enjoy a warm relaxing bath or shower prior to bedtime</Text>
                        <Text style={styles.subTitle}>Establish and stick to a regular bedtime each night, including weekends.</Text>
                        <Text style={styles.subTitle}>Avoid caffeinated drinks 0 hours before bedtime.</Text>
                </Container>
                <Container>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>I’m confused about logging my daily sleep practices on the Participant Tracking Form? What if I only implement 2 of the 6sleep hygiene practices?</Text>
                        <Text style={styles.paragraph}>Kickstart30 has 6 sleep hygiene practices.  To successfully meet the program requirements you must implement 4 or more of thee practices daily.  So, if you only implemented 2 of the 6 sleep hygiene practices, then you did not meet the daily program requirement.</Text>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>There’s no way I can avoid caffeinated drinks 10 hours before bedtime. What should I do?</Text>
                        <Text style={styles.paragraph}>We understand this is one of the more challenging sleep hygiene recommendations. Its important not to avoid recommendations that present the biggest barrier.  Accept the fact that avoiding caffeinated drinks 10 hours before bedtime won’t be very easy ut give it a try anyway.  If you caffeine consumption is extremely high, you may have to start slowly at first to avoid withdrawal symptoms, like headaches.  Remember, you have some wiggle room.  You are only being asked to implement 4 or more of the 6 sleep hygiene practices to successfully meet the program requirements for this element.</Text>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>Is lack of sleep associated with weight gain?</Text>
                        <Text style={styles.paragraph}>Absolutely! Not only is lack of sleep associated with weight gain but also attempts to lose weight are less effective vor those who don’t sleep well. Now you can see the value of a wellness intervention that combines several elements.  If you’re working hard to lose weight  but not sleeping well, you simply won’t get the results you desire.</Text>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>Why is napping a bad idea?</Text>
                        <Text style={styles.paragraph}>Breaking the habit of napping can be challenging.  However, if you continue to nap, you’re guaranteed disrupted and fragmented sleep. To ensure quality sleep, you must stop napping.  As you begin breaking this habit, you may feel extreme exhaustion.  If you do, push through it, resist the urge to nap, and ultimately you will experience the joys of restful sleep.  This is a process, so please don’t expect immediate changes in the quality of your sleep.  You will establish a very powerful pro-sleep practice if you eliminate napping during your 30-day program.</Text>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>Why do I have to avoid using all electronic devices 90 minutes before bedtime?</Text>
                        <Text style={styles.paragraph}>Melatonin is the body's natural sleep hormone and helps to regulate your sleep and waking cycles. A small gland in the brain called the pineal gland begins releasing melatonin about 90 minutes before your regular bedtime.  Any light -  but especially the blue light which is emitted from electronic devices such as smartphones, tvs, computers and tablets -  can prevent the pineal gland from releasing melatonin.  When this happens, your sleep will be negatively impacted.</Text>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>Why is ambient light a problem?</Text>
                        <Text style={styles.paragraph}>As we explained in answer 5, your body’s ability to produce melatonin is an essential component of quality sleep.  Your exposure to any ambient light - such as a night light, clock radio, a hallway light, light emitted from an electronic device - suppresses melatonin production, and that will adversely affect your sleep.  Ideally, there should be no ambient light in your bedroom.  It can be eliminated completely by using blackout shades and/or a sleep mask.  Don’t underestimate the disrupting effect ambient light has on your sleep.</Text>
            </Container>
            <Container>
                <Text style={[styles.mainTitle, {marginTop: '20%'}]}>Barriers to Success</Text>
                <Text style={styles.subTitle}>Time</Text>
                <Text style={styles.paragraph}>Set reminders: 90 minutes prior to bedtime an alert to shutoff all electronics in preparation for bedtime, and 15 minutes prior to bedtime an alert to begin bedtime preparations.</Text> 
                <Text style={styles.subTitle}>Low Motivation</Text>
                <Text style={styles.paragraph}>Acknowledge your lack of motivation on days where you want a quick nap, have a cup of coffee late in the afternoon, check your phone before bedtime, stick to your sleep hygiene practices, no matter what!! Consider enlisting the help of an accountability buddy; someone you’ll alert each day letting them know you’ve completed your wellness practices, and consider practicing the 5 Second Rule on days when you’re experiencing low motivation (See Tackling Low Motivation on page 45 for information about the 5 Second Rule).</Text> 
            </Container>
            <Container>
            <Text style={[styles.mainTitle, {marginTop: '20%'}]}>What others are saying</Text>
            <Text style={styles.paragraph}>“Incorporation of the wellness practices has enhanced my life! I never thought I could get away from napping on the weekends, but it has become a reality!  I also have more mental clarity and energy as a result of the 5 wellness practices combined”</Text>
            <Text style={styles.paragraph}>“This was a wonderful and enlightening experience as I balanced all five elements of wellness practices that were already a part of my life.  Our culture is at new heights of stress and sleep problems.  Little did I know how internet modem lights flashing my direction all night while I tried to sleep could play such a role in my poor sleep quality.  What a revelation that the world needs to hear!”</Text>
            </Container>
        </ScrollView>
        )
    }
}

export {SleepLesson};

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