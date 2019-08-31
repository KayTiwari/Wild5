import React from 'react';
import PropTypes from 'prop-types';
import {View, SafeAreaView, ScrollView, Text, StyleSheet, Platform} from 'react-native';
import Navbar from '../Navbar';

export function Layout(props) {
  return (
    <View style={styles.flex}>
      <SafeAreaView style={styles.flex}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.mainArea}>{props.children}</View>
        </ScrollView>
      </SafeAreaView>
      <Navbar />
    </View>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
  },
  title: {
    color: Platform.OS === 'android' ? '#000' : null,
    fontSize: 36,
    marginTop: '10%',
    fontWeight: '900',
  },
  mainArea: {
    paddingTop: '10%',
  },
});
