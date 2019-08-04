import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';
import {Container, Content} from 'native-base';
import {BlurredBackgroundImage} from '../../components/common/BlurredBackgroundImage';
import {Card, ModButton} from '../../components/common';

export function TrackingScreen(props) {
  return (
    <Container>
      <BlurredBackgroundImage
        style={[styles.backgroundImage, props.backgroundImageStyle]}
        source={props.backgroundImage}
        blurRadius={20}
      >
        <Card>
          <Text style={styles.title} adjustsFontSizeToFit numberOfLines={1}>
            <Text>
              Track your{' '}
              <Text style={{color: props.color}}>{props.activityTitle}</Text>
            </Text>
          </Text>
          <Content>{props.children}</Content>
          <ModButton color={props.color} onPress={props.onSave} label="Save" />
        </Card>
      </BlurredBackgroundImage>
    </Container>
  );
}

TrackingScreen.propTypes = {
  backgroundImage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({uri: PropTypes.string}),
  ]).isRequired,
  color: PropTypes.string.isRequired,
  activityTitle: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  backgroundImageStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
  },
  backgroundImage: {
    padding: 20,
  },
});
