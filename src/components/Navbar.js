import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
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
          <Footer>
            <FooterTab style={{backgroundColor: "#041D5D"}}>
              <Button disabled={this.props.homedisable} onPress={this.homePress.bind(this)}>
                <Icon name={"ios-home"} style={styles.buttons}/>
                <Text style={styles.buttons}>Track</Text>
              </Button>
              {/* <Button disabled={this.props.learndisable} onPress={() => Actions.edroadmap()}>
                <Icon name={"ribbon"} />
                <Text>Learn</Text>
              </Button> */}
              {/* <Button onPress={() => Actions.kickstart()}>
            <Icon name={"rocket"} />
              <Text>Kickstart</Text>
            </Button> */}
            <Button disabled={this.props.herodisable} onPress={() => Actions.feedback()}>
                <Icon name={"clipboard"} style={styles.buttons}/>
                <Text style={{fontSize:9, color:'#fff'}}>Feedback</Text>
              </Button>
            {/* <Button disabled={this.props.questdisable} onPress={() => Actions.quests()}>
                <Icon name={"flame"} />
                <Text>Quest</Text>
              </Button> */}
              <Button disabled={this.props.statsdisable} onPress={() => Actions.statistics()}>
                <Icon name={"stats"} style={styles.buttons}/>
                <Text style={styles.buttons}>Stats</Text>
              </Button>
              {/* <Button onPress={() => Actions.help()}>
        <Icon name={'md-help'} />
          <Text>Help</Text>
        </Button> */}
              <Button disabled={this.props.faqdisable} onPress={() => Actions.about()}>
                <Icon name={"chatbubbles"} style={styles.buttons}/>
                <Text style={styles.buttons}>About</Text>
              </Button>
              <Button disabled={this.props.settingsdisable} onPress={() => Actions.settings()}>
                <Icon name={"ios-settings"} style={styles.buttons}/>
                <Text style={styles.settings}>Settings</Text>
              </Button>
            </FooterTab>
          </Footer>
      </View>
    );
  }
}

export default Navbar;

const styles = StyleSheet.create({
  buttons: {
    color: "#fff" },
settings: {
  color: "#fff",
fontSize: 10
}
})