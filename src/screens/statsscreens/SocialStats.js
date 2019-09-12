import React, {Component} from 'react';
import {View, Dimensions, Button} from 'react-native';
import {Text, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import mapValues from 'lodash/mapValues';
import {withAuthProvider} from '../../context/authcontext';
import BarGraph from '../../components/charts/SocialGraph';
import {compose} from '../../utils/array';
import {emptyState} from './EmptyState';

//graph of all practices + scores

const screenheight = Dimensions.get('window').height;

class SocialStats extends Component {
  state = {
    calledFriend: 0,
    metFriendInPerson: 0,
    calledFamily: 0,
    metFamilyInPerson: 0,
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
    const data = Object.values(this.props.princData)
      .filter(day => day.hasOwnProperty('social'))
      .map(day => day.social);

    this.renderGraph(data);
  };

  renderGraph = data => {
    console.log(data);
    const stats = data.reduce(
      (totals, activities) => {
        return mapValues(
          totals,
          (total, key) => total + Number(activities[key])
        );
      },
      {
        calledFriend: 0,
        metFriendInPerson: 0,
        calledFamily: 0,
        metFamilyInPerson: 0,
      }
    );

    this.setState(stats);
  };

  render() {
    const total = this.props.princData && this.props.princData.length;
    const {calledFriend,metFriendInPerson,calledFamily,metFamilyInPerson} = this.state
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
            Social Connectedness Reflection
          </Text>
        </View>
         <View>
          <Icon
            name="bonfire"
            style={{ fontSize: 100,textAlign: 'center', marginTop: '10%'}}
          />
          <Text
            style={{
              marginTop: '5%',
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Called Friend: {calledFriend !== 0 ? Math.round(100 - calledFriend * 100 / 30) : 0} %
          </Text>
          <Text
            style={{
              marginTop: '5%',
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Met Friend in Person: {metFriendInPerson !== 0 ? Math.round( 100 - metFriendInPerson * 100 / 30) : 0} %
          </Text>
          <Text
            style={{
              marginTop: '5%',
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Called Family {calledFamily !== 0 ? Math.round(100 - calledFamily * 100 / 30) : 0} %
          </Text>
          <Text
            style={{
              marginTop: '5%',
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Met Family in Person: {metFamilyInPerson !== 0 ? Math.round(100 - metFamilyInPerson * 100 / 30) : 0} %
          </Text>
        </View>
      </View>
    );
  }
}

export default compose(
  withAuthProvider,
  emptyState(
    <Button onPress={() => Actions.socialtracking()} title="Add Social Data" />,
    props =>
      Object.values(props.princData).filter(day => day.hasOwnProperty('social'))
        .length === 0
  )
)(SocialStats);
