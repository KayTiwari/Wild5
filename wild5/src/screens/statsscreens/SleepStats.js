import React, {Component} from 'react';
import { View, Dimensions } from 'react-native'
import { Text, Icon } from 'native-base'
import { withAuthProvider } from '../../context/authcontext';
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
            <View style={{height: screenheight, backgroundColor:'white'}}>
                <View>
                    <Text style={{marginTop: '10%', fontSize: 25, fontWeight: '600', textAlign:'center'}}>Sleep Analysis</Text>
                </View>

                {this.state.caff || this.state.elec || this.state.nap || this.state.regtime || this.state.mask || this.state.bath ? <View>
                    <BarGraph caff={this.state.caff} elec={this.state.elec} nap={this.state.nap} regtime={this.state.regtime} mask={this.state.mask} bath={this.state.bath}/>
                </View> : <Text>No graph data to show :S</Text>}

                <View>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Points out of: {this.state.total}</Text>
                    <Icon name='bed' style={{textAlign: 'center', marginTop: '10%'}}/>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Avoided caffeine 10 hours before bed: {this.state.caff}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>No Electronics 90 minutes before bed: {this.state.elec}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>No Napping: {this.state.nap}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Regular bedtime: {this.state.regtime}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Sleep mask or blackout shades: {this.state.mask}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Warm bath/shower prior to bed: {this.state.bath}</Text>
                </View>

            </View>
        )
    }
}

export default withAuthProvider(SleepStats);