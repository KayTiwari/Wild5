import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Button,
  Modal,
  PermissionsAndroid,
  TextInput,
  StyleSheet,
  Platform,
  AlertIOS,
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  Icon,
  Picker,
  Form,
  Header,
  Left,
  Title,
  Right,
  Body
} from "native-base";
import Navbar from "../../components/Navbar";
import Contacts from "react-native-contacts";
import Contact from "../common/ContactList";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { Actions } from "react-native-router-flux";
import SMS from "react-native-sms";
const { width, height } = Dimensions.get("window");

class SocialQuest extends Component {
  state = {
    socialInteraction: [],
    interactions: [
      "Dinner with family or friends",
      "Seeing a movie with family or friends",
      "Having coffee with family or friends",
      "Taking a walk with family or friends",
      "Joining a book club",
      "Participating in a sporting activity ie, tennis, basketball",
      "Taking a cooking class",
      "Taking a dance class"
    ],
    modalVisible: false,
    text: "",
    contacts: [],
    showContacts: false,
    selectedContacts: [],
    socialType: 0,
    completedSocialInteractions: []
  };

  showHelp = () => {
    return () => {
      <Modal>
        <View style={{ height: "60%", borderWidth: 1, borderColor: "black" }}>
          <Text>HELLO</Text>
        </View>
      </Modal>;
    };
  };

  sendText = activity => {
    const mappedSelectedContacts = this.state.selectedContacts.map(contactNum=> {
      return contactNum.phoneNumbers[0].number
    })
    let msg = {
      body: "",
      recipients: mappedSelectedContacts,
      successTypes: ["sent", "queued"]
    };
    if (activity === "Dinner with family or friends") {
      msg.body =
        "Hey, lets get together for dinner!  Let me know when would work best for you.";
    } else if (activity === "Seeing a movie with family or friends") {
      msg.body =
        "Hey, lets get together for Movie!  Let me know when would work best for you.";
    } else if (activity === "Having coffee with family or friends") {
      body =
        "Hey, lets get together for coffe!  Let me know when would work best for you.";
    } else if (activity === "Taking a walk with family or friends") {
      body =
        "Hey, lets go for a walk outside!  Let me know when would work best for you.";
    } else if (activity === "Joining a book club") {
      body =
        "Hey, lets join a book club.  I always enjoy dicussing a good book  .";
    } else if (
      activity === "Participating in a sporting activity ie, tennis, basketball"
    ) {
      body =
        "Hey, let's get together and enjoy a sporting activity, let me know if you're up to it";
    } else if (activity === "Taking a cooking class") {
      body =
        "Hey, lets go to a cooking class!  Let me know when would work best for you.";
    } else if (activity === "Taking a dance class") {
      body =
        "Hey, lets go to a dance class!  Let me know when would work best for you.";
    } else {
      return null;
    }
    console.log(msg);
    return SMS.send(msg, (completed, cancelled, error) => {
      console.log(msg);
      if (completed) {
        console.log("SMS Sent Completed");
      } else if (cancelled) {
        console.log("SMS Sent Cancelled");
      } else if (error) {
        console.log("Some error occured");
      }
    });
  };

  showModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  selectedContacts = contact => {
    const contactExists = this.state.selectedContacts.some(
      selectedContact => selectedContact.recordID === contact.recordID
    );

    if (contactExists) {
      this.setState(prevState => ({
        selectedContacts: prevState.selectedContacts.filter(
          selectedContact => selectedContact.recordID !== contact.recordID
        )
      }));
    } else {
      this.setState(prevState => ({
        selectedContacts: prevState.selectedContacts.concat(contact)
      }));
    }

    // does the contact exist in selectedContacts?
    // if so, remove it (filter)
    // otherwise, add it (concat)

    // selectedContacts: []
    // if contact is selected, then add them to this selectedContacts
    // if contact is de-selected, remove them
    // if contact is in selectedContacts
  };

  setActivity = itemValue => {
    if(Platform.OS === 'android'){
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Contacts',
          'message': 'This app would like to view your contacts.'
        }
      ).then(() => {
        this.setState({ socialInteraction: itemValue }, () =>
        Contacts.getAll((err, contacts) => {
          if (err) {
            AlertIOS.alert(err);
          } else {
            this.setState({ contacts }, () =>
              this.setState({ showContacts: !this.state.showContacts })
            );
          }
        })
      );
      })
      
    } else {
    this.setState({ socialInteraction: itemValue }, () =>
      Contacts.getAll((err, contacts) => {
        if (err) {
          AlertIOS.alert(err);
        } else {
          this.setState({ contacts }, () =>
            this.setState({ showContacts: !this.state.showContacts })
          );
        }
      })
    );
  }
};

  addNewInteraction = () => {
    return () => {
      this.setState(
        (prevState => ({
          interactions: [...prevState.interactions, this.state.text],
          modalVisible: !prevState.modalVisible
        }),
        () => this.setState({ text: "" }))
      );
    };
  };

  onChange = text => {
    this.setState({
      text
    });
  };

  render() {
    const listInteractions =
      this.state.contacts !== undefined
        ? this.state.interactions.map(i => {
            return (
              <Picker.Item label={i} value={i}>
                <Button>
                  <Icon name="remove-circle" />
                </Button>
              </Picker.Item>
            );
          })
        : null;
    return (
      <>
        {!this.state.showContacts ? (
          <View
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#fff",
              justifyContent: "space-between"
            }}
          >
            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible}
            >
              <View style={styles.modalView}>
                <View style={styles.modalInput}>
                  <View>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>
                      Select a social activity from the list. You'll then be
                      able to invite family and/or friends to join you by
                      sending a text message.
                    </Text>
                    <TouchableOpacity
                      style={{
                        marginTop: 15,
                        height: 35,
                        width: "70%",
                        backgroundColor: "lime",
                        alignSelf: "center",
                        borderRadius: 7
                      }}
                      onPress={this.showModal}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          alignSelf: "center",
                          fontWeight: "700"
                        }}
                      >
                        Ok, Got it!
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <View style={{ height: "20%", backgroundColor: "#E93422" }}>
              <View style={{ alignItems: "center", marginTop: "13%" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 36, color: "#fff" }}
                >
                  Be Social
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 26,
                    color: "#fff"
                  }}
                >
                  Plan a New Social Activity
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                height: "15%",
                justifyContent: "flex-start",
                marginLeft: "7%"
              }}
            >
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "red", fontSize: 20 }}>
                    Pick a New Activity
                  </Text>
                  <TouchableOpacity onPress={this.showModal}>
                    <Icon
                      name="help-circle-outline"
                      style={{ marginLeft: 7, fontSize: 23 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                height: 200,
                backgroundColor: "#FFF",
                width: "90%"
              }}
            >
              <Picker
                placeholder="Select a Social Activity"
                selectedValue={this.state.socialInteraction}
                style={{
                  height: 60,
                  width: "90%",
                  borderColor: "red",
                  borderWidth: 1,
                  alignSelf: "center"
                }}
                onValueChange={itemValue => this.setActivity(itemValue)}
              >
                {listInteractions}
              </Picker>
            </View>
            <Navbar />
          </View>
        ) : (
          <>
            {(() => {
              if (this.state.selectedContacts.length === 0) {
                return (
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: "#5ef01f",
                      paddingTop: "10%",
                      flex: 1
                    }}
                  >
                    <FlatList
                      data={this.state.contacts.sort((a,b)=>{
                        if(a.familyName < b.familyName) {return -1}
                        if(a.familyName > b.familyName) {return 1}
                        return 0;
                      })}
                      extraData={this.state}
                      keyExtractor={item => item.recordID}
                      renderItem={({ item }) => {
                        console.log(item);
                        const isChecked = this.state.selectedContacts.some(
                          contact => item === contact
                        );

                        return (
                          <Contact
                            contact={item}
                            onPress={this.selectedContacts}
                            isChecked={isChecked}
                          />
                        );
                      }}
                    />
                  </View>
                );
              } else if (this.state.selectedContacts.length > 0) {
                return (
                  <SafeAreaView style={{flex:1}}>
                  <View
                    style={{
                      
                      borderWidth: 2,
                      borderColor: "#5ef01f",
                      flex: 1
                    }}
                  >
                    <FlatList
                      data={this.state.contacts.sort((a,b)=>{
                        if(a.familyName < b.familyName) {return -1}
                        if(a.familyName > b.familyName) {return 1}
                        return 0;
                      })}
                      extraData={this.state}
                      keyExtractor={item => item.recordID}
                      renderItem={({ item }) => {
                        const isChecked = this.state.selectedContacts.some(
                          contact => item === contact
                        );

                        return (
                          <Contact
                            contact={item}
                            onPress={this.selectedContacts}
                            isChecked={isChecked}
                          />
                        );
                      }}
                    />
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: "#cb30ff",
                          height: 65,
                          backgroundColor: "#E93422",
                          flexDirection: "row"
                        }}
                      >
                        <View
                          style={{
                            borderWidth: 2,
                            borderColor: "black",
                            flex: 3,
                            height: "100%",
                            alignItems: "flex-start",
                            justifyContent: "center"
                          }}
                        >
                          <FlatList
                            data={this.state.selectedContacts}
                            extraData={this.state}
                            keyExtractor={item => item.recordID}
                            horizontal={true}
                            renderItem={({ item }) => {
                              return (
                                <>
                                  <Text
                                    style={{
                                      color: "#000",
                                      fontWeight: "bold",
                                      padding: 2
                                    }}
                                  >
                                    {`${item.givenName} ${item.familyName},`}
                                  </Text>
                                </>
                              );
                            }}
                          />
                          <View
                            style={{
                              borderWidth: 2,
                              borderColor: "#5ef01f",
                              width: "10%",
                              height: '50%',
                              alignSelf: "flex-end",
                              justifyContent: "center"
                            }}
                          >
                            <TouchableOpacity
                              onPress={() =>
                                this.sendText(this.state.socialInteraction)
                              }
                            >
                              <Icon name="send" />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </SafeAreaView>
                );
              }
            })()}
          </>
        )}
      </>
    );
  }
}

export default SocialQuest;

const styles = StyleSheet.create({
  modalView: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalInput: {
    marginTop: "35%",
    width: "80%",
    height: "40%",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 5
  }
});
