import React, { Component } from "react";
import {
  Dimensions,
  View,
  AlertIOS,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Picker,
  TouchableOpacity
} from "react-native";
import { Container, Text, Label, Button, Icon } from "native-base";
import NumericInput from "react-native-numeric-input";
import { Actions } from "react-native-router-flux";

const { height, width } = Dimensions.get("window");

class ExerciseQuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      countdownTimer: 0,
      y: false,
      minutes: "00",
      seconds: "00",
      modalVisible: false,
      logExercise: false,
      paused: false
    };
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  }

  // timer = () => {
  //     return () => {

  // }}

  tick = () => {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;
    this.setState({
      minutes: min,
      seconds: sec
    });
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }
    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }
    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--;
  };

  startCountDown = () => {
    this.setState({ y: !this.state.y });

    this.intervalHandle = setInterval(() => {
      this.tick();
    }, 1000);

    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  };

  stopTimer = () => {
    clearInterval(this.intervalHandle);
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible
    }));
  };

  endExercise = () => {
    this.setState({ logExercise: !this.state.logExercise });
  };

  pauseTimer = () => {
    clearInterval(this.intervalHandle);
    this.setState({ pause: true });
  };

  resumeTimer = () => {
    this.intervalHandle = setInterval(() => {
      this.tick();
    }, 1000);
    this.setState({ pause: false });
  };

  render() {
    return (
      <>
        {(() => {
          if (!this.state.y) {
            return (
              <Container
                style={{ backgroundColor: "#76BE40" }}
              >
                <View style={{ alignItems: "center" }}>
                  <Label
                    style={{ marginTop: "25%", color: "#FFF", fontSize: 40 }}
                  >
                    How Long Do You Want To Exercise?
                  </Label>
                  <View style={{ marginTop: "15%" }}>
                    <NumericInput
                      value={this.state.duration}
                      onChange={value =>
                        this.setState({ duration: value }, () =>
                          this.setState({ minutes: this.state.duration })
                        )
                      }
                      onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                      totalWidth={240}
                      totalHeight={50}
                      iconSize={35}
                      step={5}
                      minValue={0}
                      valueType="real"
                      rounded
                      textColor="white"
                      iconStyle={{ color: "black" }}
                      rightButtonBackgroundColor="white"
                      leftButtonBackgroundColor="white"
                    />
                  </View>
                  <View style={{ alignItems: "center", marginTop: "10%", width: '100%' }}>
                    <TouchableOpacity
                    style={{height: 50, width: '80%', backgroundColor: 'white', borderColor:'black', borderWidth: 1, justifyContent: 'center'}}
                    onPress={() =>this.state.minutes !== "00" ? this.startCountDown() : null}>
                      <Text style={{
                        alignSelf:'center',
                        fontWeight:"bold",
                        fontSize: 20,
                      color: "#000"}}>Start</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Container>
            );
          } else if (this.state.y) {
            return (
              <>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modalVisible}
                >
                  {!this.state.logExercise ? (
                    <View style={{ height, width, marginTop: "40%" }}>
                      <View
                        style={{
                          flexDirection: "column",
                          backgroundColor: "#fff",
                          alignSelf: "center",
                          height: "45%",
                          width: "80%"
                        }}
                      >
                        <View
                          style={{
                            alignItems: "center"
                          }}
                        >
                          <Text style={{
                            marginTop: '5%',
                            fontSize: 20,
                            color: 'red'
                        }}>Do You Want to Log Your Exercise?</Text>
                          <View style={{
                            alignItems:'center',
                            justifyContent:'flex-end',
                            width: '85%'
                        }}>
                          <TouchableHighlight
                            onPress={() => this.endExercise()}
                            style={[styles.touch, styles.touch1]}
                          >
                            <Text style={{ fontSize: 16, color: "#fff" }}>
                              Yes
                            </Text>
                          </TouchableHighlight>
                          <TouchableHighlight onPress={() => this.setState({y: !this.state.y}, ()=> Actions.landing())} style={styles.touch}>
                            <Text style={{ fontSize: 16, color: "#fff" }}>
                              No
                            </Text>
                          </TouchableHighlight>
                          </View>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View
                      style={{
                        height: "35%",
                        width: "85%",
                        backgroundColor: "#fff",
                        alignSelf: "center",
                        marginTop: '35%'
                      }}
                    >
                      <Text style={{alignSelf: 'center', fontSize: 18, marginTop: '10%'}}>What exercise did you complete?</Text>
                      <Picker onValueChange={() => AlertIOS.alert('Data submitted!')}>
                        <Picker.Item label={"Walking"} value={"Walking"}>
                          <Button>
                            <Icon name="remove-circle" />
                          </Button>
                        </Picker.Item>
                        <Picker.Item label={"Jogging"} value={"Jogging"}>
                          <Button>
                            <Icon name="remove-circle" />
                          </Button>
                        </Picker.Item>
                        <Picker.Item label={"Biking"} value={"Biking"}>
                          <Button>
                            <Icon name="remove-circle" />
                          </Button>
                        </Picker.Item>
                        <Picker.Item
                          label={"Playing Sports"}
                          value={"PlayingSports"}
                        >
                          <Button>
                            <Icon name="remove-circle" />
                          </Button>
                        </Picker.Item>
                        <Picker.Item label={"Swimming"} value={"Swimming"}>
                          <Button>
                            <Icon name="remove-circle" />
                          </Button>
                        </Picker.Item>
                        <Picker.Item
                          label={"Weight Lifting"}
                          value={"Weight Lifting"}
                        >
                          <Button>
                            <Icon name="remove-circle" />
                          </Button>
                        </Picker.Item>
                        <Picker.Item label={"Aerobics"} value={"Aerobics"}>
                          <Button>
                            <Icon name="remove-circle" />
                          </Button>
                        </Picker.Item>
                        <Picker.Item
                          label={"Water Aerobics"}
                          value={"Water Aerobics"}
                        >
                          <Button>
                            <Icon name="remove-circle" />
                          </Button>
                        </Picker.Item>
                        <Picker.Item label={"Other"} value={"Other"}>
                          <Button>
                            <Icon name="remove-circle" />
                          </Button>
                        </Picker.Item>
                      </Picker>
                    </View>
                  )}
                </Modal>
                <Container
                  style={{ backgroundColor: "#76BE40" }}
                >
                  <View style={styles.timeView}>
                    <View style={{ marginTop: "25%" }}>
                      <Text style={styles.time}>
                        {this.state.minutes}:{this.state.seconds}
                      </Text>
                    </View>
                    <View style={{
                      width: '80%',
                      alignItems: 'center'}}>
                    {!this.state.pause ? (
                      <TouchableOpacity
                        style={styles.controlButtons}
                        onPress={() => this.pauseTimer()}
                      >
                        <Icon name="pause" style={{alignSelf:'center',color:'#000'}}/>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                         style={styles.controlButtons}
                        onPress={() => this.resumeTimer()}
                      >
                        <Icon name="play" style={{alignSelf:'center',justifyContent:'center',color:'#000'}}/>
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity
                      style={[styles.controlButtons, {marginTop: 5}]}
                      onPress={() => this.stopTimer()}
                    >
                      <Icon name="square" style={{alignSelf:'center',justifyContent:'center',color:'#000'}}/>
                    </TouchableOpacity>
                    </View>
                  </View>
                </Container>
              </>
            );
          }
        })()}
      </>
    );
  }
}

export default ExerciseQuest;

const styles = StyleSheet.create({
  timeView: {
    alignItems: "center",
    justifyContent: "center"
  },
  time: {
    fontSize: 100
  },
  modalView: {
    backgroundColor: "#fff",
    alignItems: "center"
  },
  touch: {
    backgroundColor: "#000",
    height: "30%",
    width: "90%"
  },
  touch1: {
    marginBottom: 10
  },
  controlButtons: {
      justifyContent: 'center',
      width: '80%',
      backgroundColor: 'white',
      height: 50

  }
});
