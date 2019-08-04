import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export function BlurredBackgroundImage({style, ...props}) {
  return (
    <ImageBackground style={[styles.imageBackground, style]} {...props}>
      <View style={styles.overlay} />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
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
};

BlurredBackgroundImage.defaultProps = {
  blurRadius: 3,
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
