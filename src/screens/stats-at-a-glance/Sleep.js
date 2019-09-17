import React from 'react';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {StatTile} from './StatTile';

const sum = arr => arr.reduce((total, num) => total + num, 0);

export function Sleep(props) {
  const goalMetTotal = React.useMemo(
    () =>
      Object.values(props.data).reduce(
        (daysCompleted, {didImplementSleepPractices}) => {
          // If the day is completed, add it to the total
          return daysCompleted + Number(didImplementSleepPractices);
        },
        0
      ),
    [props.data]
  );

  return (
    <StatTile
      value={goalMetTotal / 30}
      onPress={() => Actions.sleepstats()}
      progressColor="#b92e91"
      header="Sleep"
      goalMetTotal={goalMetTotal}
    />
  );
}

Sleep.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      didImplementSleepPractices: PropTypes.bool,
      noElectronics: PropTypes.bool,
      sleepMask: PropTypes.bool,
      regularTime: PropTypes.bool,
      noNapping: PropTypes.bool,
      warmBath: PropTypes.bool,
      noCaffeine: PropTypes.bool,
    })
  ),
};
