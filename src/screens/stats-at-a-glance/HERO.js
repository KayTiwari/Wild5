import React from 'react';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {StatTile} from './StatTile';

const sum = arr => arr.reduce((total, num) => total + num, 0);

export function Hero(props) {
  const goalMetTotal = React.useMemo(
    () =>
    Object.values(props.data).reduce((daysCompleted, activities) => {
      // Convert the number of completed connections to an array of numbers
      // Example: {calledFriend: true, metWithFriend: false} -> [1, 0]
      const todaysTotal = Object.values(activities).map(didComplete =>
        didComplete
      );

      // The day is considered completed if you made at least 2 connections
      const dayIsCompleted = sum(todaysTotal)  === 1;

      // If the day is completed, add it to the total
      return daysCompleted + (dayIsCompleted ? 1 : 0);
    }, 0),
  [props.data]
);

  return (
    <StatTile
      value={goalMetTotal / 30}
      onPress={() => Actions.socialstats()}
      progressColor="#041D5D"
      header="HERO"
      goalMetTotal={goalMetTotal}
    />
  );
}

// Hero.propTypes = {
//   data: PropTypes.objectOf(
//     PropTypes.shape({
//       calledFamily: PropTypes.bool,
//       calledFriend: PropTypes.bool,
//       metFamilyInPerson: PropTypes.bool,
//       metFriendInPerson: PropTypes.bool,
//     })
//   ),
// };
