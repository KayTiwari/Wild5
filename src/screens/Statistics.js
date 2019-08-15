import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {withAuthProvider} from '../context/authcontext';
import {Exercise} from './stats-at-a-glance/Exercise';
import {Social} from './stats-at-a-glance/Social';
import {Layout} from '../components/common/Layout';

export function Statistics(props) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    props.getPrincipleData();
  }, []);

  React.useEffect(() => {
    if (Boolean(props.princData)) {
      setLoading(false);
    }
  }, [props.princData]);

  // Memo: The rest of this should be implemented as soon as the other tracking pages are updated
  const {exerciseData, socialData} = React.useMemo(() => {
    return ['exercise', 'social'].reduce(
      (dataMap, type) => ({
        ...dataMap,
        [`${type}Data`]: extractRelevantData(props.princData, type),
      }),
      {}
    );
  }, [props.princData]);

  return (
    <Layout title="Statistics">
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.tiles}>
          <Exercise data={exerciseData} />
          <Social data={socialData} />
        </View>
      )}
    </Layout>
  );
}

Statistics.propTypes = {
  princData: PropTypes.objectOf(
    PropTypes.shape({
      exercise: PropTypes.shape({
        duration: PropTypes.number,
        intensity: PropTypes.oneOf(['low', 'moderate', 'high']),
        type: PropTypes.string,
      }),
      social: PropTypes.shape({
        calledFamily: PropTypes.bool,
        calledFriend: PropTypes.bool,
        metFamilyInPerson: PropTypes.bool,
        metFriendInPerson: PropTypes.bool,
      }),
    })
  ),
  getPrincipleData: PropTypes.func.isRequired,
};

Statistics.defaultProps = {
  princData: {},
};

function extractRelevantData(princData, type) {
  return Object.keys(princData).reduce(
    (data, date) => ({...data, [date]: princData[date][type] || {}}),
    {}
  );
}

const styles = StyleSheet.create({
  tiles: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default withAuthProvider(Statistics);
