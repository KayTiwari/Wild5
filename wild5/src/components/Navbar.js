import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Text,
  Header,
  Icon,
  Badge
} from "native-base";
import { Actions } from "react-native-router-flux";

class Navbar extends Component {
  state = {
    show: 0
  };

  homePress = () => {
    this.setState({ show: 0 });
    Actions.landing();
  };

  render() {
    return (
      <View>
        {this.state.show === 0 ? (
          <Footer>
            <FooterTab>
              <Button disabled={this.props.homedisable} onPress={this.homePress.bind(this)}>
                <Icon name={"ios-home"} />
                <Text>Home</Text>
              </Button>
              <Button disabled={this.props.learndisable} onPress={() => Actions.edroadmap()}>
                <Icon name={"rocket"} />
                <Text>Learn</Text>
              </Button>
              {/* <Button onPress={() => Actions.kickstart()}>
            <Icon name={"rocket"} />
              <Text>Kickstart</Text>
            </Button> */}
            <Button onPress={() => Actions.herointro()}>
                <Icon name={"sunny"} />
                <Text>HERO</Text>
              </Button>
              <Button onPress={() => this.setState({ show: 1 })}>
                <Text style={{ fontSize: 30, fontWeight: "600" }}>...</Text>
              </Button>
            </FooterTab>
          </Footer>
        ) : (
          <Footer>
            <FooterTab>
            <Button disabled={this.props.questdisable} onPress={() => Actions.quests()}>
                <Icon name={"flame"} />
                <Text>Quest</Text>
              </Button>
              <Button disabled={this.props.statsdisable} onPress={() => Actions.statistics()}>
                <Icon name={"stats"} />
                <Text>Stats</Text>
              </Button>
              {/* <Button onPress={() => Actions.help()}>
        <Icon name={'md-help'} />
          <Text>Help</Text>
        </Button> */}
              <Button disabled={this.props.faqdisable} onPress={() => Actions.about()}>
                <Icon name={"chatbubbles"} />
                <Text style={{}}>FAQ</Text>
              </Button>
              <Button onPress={() => Actions.settings()}>
                <Icon name={"ios-settings"} />
                <Text style={{ fontSize: 10 }}>Settings</Text>
              </Button>
              <Button onPress={() => this.setState({ show: 0 })}>
                <Text style={{ fontSize: 30, fontWeight: "600" }}>...</Text>
              </Button>
            </FooterTab>
          </Footer>
        )}
      </View>
    );
  }
}

export default Navbar;
