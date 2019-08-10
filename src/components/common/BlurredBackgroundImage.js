import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export const VERTICAL_POSITION = {
  TOP: 'flex-start',
  CENTER: 'center',
  BOTTOM: 'flex-end',
};

export function BlurredBackgroundImage({style, ...props}) {
  return (
    <ImageBackground style={[styles.imageBackground, style]} {...props}>
      <View style={styles.overlay} />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            justifyContent: props.verticalPosition,
          }}
        >
          {props.children}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

BlurredBackgroundImage.propTypes = {
  source: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  blurRadius: PropTypes.number,
  verticalPosition: PropTypes.oneOf([
    VERTICAL_POSITION.TOP,
    VERTICAL_POSITION.CENTER,
    VERTICAL_POSITION.BOTTOM,
  ]),
};

BlurredBackgroundImage.defaultProps = {
  blurRadius: 3,
  verticalPosition: VERTICAL_POSITION.TOP,
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignSelf: 'stretch',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    alignSelf: 'stretch',
  },
});
