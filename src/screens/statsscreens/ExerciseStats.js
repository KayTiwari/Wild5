import React from 'react';
import {View, Dimensions} from 'react-native';
import {Text, Icon} from 'native-base';
import countBy from 'lodash/countBy';
import {withAuthProvider} from '../../context/authcontext';
import {objectMax} from '../../utils/object';

const screenheight = Dimensions.get('window').height;

function ExerciseStats(props) {
  const days = React.useMemo(
    () =>
      Object.values(props.princData || {}).filter(day =>
        day.hasOwnProperty('exercise')
      ),
    [props.princData]
  );

  const avgDuration = React.useMemo(() => {
    const totalDurationExercised = days.reduce(
      (total, {exercise}) => total + exercise.duration,
      0
    );

    return Math.round(totalDurationExercised / days.length);
  }, [days]);

  const longestTime = React.useMemo(() => {
    return days.reduce(
      (longestTime, {exercise}) =>
        exercise.duration > longestTime ? exercise.duration : longestTime,
      0
    );
  }, [days]);

  const favExercise = React.useMemo(() => {
    const exerciseTypeUsages = countBy(days, 'exercise.type');
    const [favoriteExerciseType] = objectMax(exerciseTypeUsages);

    return favoriteExerciseType;
  }, [days]);

  return (
    <View style={{height: screenheight, backgroundColor: 'white'}}>
      <View>
        <Text
          style={{
            marginTop: '10%',
            fontSize: 25,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Exercise Reflection
        </Text>
      </View>

      <View>
        <Icon name="alarm" style={{textAlign: 'center', marginTop: '10%'}} />
        <Text
          style={{
            marginTop: '5%',
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Average Exercise Duration:
        </Text>
        <Text
          style={{
            marginTop: '5%',
            fontSize: 25,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          {avgDuration} minutes
        </Text>
      </View>

      <View>
        <Icon
          name="stopwatch"
          style={{textAlign: 'center', marginTop: '10%'}}
        />
        <Text
          style={{
            marginTop: '5%',
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Longest Time Exercised:
        </Text>
        <Text
          style={{
            marginTop: '5%',
            fontSize: 25,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          {longestTime} minutes
        </Text>
      </View>

      <View>
        <Icon name="bicycle" style={{textAlign: 'center', marginTop: '10%'}} />
        <Text
          style={{
            marginTop: '5%',
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Favorite Exercise:
        </Text>
        <Text
          style={{
            marginTop: '5%',
            fontSize: 25,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          {favExercise}
        </Text>
      </View>
    </View>
  );
}

export default withAuthProvider(ExerciseStats);
