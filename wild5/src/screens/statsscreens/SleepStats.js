import React, {Component} from 'react';
import { View, Dimensions, ScrollView } from 'react-native'
import { Text, Icon, Spinner } from 'native-base'
import { withAuthProvider } from '../../context/authcontext';
import LinearGradient from "react-native-linear-gradient";
import BarGraph from '../../components/charts/SleepGraph';

//graph of all practices + scores

const screenheight = Dimensions.get('window').height;

class SleepStats extends Component{
    state = {
        best: 'None'
    }

    componentWillMount(){
        if (this.props.princData){
            this.calculateStats()
        }
    }
    componentDidMount(){
        if (this.props.princData){
            this.calculateStats()
        }
    }
    componentWillReceiveProps(){
        if (this.props.princData){
            this.calculateStats()
        }
        }

    calculateStats = () => {
        let data = Object.values(this.props.princData);
        this.renderGraph(data);
    }

    renderGraph = data => {
        let total = data.length;
        let caff = 0;
        let elec = 0;
        let nap = 0;
        let regtime = 0;
        let mask = 0;
        let bath = 0;
        for (let i = 0; i < data.length; i++){
            if (data[i].slcaffeine){
                caff++;
            }
            if (data[i].slelectronics){
                elec++;
            }
            if (data[i].slnapping){
                nap++;
            }
            if (data[i].slregulartime){
                regtime++;
            }
            if (data[i].slsleepmask){
                mask++;
            }
            if (data[i].slwarmbath){
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
            total
        })
    }



    render(){
        return (
            <View style={{backgroundColor:'#eeeeee'}}>
                <View>
                    <Text style={{fontSize: 40, fontWeight: '600', textAlign:'center', shadowColor: 'black',
                shadowOffset: {width: 4, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 6, color: '#BD2C95'}}>Sleep Reflection</Text>
                </View>
            <View style={{backgroundColor: "white", marginLeft:'5%', marginRight:'5%', height: screenheight, shadowColor: 'black',
                shadowOffset: {width: 4, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 6,}}>

                {this.state.caff || this.state.elec || this.state.nap || this.state.regtime || this.state.mask || this.state.bath ? <View>
                    <BarGraph caff={this.state.caff} elec={this.state.elec} nap={this.state.nap} regtime={this.state.regtime} mask={this.state.mask} bath={this.state.bath}/>
                </View> : <View style={{alignSelf:'center'}}><Spinner /></View>}

                <View>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Points out of: {this.state.total}</Text>
                    <ScrollView>
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <View style={{borderWidth: 1, borderLeftColor:'transparent', borderColor: '#947cb0', width:'50%'}}>
                            <Text style={{fontWeight:'600', fontSize: 50, letterSpacing:1.2, alignSelf:'center'}}>{this.state.caff}<Text style={{fontWeight:'600', fontSize: 40, opacity:.5}}>x</Text></Text>
                            <Icon name='cafe' style={{alignSelf:'center', color:'#913d88'}}/>
                            <Text style={{fontWeight:'400', marginTop:'5%', color:'gray', fontSize: 15, alignSelf:'center'}}>Avoided Caffeine</Text>
                        </View>

                        <View style={{borderWidth: 1, borderRightColor:'transparent', borderColor: '#947cb0', width:'50%'}}>
                            <Text style={{fontWeight:'600', fontSize: 50, letterSpacing:1.2, alignSelf:'center'}}>{this.state.elec}<Text style={{fontWeight:'600', fontSize: 40, opacity:.5}}>x</Text></Text>
                            <Icon name='tv' style={{alignSelf:'center', color:'#a96dad'}}/>
                            <Text style={{fontWeight:'400', marginTop:'5%', marginBottom:0, color:'gray', fontSize: 15, alignSelf:'center'}}>No Electronics</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <View style={{borderWidth: 1, borderLeftColor:'transparent', borderColor: '#947cb0', width:'50%'}}>
                            <Text style={{fontWeight:'600', fontSize: 50, letterSpacing:1.2, alignSelf:'center'}}>{this.state.nap}<Text style={{fontWeight:'600', fontSize: 40, opacity:.5}}>x</Text></Text>
                            <Icon name='moon' style={{alignSelf:'center', color:'#aea8d3'}}/>
                            <Text style={{fontWeight:'400', marginTop:'5%', color:'gray', fontSize: 15, alignSelf:'center'}}>Avoided Napping</Text>
                        </View>

                        <View style={{borderWidth: 1,  borderRightColor:'transparent', borderColor: '#947cb0', width:'50%'}}>
                            <Text style={{fontWeight:'600', fontSize: 50, letterSpacing:1.2, alignSelf:'center'}}>{this.state.regtime}<Text style={{fontWeight:'600', fontSize: 40, opacity:.5}}>x</Text></Text>
                            <Icon name='time' style={{alignSelf:'center', color:'#9f5afd'}}/>
                            <Text style={{fontWeight:'400', marginTop:'5%', marginBottom:0, color:'gray', fontSize: 15, alignSelf:'center'}}>Regular Bedtime</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <View style={{borderWidth: 1, borderLeftColor:'transparent', borderColor: '#947cb0', width:'50%'}}>
                            <Text style={{fontWeight:'600', fontSize: 50, letterSpacing:1.2, alignSelf:'center'}}>{this.state.mask}<Text style={{fontWeight:'600', fontSize: 40, opacity:.5}}>x</Text></Text>
                            <Icon name='eye-off' style={{alignSelf:'center', color:'#aea8d3'}}/>
                            <Text style={{fontWeight:'400', marginTop:'5%', color:'gray', fontSize: 15, alignSelf:'center'}}>Wore Sleep Mask</Text>
                        </View>

                        <View style={{borderWidth: 1, borderRightColor:'transparent', borderColor: '#947cb0', width:'50%'}}>
                            <Text style={{fontWeight:'600', fontSize: 50, letterSpacing:1.2, alignSelf:'center'}}>{this.state.bath}<Text style={{fontWeight:'600', fontSize: 40, opacity:.5}}>x</Text></Text>
                            <Icon name='water' style={{alignSelf:'center', color:'gray'}}/>
                            <Text style={{fontWeight:'400', marginTop:'5%', marginBottom:0, color:'gray', fontSize: 15, alignSelf:'center'}}>Warm Bath/Shower</Text>
                        </View>
                    </View>
                    </ScrollView>
                </View>
            </View>
            </View>
        )
    }
}

export default withAuthProvider(SleepStats);