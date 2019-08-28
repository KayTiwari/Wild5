import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

export const emptyState = (actionButton, isEmptyPredicateFn) => Component => {
  function EmptyState(props) {
    if (isEmptyPredicateFn(props)) {
      return (
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 18, padding: 10, textAlign: 'center'}}>
            We don't have any data to render these statistics.
          </Text>
          {actionButton}
        </View>
      );
    }

    return <Component {...props} />;
  }

  EmptyState.propTypes = {
    princData: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return EmptyState;
};
