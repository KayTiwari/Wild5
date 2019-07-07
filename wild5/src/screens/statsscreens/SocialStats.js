import React, {Component} from 'react';
import { View, Dimensions } from 'react-native'
import { Text, Icon } from 'native-base'
import { withAuthProvider } from '../../context/authcontext';
import BarGraph from '../../components/charts/SocialGraph';

//graph of all practices + scores

const screenheight = Dimensions.get('window').height;

class SocialStats extends Component{
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
        let calledfriend = 0;
        let metfriend = 0;
        let calledfamily = 0;
        let metfamily = 0;
        for (let i = 0; i < data.length; i++){
            if (data[i].socfriendcall){
                calledfriend++;
            }
            if (data[i].socfriendinperson){
                metfriend++;
            }
            if (data[i].socfamilycall){
                calledfamily++;
            }
            if (data[i].socfamilyinperson){
                metfamily++;
            }
        }
        // this.findBest(caff, elec, nap, regtime, mask, bath);
        this.setState({
            calledfriend,
            metfriend,
            calledfamily,
            metfamily,
            total
        })
    }



    render(){
        return (
            <View style={{height: screenheight, backgroundColor:'white'}}>
                <View>
                    <Text style={{marginTop: '10%', fontSize: 25, fontWeight: '600', textAlign:'center'}}>Social Connectedness Reflection</Text>
                </View>

                {this.state.calledfamily || this.state.metfamily || this.state.calledfriend || this.state.metfriend  ? <View>
                    <BarGraph calledfamily={this.state.calledfamily} calledfriend={this.state.calledfriend} metfriend={this.state.metfriend} metfamily={this.state.metfamily}/>
                </View> : <Text>No graph data to show :S</Text>}

                <View>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Points out of: {this.state.total}</Text>
                    <Icon name='bonfire' style={{textAlign: 'center', marginTop: '10%'}}/>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Called Friend: {this.state.calledfriend}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Met Friend in Person: {this.state.metfriend}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Called Family {this.state.calledfamily}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Met Family in Person: {this.state.metfamily}</Text>
                </View>

            </View>
        )
    }
}

export default withAuthProvider(SocialStats);