import React, {Component} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {Text} from 'native-base';
import BarGraph from '../../components/charts/BarGraph';
import {withAuthProvider} from '../../context/authcontext';
import {EXERCISE_INTENSITY} from '../trackingscreens/ExerciseTracking';

const screenheight = Dimensions.get('window').height;

const MAX_POINTS_PER_DAY = 3;

class PrincipleStats extends Component {
  state = {};

  componentWillMount() {
    if (this.props.princData) {
      this.returnTotal(this.props.princData);
    }
  }
  componentDidMount() {
    if (this.props.princData) {
      this.returnTotal(this.props.princData);
    }
  }
  componentWillReceiveProps() {
    if (this.props.princData) {
      this.returnTotal(this.props.princData);
    }
  }

  returnTotal = data => {
    let total = Object.keys(data).length * 3;
    if (total > 90) {
      total = 90;
    }
    this.setState({
      total,
    });
    this.renderGraph();
  };

  renderGraph = () => {
    let exval = this.exercisecalc();
    let mindval = this.mindcalc();
    let sleepval = this.sleepcalc();
    let socval = this.soccalc();
    let nutrval = this.nutrcalc();
    this.setState({
      exval,
      mindval,
      sleepval,
      socval,
      nutrval,
    });
    console.log(this.state);
  };

  exercisecalc = () => {
    const days = Object.values(this.props.princData).filter(day =>
      day.hasOwnProperty('exercise')
    );

    return days.reduce((total, {exercise}) => {
      if (exercise.duration >= 30) {
        total += 1;
      }

      if (
        exercise.intensity === EXERCISE_INTENSITY.MODERATE ||
        exercise.intensity === EXERCISE_INTENSITY.HIGH
      ) {
        total += 1;
      }

      if (exercise.type) {
        total += 1;
      }

      return total;
    }, 0);
  };

  mindcalc = () => {
    let v = 0;
    let i = 0;
    let values = Object.values(this.props.princData);
    for (var k = 0; k < values.length; k++) {
      i = 0;
      if (values[k].mindprac) {
        i = i + 1;
        console.log(v);
      }
      if (values[k].mindtype && values[k].mindtype !== 'None') {
        i = i + 1;
        console.log(v);
      }
      if (i === 2) {
        v += 3;
      } else if (i === 1) {
        v += 1;
      }
    }
    return v;
  };

  sleepcalc = () => {
    let i = 0;
    let v = 0;
    let values = Object.values(this.props.princData);
    for (var k = 0; k < values.length; k++) {
      if (values[k].slcaffeine) {
        i = i + 1;
      }
      if (values[k].slelectronics) {
        i = i + 1;
      }
      if (values[k].slnapping) {
        i = i + 1;
      }
      if (values[k].slregulartime) {
        i = i + 1;
      }
      if (values[k].slsleepmask) {
        i = i + 1;
      }
      if (values[k].slwarmbath) {
        i = i + 1;
      }
      if (i >= 4) {
        v = v + 3;
      } else if (i >= 2 && i <= 3) {
        v = v + 2;
      } else if (i === 1) {
        v = v + 1;
      } else {
        v = v + i;
      }
    }
    return v;
  };

  soccalc = () => {
    // Grab every day recorded for the user
    const days = Object.values(this.props.princData).filter(day =>
      day.hasOwnProperty('social')
    );

    const sum = arr => arr.reduce((sum, num) => sum + num, 0);

    return days.reduce((total, {social}) => {
      // Convert the number of completed connections to an array of numbers
      // Example: {calledFriend: true, metWithFriend: false} -> [1, 0]
      const todaysConnections = Object.values(social).map(didConnect =>
        Number(didConnect)
      );

      // The day is considered completed if you made at least 2 connections
      const totalConnections = sum(todaysConnections);
      const dayIsCompleted = totalConnections >= 2;

      // If the day is completed, add it to the total
      return total + (dayIsCompleted ? MAX_POINTS_PER_DAY : totalConnections);
    }, 0);
  };

  nutrcalc = () => {
    let v = 0;
    let i = 0;
    let values = Object.values(this.props.princData);
    for (var k = 0; k < values.length; k++) {
      if (values[k].nutrlogged) {
        i = i + 1;
      }
      if (values[k].MIND) {
        i = i + 1;
      }
      if (values[k].breakfast) {
        i = i + 1;
      }
      if (values[k].nutrlunch) {
        i = i + 1;
      }
      if (values[k].nutrdinner) {
        i = i + 1;
      }
      if (i === 5) {
        v = v + 3;
      } else if (i === 3 || i === 4) {
        v = v + 2;
      } else if (i === 2) {
        v = v + 1;
      } else {
        v = i;
      }
    }
    return v;
  };

  render() {
    return (
      <View style={{backgroundColor: 'white', height: screenheight * 1.2}}>
        <ScrollView bounces={false}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '600',
              textAlign: 'center',
              marginTop: '5%',
            }}
          >
            5 Practices
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              textAlign: 'center',
              marginTop: '5%',
              marginLeft: '5%',
              marginRight: '5%',
            }}
          >
            Principle scores against each other
          </Text>
          {/* <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '5%', marginBottom:'5%'}}>30 Days Graph</Text> */}
          {this.state.exval ||
          this.state.mindval ||
          this.state.sleepval ||
          this.state.socval ||
          this.state.nutrval ? (
            <BarGraph
              exval={this.state.exval}
              mindval={this.state.mindval}
              sleepval={this.state.sleepval}
              socval={this.state.socval}
              nutrval={this.state.nutrval}
            />
          ) : (
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                textAlign: 'center',
                marginTop: '15%',
                marginBottom: '5%',
              }}
            >
              No Graph Data to show :S
            </Text>
          )}
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              textAlign: 'center',
              marginTop: '5%',
            }}
          >
            You can earn 3 points a day
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              textAlign: 'center',
              marginTop: '3%',
              marginBottom: '2%',
            }}
          >
            Current Max: {this.state.total}
          </Text>
          <ScrollView bounces={false}>
            {this.state.exval ||
            this.state.mindval ||
            this.state.sleepval ||
            this.state.socval ||
            this.state.nutrval ? (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '3%',
                  color: 'green',
                }}
              >
                Exercise: {this.state.exval} / {this.state.total}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '15%',
                  marginBottom: '5%',
                }}
              >
                No exercise data
              </Text>
            )}
            {this.state.exval ||
            this.state.mindval ||
            this.state.sleepval ||
            this.state.socval ||
            this.state.nutrval ? (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '3%',
                  color: 'blue',
                }}
              >
                Mindfulness: {this.state.mindval} / {this.state.total}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '15%',
                  marginBottom: '5%',
                }}
              >
                No mindfulness data
              </Text>
            )}
            {this.state.exval ||
            this.state.mindval ||
            this.state.sleepval ||
            this.state.socval ||
            this.state.nutrval ? (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '3%',
                  color: 'purple',
                }}
              >
                Sleep: {this.state.sleepval} / {this.state.total}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '15%',
                  marginBottom: '5%',
                }}
              >
                No sleep data
              </Text>
            )}
            {this.state.exval ||
            this.state.mindval ||
            this.state.sleepval ||
            this.state.socval ||
            this.state.nutrval ? (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '3%',
                  color: 'red',
                }}
              >
                Social: {this.state.socval} / {this.state.total}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '15%',
                  marginBottom: '5%',
                }}
              >
                No social data
              </Text>
            )}
            {this.state.exval ||
            this.state.mindval ||
            this.state.sleepval ||
            this.state.socval ||
            this.state.nutrval ? (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '3%',
                  color: 'orange',
                }}
              >
                Nutrition: {this.state.nutrval} / {this.state.total}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '15%',
                  marginBottom: '5%',
                }}
              >
                No nutrition data
              </Text>
            )}
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

export default withAuthProvider(PrincipleStats);
