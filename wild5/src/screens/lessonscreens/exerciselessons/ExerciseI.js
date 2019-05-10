import React, {Component} from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';


class ExerciseI extends Component{
    state = {
        question1: 0,
        question2: 0,
        question3: 0,
        wrong: '',
        correct: ''
        
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
                    onPress={(value) => {this.setState({question1: value})}}
                    />
                </View>

                <View style={{
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
                </View>
                <View style={{
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
                    onPress={(value) => {this.setState({question2: value})}}
                    />
                </View>


                <View style={{
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
                </View>
                <View style={{
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
                    onPress={(value) => {this.setState({question3: value})}}
                    />
                </View>


                <View style={{
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
                </View>
        </ScrollView>
    )
    }
}

export default ExerciseI;