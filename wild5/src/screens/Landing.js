import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Container, Button, Text} from 'native-base';
import wild5title from '../images/wild-5-logo-r-color.png';
import {Actions} from 'react-native-router-flux';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import landingbackground from '../images/landingbackground.jpg';
import {withAuthProvider} from '../context/authcontext';

const screenheight = Dimensions.get('window').height;
class Landing extends Component {
  state = {
    account: 0,
  };

  progressPress = () => {
    this.props.getTrackingData();
    Actions.progress();
  };

  render() {
    return (
      <Container
        style={{
          height: screenheight,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ScrollView>
          <ImageBackground
            source={landingbackground}
            style={{width: '100%'}}
            blurRadius={3}
          >
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                flex: 1,
                width: '100%',
              }}
            />
            <View
              style={{
                width: '80%',
                marginLeft: '10%',
                marginTop: '20%',
                marginBottom: 0,
              }}
            >
              <Image
                source={wild5title}
                style={{width: '100%', resizeMode: 'contain'}}
              />
            </View>
            <View>
              <Carousel />
            </View>

            <View style={{marginTop: '15%'}}>
              <Button
                onPress={() => Actions.exercisetracking()}
                style={{alignSelf: 'center'}}
                success
                large
                iconright
              >
                <Text>Track Exercise</Text>
              </Button>
            </View>

            <View style={{marginTop: '15%'}}>
              <Button
                onPress={() => Actions.mindfulnesstracking()}
                style={styles.mindfulness}
                success
                large
                iconright
              >
                <Text>Track Mindfulness</Text>
              </Button>
            </View>

            <View style={{marginTop: '15%'}}>
              <Button
                style={styles.sleep}
                onPress={() => Actions.sleeptracking()}
                success
                large
                iconright
              >
                <Text>Track Sleep</Text>
              </Button>
            </View>

            <View style={{marginTop: '15%'}}>
              <Button
                style={styles.social}
                onPress={() => Actions.socialtracking()}
                success
                large
                iconright
              >
                <Text>Track Social</Text>
              </Button>
            </View>

            <View style={{marginTop: '15%'}}>
              <Button
                style={styles.nutrition}
                onPress={() => Actions.nutritiontracking()}
                success
                large
                iconright
              >
                <Text>Track Nutrition</Text>
              </Button>
            </View>

            <View style={{marginTop: '15%'}}>
              <Button
                style={styles.tracking}
                onPress={() => this.progressPress()}
                success
                large
                iconright
              >
                <Text>Today's progress</Text>
              </Button>
            </View>
          </ImageBackground>
        </ScrollView>
        <View>
          <Navbar />
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  mindfulness: {
    backgroundColor: '#49b8ea',
    alignSelf: 'center',
  },
  sleep: {
    alignSelf: 'center',
    backgroundColor: '#ba3992',
  },
  social: {
    alignSelf: 'center',
    backgroundColor: '#ed3833',
  },
  nutrition: {
    alignSelf: 'center',
    backgroundColor: '#f3983e',
  },
  tracking: {
    alignSelf: 'center',
    backgroundColor: '#333',
  },
});

export default withAuthProvider(Landing);
