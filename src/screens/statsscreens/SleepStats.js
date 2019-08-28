import React, {Component} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {Text, Icon, Spinner} from 'native-base';
import {withAuthProvider} from '../../context/authcontext';
import BarGraph from '../../components/charts/SleepGraph';

const screenheight = Dimensions.get('window').height;

class SleepStats extends Component {
  state = {
    caff: 0,
    elec: 0,
    nap: 0,
    regtime: 0,
    mask: 0,
    bath: 0,
    total: 0,
  };

  componentWillMount() {
    if (this.props.princData) {
      this.calculateStats();
    }
  }
  componentDidMount() {
    if (this.props.princData) {
      this.calculateStats();
    }
  }
  componentWillReceiveProps() {
    if (this.props.princData) {
      this.calculateStats();
    }
  }

  calculateStats = () => {
    let data = Object.values(this.props.princData).filter(day =>
      day.hasOwnProperty('sleep')
    );

    this.renderGraph(data);
  };

  renderGraph = data => {
    let total = data.length;
    let caff = 0;
    let elec = 0;
    let nap = 0;
    let regtime = 0;
    let mask = 0;
    let bath = 0;
    for (let i = 0; i < data.length; i++) {
      let sleep = data[i].sleep;
      if (sleep.noCaffeine) {
        caff++;
      }
      if (sleep.noElectronics) {
        elec++;
      }
      if (sleep.noNapping) {
        nap++;
      }
      if (sleep.regularTime) {
        regtime++;
      }
      if (sleep.sleepMask) {
        mask++;
      }
      if (sleep.warmBath) {
        bath++;
      }
    }
    // this.findBest(caff, elec, nap, regtime, mask, bath);
    this.setState({
      caff,
      elec,
      nap,
      regtime,
      mask,
      bath,
      total,
    });
  };

  render() {
    return (
      <View style={{backgroundColor: '#eeeeee', flex: 1}}>
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '600',
              textAlign: 'center',
              shadowColor: 'black',
              shadowOffset: {width: 4, height: 4},
              shadowOpacity: 0.4,
              shadowRadius: 6,
              color: '#BD2C95',
            }}
          >
            Sleep Reflection
          </Text>
        </View>

        {this.state.caff ||
        this.state.elec ||
        this.state.nap ||
        this.state.regtime ||
        this.state.mask ||
        this.state.bath ? (
          <View>
            <BarGraph
              caff={this.state.caff}
              elec={this.state.elec}
              nap={this.state.nap}
              regtime={this.state.regtime}
              mask={this.state.mask}
              bath={this.state.bath}
            />
          </View>
        ) : (
          <View style={{alignSelf: 'center'}}>
            <Spinner />
          </View>
        )}

        <View>
          <Text
            style={{
              marginTop: '5%',
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Points out of: {this.state.total}
          </Text>
          <ScrollView
            bounces={true}
            snapToAlignment={'start'}
            style={{height: screenheight, marginTop: '10%'}}
          >
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{
                  borderWidth: 1,
                  borderLeftColor: 'transparent',
                  borderColor: '#947cb0',
                  width: '50%',
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 50,
                    letterSpacing: 1.2,
                    alignSelf: 'center',
                  }}
                >
                  {this.state.caff}
                  <Text style={{fontWeight: '600', fontSize: 40, opacity: 0.5}}>
                    x
                  </Text>
                </Text>
                <Icon
                  name="cafe"
                  style={{alignSelf: 'center', color: '#913d88'}}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    marginTop: '5%',
                    color: 'gray',
                    fontSize: 15,
                    alignSelf: 'center',
                    marginBottom: '2%',
                  }}
                >
                  Avoided Caffeine
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderRightColor: 'transparent',
                  borderColor: '#947cb0',
                  width: '50%',
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 50,
                    letterSpacing: 1.2,
                    alignSelf: 'center',
                  }}
                >
                  {this.state.elec}
                  <Text style={{fontWeight: '600', fontSize: 40, opacity: 0.5}}>
                    x
                  </Text>
                </Text>
                <Icon
                  name="tv"
                  style={{alignSelf: 'center', color: '#a96dad'}}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    marginTop: '5%',
                    marginBottom: 0,
                    color: 'gray',
                    fontSize: 15,
                    alignSelf: 'center',
                    marginBottom: '2%',
                  }}
                >
                  No Electronics
                </Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{
                  borderWidth: 1,
                  borderLeftColor: 'transparent',
                  borderColor: '#947cb0',
                  width: '50%',
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 50,
                    letterSpacing: 1.2,
                    alignSelf: 'center',
                  }}
                >
                  {this.state.nap}
                  <Text style={{fontWeight: '600', fontSize: 40, opacity: 0.5}}>
                    x
                  </Text>
                </Text>
                <Icon
                  name="moon"
                  style={{alignSelf: 'center', color: '#aea8d3'}}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    marginTop: '5%',
                    color: 'gray',
                    fontSize: 15,
                    alignSelf: 'center',
                    marginBottom: '2%',
                  }}
                >
                  Avoided Napping
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderRightColor: 'transparent',
                  borderColor: '#947cb0',
                  width: '50%',
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 50,
                    letterSpacing: 1.2,
                    alignSelf: 'center',
                  }}
                >
                  {this.state.regtime}
                  <Text style={{fontWeight: '600', fontSize: 40, opacity: 0.5}}>
                    x
                  </Text>
                </Text>
                <Icon
                  name="time"
                  style={{alignSelf: 'center', color: '#9f5afd'}}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    marginTop: '5%',
                    marginBottom: 0,
                    color: 'gray',
                    fontSize: 15,
                    alignSelf: 'center',
                    marginBottom: '2%',
                  }}
                >
                  Regular Bedtime
                </Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{
                  borderWidth: 1,
                  borderLeftColor: 'transparent',
                  borderColor: '#947cb0',
                  width: '50%',
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 50,
                    letterSpacing: 1.2,
                    alignSelf: 'center',
                  }}
                >
                  {this.state.mask}
                  <Text style={{fontWeight: '600', fontSize: 40, opacity: 0.5}}>
                    x
                  </Text>
                </Text>
                <Icon
                  name="eye-off"
                  style={{alignSelf: 'center', color: '#aea8d3'}}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    marginTop: '5%',
                    color: 'gray',
                    fontSize: 15,
                    alignSelf: 'center',
                    marginBottom: '2%',
                  }}
                >
                  Wore Sleep Mask
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderRightColor: 'transparent',
                  borderColor: '#947cb0',
                  width: '50%',
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 50,
                    letterSpacing: 1.2,
                    alignSelf: 'center',
                  }}
                >
                  {this.state.bath}
                  <Text style={{fontWeight: '600', fontSize: 40, opacity: 0.5}}>
                    x
                  </Text>
                </Text>
                <Icon
                  name="water"
                  style={{alignSelf: 'center', color: 'gray'}}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    marginTop: '5%',
                    marginBottom: 0,
                    color: 'gray',
                    fontSize: 15,
                    alignSelf: 'center',
                    marginBottom: '2%',
                  }}
                >
                  Warm Bath/Shower
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default withAuthProvider(SleepStats);
