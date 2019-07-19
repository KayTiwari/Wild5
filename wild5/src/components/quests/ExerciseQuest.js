import React, { Component } from "react";
import {
  Dimensions,
  View,
  AlertIOS,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Picker,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Container, Text, Label, Button, Icon } from "native-base";
import NumericInput from "react-native-numeric-input";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";

const { height, width } = Dimensions.get("window");

class ExerciseQuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      date: "",
      duration: 0,
      countdownTimer: 0,
      y: false,
      minutes: "00",
      seconds: "00",
      modalVisible: false,
      logExercise: false,
      paused: false,
      exerciseChecked: "",
      exerciseSelected: false,
      intensityChecked: "",
      exerciseActivities: [
        { key: "Walking" },
        { key: "Jogging" },
        { key: "Biking" },
        { key: "Playing Sports" },
        { key: "Swimming" },
        { key: "Weight Lifting" },
        { key: "Aerobics" },
        { key: "Running" }
      ],
      intensityType: [{ key: "Low" }, { key: "Moderate" }, { key: "High" }]
    };
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user) {
      var res = user.email.split('.');
      var userEm = res[0].toString();
      this.setState({
        user: userEm,
      });
    } else {
      console.log('noperz');
    }
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var dateTime = date;
    this.setState({
      date: dateTime,
    });
  }

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

  submitData = () => {
    const data = {
      Extype: this.state.exerciseChecked,
      Exduration: this.state.duration,
      Exintensity: this.state.intensityChecked
    };

    firebase
      .database()
      .ref(`Surveys/${this.state.user}/${this.state.date}`)
      .set({
        data
      }, ()=> 
        AlertIOS.alert(
          'Data successfully saved',
          '',
          [
            {
              text: 'ok',
              onPress: () => this.setState({modalVisible: !this.state.modalVisible}, ()=> Actions.quests() ),
              style: 'ok',
            }
          ],
        )
        );
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
              <Container style={{ backgroundColor: "#79c141" }}>
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
                  <View
                    style={{
                      alignItems: "center",
                      marginTop: "10%",
                      width: "100%"
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        height: 50,
                        width: "80%",
                        backgroundColor: "white",
                        borderColor: "black",
                        borderWidth: 1,
                        borderRadius: 6,
                        justifyContent: "center"
                      }}
                      onPress={() =>
                        this.state.minutes !== "00"
                          ? this.startCountDown()
                          : null
                      }
                    >
                      <Text
                        style={{
                          alignSelf: "center",
                          fontWeight: "bold",
                          fontSize: 26,
                          color: "#000",
                          letterSpacing: 4
                        }}
                      >
                        START
                      </Text>
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
                          <Text
                            style={{
                              marginTop: "5%",
                              fontSize: 20,
                              color: "red"
                            }}
                          >
                            Do You Want to Log Your Exercise?
                          </Text>
                          <View
                            style={{
                              alignItems: "center",
                              justifyContent: "flex-end",
                              width: "85%"
                            }}
                          >
                            <TouchableHighlight
                              onPress={() => this.endExercise()}
                              style={[styles.touch, styles.touch1]}
                            >
                              <Text style={{ fontSize: 16, color: "#fff" }}>
                                Yes
                              </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                              onPress={() =>
                                this.setState({ y: !this.state.y }, () =>
                                  Actions.landing()
                                )
                              }
                              style={styles.touch}
                            >
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
                        height: (this.state.exerciseSelected === false)?"65%" :'35%',
                        width: "85%",
                        backgroundColor: "#fff",
                        alignSelf: "center",
                        marginTop: "35%"
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: "center",
                          fontSize: 20,
                          marginTop: "5%",
                          fontWeight: '700'
                        }}
                      >
                        {this.state.exerciseSelected === false
                          ? "What exercise did you complete?"
                          : "Choose Intensity Level"}
                      </Text>
                      {this.state.exerciseSelected === false ? (
                        <>
                          <View
                            style={{
                              height: "100%",
                              marginLeft: "2%",
                              marginRight: "2%"
                            }}
                          >
                            <FlatList
                              data={this.state.exerciseActivities}
                              extraData={this.state}
                              renderItem={({ item }) => (
                                <TouchableOpacity
                                  isChecked={this.state.exerciseChecked}
                                  onPress={() =>
                                    this.setState({ exerciseChecked: item.key })
                                  }
                                  style={{ height: 45, width: "100%", justifyContent: 'center' }}
                                >
                                  <View
                                    style={{
                                      flexDirection: "row",
                                      justifyContent: "space-between"
                                    }}
                                  >
                                    <Text
                                      style={{
                                        fontSize: 18,
                                        alignSelf: "center"
                                      }}
                                    >
                                      {item.key}
                                    </Text>
                                    {this.state.exerciseChecked === item.key ? (
                                      <Icon
                                        name="checkbox"
                                        style={{ color: "blue", fontSize: 40 }}
                                      />
                                    ) : null}
                                  </View>
                                </TouchableOpacity>
                              )}
                            />
                          </View>
                          <View style={{height: '100%',alignItems: 'center'}}>
                          <TouchableOpacity
                          style={{alignSelf: 'center', backgroundColor: '#333', height: '20%', width: '30%', justifyContent: 'center', borderRadius: 7}}
                            onPress={() =>
                              this.setState({
                                exerciseSelected: !this.state.exerciseSelected
                              })
                            }
                          >
                            <Text style={{fontSize: 18, alignSelf: 'center'}}>CONFIRM</Text>
                          </TouchableOpacity>
                          </View>
                        </>
                      ) : (
                        <>
                          <View
                            style={{
                              height: "100%",
                              marginLeft: "2%",
                              marginRight: "2%"
                            }}
                          >
                            <FlatList
                              isChecked={this.state.intensityChecked}
                              data={this.state.intensityType}
                              extraData={this.state}
                              renderItem={({ item }) => (
                                <TouchableOpacity
                                  onPress={()=>this.setState({intensityChecked: item.key})}
                                  style={{ height: 45, width: "100%" }}
                                >
                                  <View
                                    style={{
                                      flexDirection: "row",
                                      justifyContent: "space-between"
                                    }}
                                  >
                                    <Text style={{ fontSize: 26 }}>
                                      {item.key}
                                    </Text>
                                    {(this.state.intensityChecked === item.key)?<Icon name="checkbox" style={{color:'blue',fontSize: 40}} /> : null}
                                  </View>
                                </TouchableOpacity>
                              )}
                            />
                          </View>
                          <TouchableOpacity 
                          style={{alignSelf: 'center', backgroundColor: '#333', height: '35%', width: '30%', justifyContent: 'center', borderRadius: 7}}
                          onPress={this.submitData}>
                            <Text style={{fontSize: 18, alignSelf: 'center', textAlign:'center'}}>Submit Data</Text>
                          </TouchableOpacity>
                        </>
                      )}
                    </View>
                  )}
                </Modal>
                <Container style={{ backgroundColor: "#76BE40" }}>
                  <View style={styles.timeView}>
                    <View style={{ marginTop: "25%" }}>
                      <Text style={styles.time}>
                        {this.state.minutes}:{this.state.seconds}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "80%",
                        alignItems: "center"
                      }}
                    >
                      {!this.state.pause ? (
                        <TouchableOpacity
                          style={styles.controlButtons}
                          onPress={() => this.pauseTimer()}
                        >
                          <Icon
                            name="pause"
                            style={{ alignSelf: "center", color: "#000" }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.controlButtons}
                          onPress={() => this.resumeTimer()}
                        >
                          <Icon
                            name="play"
                            style={{
                              alignSelf: "center",
                              justifyContent: "center",
                              color: "#000"
                            }}
                          />
                        </TouchableOpacity>
                      )}
                      <TouchableOpacity
                        style={[styles.controlButtons, { marginTop: 5 }]}
                        onPress={() => this.stopTimer()}
                      >
                        <Icon
                          name="square"
                          style={{
                            alignSelf: "center",
                            justifyContent: "center",
                            color: "#000"
                          }}
                        />
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
    justifyContent: "center",
    width: "80%",
    backgroundColor: "white",
    height: 50,
    borderRadius: 6
  }
});
