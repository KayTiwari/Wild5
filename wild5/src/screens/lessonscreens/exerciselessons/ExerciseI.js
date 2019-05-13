import React, {Component} from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { ModButton } from '../../../components/common';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { SimpleStepper } from 'react-native-simple-stepper'; 
// import Pedometer from '../../../components/expo/PedometerSensor';

class ExerciseI extends Component{

    state = {
        question1value: 0,
        question2value: 0,
        question3value: 0,
        question1: 0,
        question2: 0,
        question3: 0,
        wrong1: '',
        correct1: '',
        correct2: '',
        correct3: '',
        
    }

    isCorrect = (value) => {
        this.setState({
            wrong: ''
        })
        if (this.state.question1value === 1) {
            this.setState({
                question1: 1,
                correct1: 'Well done! Move on to the next section.',
            })
        } else {
            this.setState({
                wrong: 'Try again?',
                correct1: ''
            })
        }
    }

    isCorrect2 = () => {
        this.setState({
            wrong: ''
        })
        if (this.state.question2value === 1) {
            this.setState({
                question2: 1,
                correct2: 'Awesome, keep going!',
            })
        } else {
            this.setState({
                wrong: 'Try again?',
                correct2: ''
            })
        }
    }
    isCorrect3 = () => {
        this.setState({
            wrong: ''
        })
        if (this.state.question3value === 1) {
            this.setState({
                question3: 1,
                correct3: 'You did a great job this lesson.',
            })
        } else {
            this.setState({
                wrong: 'Try again?',
                correct3: ''
            })
        }
    }

    wasItCorrect = () => {

    }

    render(){
    let screenwidth = Dimensions.get('window').width;
    let screenheight = Dimensions.get('window').height;
    return (
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
                <View style={{
                    backgroundColor: '#5f9ea0',
                    flex: 1,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 30,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Exercise Lesson I</Text>
                    <Text style={{
                    fontSize: 40,
                    padding: 15,
                    marginBottom: 200,
                    textAlign: 'center',
                    color: 'white'}}>FID</Text>
                </View>

                <View style={{
                    backgroundColor: 'tomato',
                    flex: 1,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 40,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Frequency</Text>
                    <Text style={{
                    fontSize: 30,
                    padding: 15,
                    marginBottom: 200,
                    textAlign: 'center',
                    color: 'white'}}>We must exercise Frequently. This means, aim for seven days a week!</Text>
                </View>
                <View style={{
                    backgroundColor: 'tomato',
                    flex: 1,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 40,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>How many days a week should we exercise?</Text>
                    <RadioForm
                    radio_props= {[
                        {label: '5', value: 0 },
                        {label: '6', value: 0 },
                        {label: '7', value: 1 },
                        {label: '8', value: 0 },
                      ]}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#5a8f30'}
                    animation={true}
                    onPress={(value) => this.setState({question1value: value})}
                    />
                    <ModButton style={{marginTop: 10}} label="Think you're correct?" onPress={this.isCorrect}></ModButton>
                    <Text>{this.state.wrong}</Text><Text>{this.state.correct1}</Text>
                </View>

                {this.state.question1 === 1 ? <View style={{
                    backgroundColor: '#663399',
                    flex: 1,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 40,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Intensity</Text>
                    <Text style={{
                    fontSize: 30,
                    padding: 15,
                    marginBottom: 100,
                    textAlign: 'center',
                    color: 'white'}}>The Intensity of exercise must be at least moderately intense, otherwise brain
                    benefits are less. You may be wondering what qualifies as moderately intense
                    exercise. The easiest way to know you've achieved moderately intense exercise
                    is when having a conversation with your workout buddy is difficult because you
                    are winded </Text>
                </View> : null}
                {this.state.question1 === 1 ? <View style={{
                    backgroundColor: '#663399',
                    flex: 1,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 40,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>According to Wild5, what is the best intensity for exercise?</Text>
                    <RadioForm
                    radio_props= {[
                        {label: 'Low', value: 0 },
                        {label: 'Moderate', value: 1 },
                        {label: 'High', value: 0 },
                      ]}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#5a8f30'}
                    animation={true}
                    onPress={(value) => this.setState({question2value: value})}
                    />
                    <ModButton label="Give it a shot" onPress={this.isCorrect2}></ModButton>
                    <Text>{this.state.wrong}</Text><Text>{this.state.correct2}</Text>
                </View> : null}


                {this.state.question2 === 1 ?<View style={{
                    backgroundColor: '#8EE4AF',
                    flex: 1,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 40,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Duration</Text>
                    <Text style={{
                    fontSize: 30,
                    padding: 15,
                    marginBottom: 200,
                    textAlign: 'center',
                    color: 'white'}}>Duration of exercise requires that we exercise at least 30-minutes per day. If you
                    want to exercise more, please do. </Text>
                </View> : null}
                {this.state.question2 === 1 ? <View style={{
                    backgroundColor: '#8EE4AF',
                    flex: 1,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 40,
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>What is the best duration for exericse?</Text>
                    <RadioForm
                    radio_props= {[
                        {label: '10 minutes', value: 0 },
                        {label: '20 minutes', value: 0 },
                        {label: '30 minutes', value: 1 },
                        {label: 'All day', value: 0 },
                      ]}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={'#5a8f30'}
                    animation={true}
                    onPress={(value) => this.setState({question3value: value})}
                    />
                    <ModButton label="Last one, you got this!" onPress={this.isCorrect3}></ModButton>
                    <Text>{this.state.wrong}</Text><Text>{this.state.correct3}</Text>
                </View> : null}


                {this.state.question3 === 1 ? <View style={{
                    backgroundColor: 'yellow',
                    flex: 1,
                    width: screenwidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: '700',
                    padding: 50,
                    textAlign: 'center',
                    color: 'white'
                    }}>Lesson Completed</Text>
                    <Text style={{
                    fontSize: 30,
                    padding: 15,
                    fontWeight: '600',
                    marginBottom: 200,
                    textAlign: 'center',
                    color: 'white'}}>Feel free to review what you learned or move on to the next lesson </Text>
                </View> : null}
        </ScrollView>
    )
    }
}

export default ExerciseI;