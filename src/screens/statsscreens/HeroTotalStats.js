import React, {Component} from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { Text } from 'native-base';
import LineChart from '../../components/charts/LinesChart';
import { withAuthProvider } from '../../context/authcontext';
// import console = require('console');


const screenheight = Dimensions.get('window').height;
class HeroTotalStats extends Component{
    state = {
        graphValues: [],
    }
    componentWillMount(){
        if (this.props.heroData){
            this.renderGraph();
        }
    }
    componentDidMount(){
        if (this.props.heroData){
            this.renderGraph();        
        }
    }
    componentWillReceiveProps(){
        if (this.props.heroData){
            this.renderGraph();
        }
    }

    renderGraph = () => {
        let data = Object.values(this.props.heroData);
        let totals = [];
        console.log(data);
        for (let i = 0; i < data.length; i++){
            let total = data[i].happyval + data[i].enthval + data[i].mentval + data[i].optval + data[i].resval;
            totals.push(total);
        }
        console.log(totals);
        this.setState({
            graphValues: totals
        })
    }

    datesAndScores = () => {
        let data = Object.values(this.props.heroData);
        let dates = Object.keys(this.props.heroData);
        let arr = []
        for (let i = 0; i < dates.length; i++){
            let total = data[i].happyval + data[i].enthval + data[i].mentval + data[i].optval + data[i].resval;
            let date = dates[i];
            for(let k = 0; k < 1; k++){
                    arr.push(<Text style={{textAlign:'center', fontSize: 20, fontWeight: '600'}}>Score for {date}: {total}</Text>);
                //Hero only once every 8 days
            }
        }
        return arr;
    }

    render(){
        return (
            <View style={{height: screenheight, backgroundColor: 'white'}}>

                <View>
                    <Text style={{textAlign: 'center', fontSize:30, fontWeight: '600', marginBottom:'10%', marginTop:'10%'}}>Hero Scores</Text>
                </View>

                <View style={{marginLeft:'5%', marginRight:'5%'}}>
                <LineChart  data={this.state.graphValues}/>
                </View>
                <View>
                    <Text style={{textAlign: 'center', fontSize:20, fontWeight: '600', marginBottom:'10%', marginTop:'10%'}}>Scores are out of 50</Text>
                </View>

                
                    {this.props.heroData ? this.datesAndScores() : null}
            </View>
        )
    }
}

export default withAuthProvider(HeroTotalStats);