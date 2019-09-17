import React from 'react';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {StatTile} from './StatTile';

const sum = arr => arr.reduce((total, num) => total + num, 0);

export function Social(props) {
  const goalMetTotal = React.useMemo(
    () =>
      Object.values(props.data).reduce(
        (daysCompleted, {didSociallyConnect = false}) => {
          // If the day is completed, add it to the total
          return daysCompleted + Number(didSociallyConnect);
        },
        0
      ),
    [props.data]
  );

  return (
    <StatTile
      value={goalMetTotal / 30}
      onPress={() => Actions.socialstats()}
      progressColor="#ee3322"
      header="Social"
      goalMetTotal={goalMetTotal}
    />
  );
}

Social.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      calledFamily: PropTypes.bool,
      calledFriend: PropTypes.bool,
      metFamilyInPerson: PropTypes.bool,
      metFriendInPerson: PropTypes.bool,
    })
  ),
};
