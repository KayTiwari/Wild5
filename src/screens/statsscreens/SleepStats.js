
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
      console.log(this.props.princData)
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
        console.log(data)
        let total = data.length;
        let caff = 0;
        let elec = 0;
        let nap = 0;
        let regtime = 0;
        let mask = 0;
        let bath = 0;
        for (let i = 0; i < data.length; i++){
          let sleep = data[i].sleep;
          if (sleep.noCaffeine) {
            caff++;
          }
          if (sleep.noElectronics) {
            elec++;
          }
          if (sleep.noNapping) {
            nap++;
          }
          if (sleep.regularTime) {
            regtime++;
          }
          if (sleep.sleepMask) {
            mask++;
          }
          if (sleep.warmBath) {
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
                
                <View>
                    <Icon name='bed' style={{fontSize: 100, textAlign: 'center', marginTop: '10%'}}/>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Avoided caffeine 10 hours before bed: {this.state.caff !== 0 ? Math.round(100 - this.state.caff * 100 / 30) : 0} %</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>No Electronics 90 minutes before bed: {this.state.elec !== 0 ? Math.round(100 -this.state.elec * 100 / 30) : 0} %</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>No Napping: {this.state.nap !== 0 ? Math.round(100 - this.state.nap * 100 / 30) : 0} %</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Regular bedtime: {this.state.regtime !== 0 ? Math.round(100 - this.state.regtime * 100 / 30) : 0} %</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Sleep mask or blackout shades: {this.state.mask !== 0 ? Math.round(100 - this.state.mask * 100 / 30) : 0} %</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Warm bath/shower prior to bed: {this.state.bath !== 0 ? Math.round(100 - this.state.bath * 100 / 30) : 0} %</Text>
                </View>

            </View>
        )
    }
}

export default withAuthProvider(SleepStats);