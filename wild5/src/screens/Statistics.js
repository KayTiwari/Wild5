import React, {Component} from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Navbar from '../components/Navbar';
import { withAuthProvider } from '../context/authcontext';


const screenheight = Dimensions.get('window').height;
class Statistics extends Component{
    state = {
        
    }

    principlePress = () => {
        this.props.getPrincipleData();
        Actions.principlestats()
    }

    heroPress = () => {
        this.props.getHeroData();
        Actions.herostats();
    }

    inDepthPress = (type) => {
        this.props.getPrincipleData();
        if (type === 'ex'){
            Actions.exstats();
        }
    }


    render(){
        return(
            <View style={{backgroundColor: 'white', height: screenheight, flex: 1, flexDirection:'column', justifyContent:'space-between'}}>
            <View>
                <Text style={{fontSize: 30, fontWeight:'600', textAlign: 'center', marginTop:'15%'}}>Your Stats</Text>
            </View>
            <View>
                <Text style={{fontSize: 20, fontWeight:'600', textAlign: 'center', marginTop:'10%'}}>Interact directly with your Wellness Progress</Text>
            </View>
            
            <ScrollView style={{}}>
            <View style={{alignSelf: 'center', marginTop:'10%'}}>
                <Button large style={{backgroundColor: '#333'}} onPress={() => this.principlePress()}>
                    <Text>5 Principles</Text>
                </Button>
            </View>
            <View style={{alignSelf: 'center', marginTop:'10%' }}>
                <Button large danger onPress={() => this.heroPress()}>
                    <Text>HERO Totals</Text>
                </Button>
            </View>
            <View style={{alignSelf: 'center', marginTop:'10%'}}>
                <Button large style={{backgroundColor: '#72B83E'}} onPress={() => this.inDepthPress('ex')}>
                    <Text>Exercise In-Depth</Text>
                </Button>
            </View>
            <View style={{alignSelf: 'center', marginTop:'10%'}}>
                <Button large info onPress={() => this.inDepthPress('mind')}>
                    <Text>Mindfulness In-Depth</Text>
                </Button>
            </View>
            <View style={{alignSelf: 'center', marginTop:'10%'}}>
                <Button large style={{backgroundColor: '#BD2C95'}} onPress={() => this.inDepthPress('mind')}>
                    <Text>Sleep In-Depth</Text>
                </Button>
            </View>
            <View style={{alignSelf: 'center', marginTop:'10%'}}>
                <Button large style={{backgroundColor:'#E93422'}} onPress={() => this.inDepthPress('mind')}>
                    <Text>Social In-Depth</Text>
                </Button>
            </View>
            <View style={{alignSelf: 'center', marginTop:'10%', marginBottom: '5%'}}>
                <Button large style={{backgroundColor:'#E06F26'}} onPress={() => this.inDepthPress('mind')}>
                    <Text>Nutrition In-Depth</Text>
                </Button>
            </View>
            </ScrollView>
            

            <View style={{}}>
                <Navbar />
            </View>
            </View>
        )
    }
}

export default withAuthProvider(Statistics);