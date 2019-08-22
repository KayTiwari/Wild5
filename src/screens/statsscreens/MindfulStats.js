import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {Text, Icon} from 'native-base';
import {withAuthProvider} from '../../context/authcontext';
import countBy from 'lodash/countBy';

const screenheight = Dimensions.get('window').height;

class MindfulStats extends Component {
  state = {
    favmedi: '',
  };

  componentWillMount() {
    if (this.props.princData) {
      this.calculateStats();
    }
  }
  componentDidMount() {
    if (this.props.princData) {
      this.calculateStats();
    }
  }
  componentWillReceiveProps() {
    if (this.props.princData) {
      this.calculateStats();
    }
  }

  calculateStats = () => {
    let data = Object.values(this.props.princData);
    this.favMeditation(data);
  };

  favMeditation = data => {
    const mindfulnessTypeUsages = countBy(data, 'mindfulness.type');
    const [favoriteExerciseType] = this.objectMax(mindfulnessTypeUsages);

    this.setState({favmedi: favoriteExerciseType});
  };

  objectMax = object => {
    return Object.entries(object).reduce(
      ([maxKey, maxValue], [key, value]) => {
        if (value > maxValue) {
          return [key, value];
        } else {
          return [maxKey, maxValue];
        }
      },
      ['', -Infinity]
    );
  };

  render() {
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
            {this.state.favmedi}
          </Text>
        </View>
      </View>
    );
  }
}

export default withAuthProvider(MindfulStats);
