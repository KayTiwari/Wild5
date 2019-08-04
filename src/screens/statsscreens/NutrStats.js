import React, {Component} from 'react';
import { View, Dimensions, ScrollView } from 'react-native'
import { Text, Icon } from 'native-base'
import { withAuthProvider } from '../../context/authcontext';
import BarGraph from '../../components/charts/NutriGraph';

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
        let logmeals = 0;
        let MIND = 0;
        let breakfast = 0;
        let lunch = 0;
        let dinner = 0;
        for (let i = 0; i < data.length; i++){
            if (data[i].nutrlogged){
                logmeals++;
            }
            if (data[i].nutrMIND){
                MIND++;
            }
            if (data[i].nutrbreakfast){
                breakfast++;
            }
            if (data[i].nutrlunch){
                lunch++;
            }
            if (data[i].nutrdinner){
                dinner++;
            }
        }
        // this.findBest(caff, elec, nap, regtime, mask, bath);
        this.setState({
            logmeals,
            MIND,
            breakfast,
            lunch,
            dinner,
            total
        })
    }



    render(){
        return (
            <View style={{height: screenheight, backgroundColor:'white'}}>
                <View>
                    <Text style={{marginTop: '10%', fontSize: 25, fontWeight: '600', textAlign:'center'}}>Nutrition Analysis</Text>
                </View>

                {this.state.logmeals || this.state.MIND || this.state.breakfast || this.state.lunch || this.state.dinner ? <View>
                    <BarGraph logmeals={this.state.logmeals} MIND={this.state.MIND} breakfast={this.state.breakfast} lunch={this.state.lunch} dinner={this.state.dinner} />
                </View> : <Text>No graph data to show :S</Text>}

                <View>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Points out of: {this.state.total}</Text>
                    <Icon name='restaurant' style={{textAlign: 'center', marginTop: '10%'}}/>
                    <ScrollView bounces={true}>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Logged Meals: {this.state.logmeals}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Practiced MIND Diet Principles: {this.state.MIND}</Text>
                    <Text style={{marginTop: '5%', fontSize: 30, fontWeight: '600', textAlign: 'center'}}>Practiced MINDful Meal Meditation</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Breakfast: {this.state.breakfast}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Lunch: {this.state.lunch}</Text>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Dinner: {this.state.dinner}</Text>
                    </ScrollView>
                </View>

            </View>
        )
    }
}

export default withAuthProvider(SleepStats);