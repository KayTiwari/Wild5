import React, {Component} from 'react';
import {View, Dimensions, ScrollView, Button} from 'react-native';
import {Text, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {withAuthProvider} from '../../context/authcontext';
import BarGraph from '../../components/charts/NutriGraph';
import {compose} from '../../utils/array';
import {emptyState} from './EmptyState';

//graph of all practices + scores

const screenheight = Dimensions.get('window').height;

class NutritionStats extends Component {
  state = {
    logmeals: 0,
    MIND: 0,
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    total: 0,
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
    let data = Object.values(this.props.princData).filter(day =>
      day.hasOwnProperty('nutrition')
    );

    this.renderGraph(data);
  };

  renderGraph = data => {
    let total = data.length;
    let logmeals = 0;
    let MIND = 0;
    let breakfast = 0;
    let lunch = 0;
    let dinner = 0;
    for (let i = 0; i < data.length; i++) {
      let nutrition = data[i].nutrition;

      if (nutrition.loggedNutritionToday) {
        logmeals++;
      }
      if (nutrition.implementedMINDDietPrinciples) {
        MIND++;
      }
      if (nutrition.breakfastMeditation) {
        breakfast++;
      }
      if (nutrition.lunchMeditation) {
        lunch++;
      }
      if (nutrition.dinnerMeditation) {
        dinner++;
      }
    }
    // this.findBest(caff, elec, nap, regtime, mask, bath);
    this.setState({
      logmeals,
      MIND,
      breakfast,
      lunch,
      dinner,
      total,
    });
  };

  render() {
    return (
      <View style={{height: screenheight, backgroundColor: 'white'}}>
        <View>
          <Text
            style={{
              marginTop: '10%',
              fontSize: 28,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Nutrition Analysis
          </Text>
        </View>
        <View>
          <Icon
            name="restaurant"
            style={{fontSize: 100, textAlign: 'center', marginTop: '10%'}}
          />
          <ScrollView bounces={true}>
            <Text
              style={{
                marginTop: '5%',
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              Logged Meals: {this.state.logmeals !== 0 ? Math.round(100 - this.state.logmeals * 100 / 30) : 0} %
            </Text>
            <Text
              style={{
                marginTop: '5%',
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              Practiced MIND Diet Principles: {this.state.MIND !== 0 ? Math.round(100 - this.state.MIND * 100 / 30): 0} %
            </Text>
            <View style={{alignSelf: 'center',width:'90%', borderBottomWidth: 2,
                borderColor: '#000'}}>
            <Text
              style={{
                marginTop: '10%',
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              Practiced MINDful Meal Meditation
            </Text>
            </View>
            <Text
              style={{
                marginTop: '5%',
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              Breakfast: {this.state.breakfast !== 0 ? Math.round(100 - this.state.breakfast * 100 / 30) : 0} %
            </Text>
            <Text
              style={{
                marginTop: '5%',
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              Lunch: {this.state.lunch !== 0 ? Math.round(100 - this.state.lunch * 100 / 30) : 0} %
            </Text>
            <Text
              style={{
                marginTop: '5%',
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              Dinner: {this.state.dinner !== 0 ? Math.round(100 - this.state.dinner* 100 / 30) : 0} %
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default compose(
  withAuthProvider,
  emptyState(
    <Button
      onPress={() => Actions.nutritiontracking()}
      title="Add Nutrition Data"
    />,
    props =>
      Object.values(props.princData).filter(day =>
        day.hasOwnProperty('nutrition')
      ).length === 0
  )
)(NutritionStats);
