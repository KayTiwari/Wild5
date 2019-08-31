import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import {ProgressRing} from '../../components/charts/ProgressRing';

const {width} = Dimensions.get('window');
const tileSize = width / 2 - 15;

export function StatTile(props) {
  return (
    <TouchableOpacity style={styles.tile} onPress={props.onPress}>
      <Text style={[styles.spacing, styles.title]}>{props.header}</Text>
      <ProgressRing
        value={props.value}
        radius={tileSize / 2 - 20}
        progressColor={props.progressColor}
      />
      <Text style={[styles.spacing, styles.subtle]}>
        Goal Met: {props.goalMetTotal} / 30 days
      </Text>
    </TouchableOpacity>
  );
}

StatTile.propTypes = {
  onPress: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  progressColor: PropTypes.string.isRequired,
  goalMetTotal: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    width: tileSize,
    alignItems: 'center',
  },
  title: {
    color: Platform.OS === 'android' ? '#000' : null,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtle: {
    color: '#A9A9A9',
    fontSize: 16,
  },
  spacing: {marginVertical: 10},
});
