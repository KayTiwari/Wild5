import React from 'react';
import {View, Button} from 'react-native';
import {Text, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import countBy from 'lodash/countBy';
import {withAuthProvider} from '../../context/authcontext';
import {objectMax} from '../../utils/object';
import {compose} from '../../utils/array';
import {emptyState} from './EmptyState';

function MindfulStats(props) {
  const favoriteMeditation = React.useMemo(() => {
    const data = Object.values(props.princData);
    const mindfulnessTypeUsages = countBy(data, 'mindfulness.type');
    const [favoriteMindfulnessType] = objectMax(mindfulnessTypeUsages);

    return favoriteMindfulnessType;
  }, [props.princData]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Text
          style={{
            marginTop: '10%',
            fontSize: 25,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Mindfulness Reflection
        </Text>
      </View>

      <View>
        <Icon
          name="star-outline"
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
          Favorite Type of Meditation:
        </Text>
        <Text
          style={{
            marginTop: '5%',
            fontSize: 25,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          {favoriteMeditation}
        </Text>
      </View>
    </View>
  );
}

export default compose(
  withAuthProvider,
  emptyState(
    <Button
      onPress={() => Actions.mindfulnesstracking()}
      title="Add Mindfulness Data"
    />,
    props =>
      Object.values(props.princData).filter(day =>
        day.hasOwnProperty('mindfulness')
      ).length === 0
  )
)(MindfulStats);
