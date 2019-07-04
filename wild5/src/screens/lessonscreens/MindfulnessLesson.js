import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
} from 'react-native';
import {Text, Icon, Container} from 'native-base';
import {Actions} from 'react-native-router-flux';
import background from '../../images/mindfulnesslesson.jpeg';

var now = new Date();

screenheight = Dimensions.get('window').height;

class MindfulnessLesson extends Component {
    render(){
        return (
            <ScrollView>
                <Container>
                    <ImageBackground source={background} style={{width: '100%', zIndex: -100, height: screenheight*1, resizeMode: 'contain'}} >
                        </ImageBackground>
                    <View style={{position: 'absolute', top: 0, left: 0, zIndex: 1000}}>
                    <Text style={styles.mainTitle}>Learn about <Text style={[styles.mainTitle, {color: '#0AB1E7'}]}>Mindfulness</Text></Text>
                    </View>

                        <Text style={styles.subTitle}>What is mindfulness?</Text>
                        <Text style={styles.paragraph}>Experiences demonstrating mindlessness</Text>
                        <Text style={styles.subTitle}>-You probably had the experience of driving in your car and arriving at your destination without remembering how you got there.</Text>
                        <Text style={styles.paragraph}>-Or, there may be times when you realize that your plate is empty , shortly after you sit down to eat a meal, but you have no memory of eating. 
                        </Text>
                        <Text style={styles.subTitle}>-When you engage in these behaviors its as if you're on “autopilot”.  When you’re on autopilot you are missing out on living your life fully are are at greater risk for feeling unhappy.</Text>
                        <Text style={styles.paragraph}>-opposite of of mindless, autostate pilot.</Text>
                </Container>
                <Text>”paying attention in a particular way: on purpose, in the present moment, and non-judgmentally.”m- Dr. Jon Kabat-Zinn.</Text>
                <Container>
                        <Text style={[styles.mainTitle, {marginTop: '20%'}]}>Mindfulness Meditations</Text>
                        
                    <Button onPress={() => Actions.mindfulnessquest()} title="Mindfulness Meditations"></Button>

            </Container>
                    <View style={{position: 'absolute', backgroundColor: 'black', opacity: 0.5, height:screenheight, width: '100%', top: 0, left: 0}}></View>
        </ScrollView>
        )
  }
}

export {MindfulnessLesson};

const styles = StyleSheet.create({

    mainTitle: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '10%',
        color:'white',
        zIndex: 1000
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '20%',
        color: 'white',
        zIndex: 1000
    },
    paragraph: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        textAlign: 'center',
        color: 'white',
        zIndex: 1000
    }
})