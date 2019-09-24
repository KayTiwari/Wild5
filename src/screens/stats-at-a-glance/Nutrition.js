import React from 'react';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {StatTile} from './StatTile';

const sum = arr => arr.reduce((total, num) => total + num, 0);

export function Nutrition(props) {
  const goalMetTotal = React.useMemo(
    () =>
      Object.values(props.data).reduce((total, {loggedNutritionToday}) => {
        return total + Number(Boolean(loggedNutritionToday));
      }, 0),
    [props.data]
  );

  return (
    <StatTile
      value={goalMetTotal / 30}
      onPress={() => Actions.nutristats()}
      progressColor="#f89829"
      header="Nutrition"
      goalMetTotal={goalMetTotal}
    />
  );
}

Nutrition.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      loggedNutritionToday: PropTypes.bool,
      implementedMINDDietPrinciples: PropTypes.bool,
      breakfastMeditation: PropTypes.bool,
      lunchMeditation: PropTypes.bool,
      dinnerMeditation: PropTypes.bool,
    })
  ),
};
