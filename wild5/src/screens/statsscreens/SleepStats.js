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
            <LinearGradient colors={["#E55D87", "#5FC3E4"]}>
                <View>
                    <Text style={{fontSize: 40, fontWeight: '600', textAlign:'center', shadowColor: 'white',
                shadowOffset: {width: 4, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 6,}}>Sleep Reflection</Text>
                </View>
            <View style={{backgroundColor: "white", marginLeft:'10%', marginRight:'10%', height: screenheight, shadowColor: 'black',
                shadowOffset: {width: 4, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 6,}}>

                {this.state.caff || this.state.elec || this.state.nap || this.state.regtime || this.state.mask || this.state.bath ? <View>
                    <BarGraph caff={this.state.caff} elec={this.state.elec} nap={this.state.nap} regtime={this.state.regtime} mask={this.state.mask} bath={this.state.bath}/>
                </View> : <View style={{alignSelf:'center'}}><Spinner /></View>}

                <View>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Points out of: {this.state.total}</Text>
                    <ScrollView>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Avoided caffeine 10 hours before bed: {this.state.caff}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>No Electronics 90 minutes before bed: {this.state.elec}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>No Napping: {this.state.nap}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Regular bedtime: {this.state.regtime}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Sleep mask or blackout shades: {this.state.mask}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Warm bath/shower prior to bed: {this.state.bath}</Text>
                    </ScrollView>
                </View>
            </View>
            </LinearGradient>
        )
    }
}

export default withAuthProvider(SleepStats);