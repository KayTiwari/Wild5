import React from 'react';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {StatTile} from './StatTile';

export function Exercise(props) {
  const goalMetTotal = React.useMemo(
    () =>
      Object.keys(props.data).reduce(
        (stats, date) => (props.data[date].duration >= 30 ? ++stats : stats),
        0
      ),
    [props.data]
  );

  return (
    <StatTile
      value={goalMetTotal / 30}
      onPress={() => Actions.exstats()}
      progressColor="#a8eb12"
      header="Exercise"
      goalMetTotal={goalMetTotal}
    />
  );
}

Exercise.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      duration: PropTypes.number,
      intensity: PropTypes.oneOf(['low', 'moderate', 'high']),
      type: PropTypes.string,
    })
  ),
};
