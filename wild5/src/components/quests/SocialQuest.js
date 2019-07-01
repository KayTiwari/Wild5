import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Picker,
  Button,
  Modal,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  AsyncStorage,
  AlertIOS,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Icon } from "native-base";
import Navbar from "../../components/Navbar";
import Contacts from "react-native-contacts";
import Contact from "../common/ContactList";
// import { HeroHappy } from '../../screens/HERO';

const { width, height } = Dimensions.get("window");

class SocialQuest extends Component {
  state = {
    socialInteraction: [],
    interactions: [
      "Dinner with family or friends",
      "Seeing a movie with family or friends",
      "Having coffee with family or friends",
      "taking a walk with family or friends",
      "joining a book club",
      "Participating in a sporting activity ie, tennis, basketball",
      "taking a cooking class",
      "Taking a dance class"
    ],
    modalVisible: false,
    text: "",
    contacts: [],
    showContacts: false,
    selectedContacts: []
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

  saveState = async state => {
    // AlertIOS.alert('willunmount')
    try {
      await AsyncStorage.setItem("SocialState", `${JSON.stringify(state)}`);
    } catch (error) {
      AlertIOS.alert("storage save failed");
    }
  };

  // returnState = async () => {
  //     AlertIOS.alert('willmount')
  //     try {
  //         const value = await AsyncStorage.getItem('SocialState');
  //         if (value !== null) {
  //           this.setState({
  //             interactions: value
  //           }, ()=> Alert.alert('returnState'))
  //         }
  //       } catch (error) {
  //        AlertIOS.alert('get storage failed')
  //       }
  // }

  setActivity = itemValue => {
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
              backgroundColor: "#E93422",
              justifyContent: "space-between"
            }}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
            >
              <View style={styles.modalView}>
                <View style={styles.modalInput}>
                  <TextInput
                    style={styles.modalInput}
                    value={this.state.text}
                    onChangeText={text => this.onChange(text)}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-end"
                    }}
                  >
                    <TouchableHighlight onPress={this.addNewInteraction()}>
                      <Text style={{ fontSize: 16 }}>Add</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <View>
              <View style={{ alignItems: "center", marginTop: "20%" }}>
                <Text style={{ fontWeight: "bold", fontSize: 26 }}>
                  Branch Out
                </Text>
              </View>
              <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 20 }}>
                Experience a New Social Interaction
              </Text>
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
                selectedValue={this.state.socialInteraction}
                style={{ height: 100, width: "90%" }}
                onValueChange={itemValue => this.setActivity(itemValue)}
              >
                {listInteractions}
              </Picker>
            </View>
            <Button
              title="Add a New Experience"
              onPress={() => this.showModal}
            />
            <Navbar />
          </View>
        ) : (
          <>
            {(() => {
              if (this.state.selectedContacts.length === 0) {
                return (
                  <View style={{ marginTop: "15%", height, width }}>
                    <FlatList
                      data={this.state.contacts}
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
                  </View>
                );
              } else if (this.state.selectedContacts.length > 0) {
                return (
                  <View style={{ marginTop: "15%", height, width }}>
                    <FlatList
                      data={this.state.contacts}
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
                        height: 50,
                        backgroundColor: "#E93422",
                        padding: 5,
                        flexDirection: "row"
                      }}
                    >
                      <View
                        style={{
                          flex: 3,
                          alignItems: "flex-start",
                          justifyContent: "center",
                          alignContent: "center"
                        }}
                      >
                        <FlatList
                          data={this.state.selectedContacts}
                          extraData={this.state}
                          keyExtractor={item => item.recordID}
                          horizontal={true}
                          renderItem={({ item }) => {
                            return (
                              <View
                                style={{
                                  paddingTop: 10
                                }}
                              >
                                <Text
                                  style={{
                                    color: "#000",
                                    fontWeight: "bold",
                                    padding: 2
                                  }}
                                >
                                  {`${item.givenName},`}
                                </Text>
                              </View>
                            );
                          }}
                        />
                        <View
                          style={{
                            flex: 1,
                            alignItems: "flex-end",
                            justifyContent: "center"
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => Alert.alert("Message sent :)")}
                          >
                            <Icon name="send" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
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
    width: "80%",
    height: "40%",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 5
  }
});
