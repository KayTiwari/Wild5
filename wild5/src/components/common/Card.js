import React from 'react';
import {Card as NBCard} from 'native-base';

export const Card = props => {
  return <NBCard style={[styles.card, props.style]}>{props.children}</NBCard>;
};

const styles = {
  card: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    padding: 20,
  },
};
