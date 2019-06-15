import React, {Component} from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { Text } from 'native-base';
import firebase from 'firebase';
import BarGraph from '../components/charts/BarGraph'
import Navbar from '../components/Navbar';


const screenheight = Dimensions.get('window').height;
class Statistics extends Component{
    state = {
        data: []
    }

    componentWillMount(){
        var user = firebase.auth().currentUser;
            if (user) {
                var res = user.email.split(".");
                var userEm = res[0].toString();
                this.setState({
                    user: userEm
                })
            } else {
                console.log('noperz')
            }
        var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var dateTime = date;
                this.setState({
                    date: dateTime
                })
            }
        
        componentDidMount(){
            var database = firebase.database();
            var ref = database.ref(`Surveys/${this.state.user}`);
            ref.on('value', this.gotData, this.errData)
        }

        gotData = (data) => {
            let newData = data.val();
            console.log(newData);
            this.returnTotal(newData);
            this.setState({
                data: newData,
            })
            this.renderGraph();
        }

        returnTotal = (data) => {
            let total = Object.keys(data).length * 3;
            if (total > 90){
                total = 90;
            }
            this.setState({
                total
            })
        }

        errData = (err) => {
            console.log('error')
            console.log(err)
        }

        renderGraph = () => {
            let exval = this.exercisecalc();
            let mindval = this.mindcalc();
            let sleepval = this.sleepcalc();
            let socval = this.soccalc();
            let nutrval = this.nutrcalc();
            this.setState({
                exval,
                mindval,
                sleepval,
                socval,
                nutrval
            })
            console.log(this.state);
        }

        exercisecalc = () => {
            let i = 0;
            let values = Object.values(this.state.data);
            for (var k = 0; k < values.length; k++){
            if (values[k].Exduration >= 30){
                i = i+1;
            }
            if (values[k].Exintensity === 'moderate' || values[k].Exintensity === 'high'){
                i = i+1;
            }
            if (values[k].Extype){
                i = i+1;
            }
        }
            return i;
        }

        mindcalc = () => {
            let v = 0;
            let i = 0;
            let values = Object.values(this.state.data);
            for (var k = 0; k < values.length; k++){
            if (values[k].mindprac){
                i = i + 1;
            }
            if (values[k].mindtype && values[k].mindtype !== 'None'){
                i = i + 1;
            }
            if (i === 2){
                v = v + 3;
            } else if (i === 1){
                v =  v + 1.5;
            } else{
                v = v + i;
            }
        }
        return v;
        }

        sleepcalc = () => {
            let i = 0;
            let v = 0;
            let values = Object.values(this.state.data);
            for (var k = 0; k < values.length; k++){
            if (values[k].slcaffeine){
                i = i + 1;
            }
            if (values[k].slelectronics){
                i = i + 1;
            }
            if (values[k].slnapping){
                i = i + 1;
            }
            if (values[k].slregulartime){
                i = i + 1;
            }
            if (values[k].slsleepmask){
                i = i + 1;
            }
            if (values[k].slwarmbath){
                i = i + 1;
            }
            if (i >= 4){
                v = v + 3;
            } else if (i >=2 && i <=3){
                v = v + 2
            } else if (i === 1){
                v = v + 1;
            } else {
                v = v + i;
            }
        }
        return v;
        }

        soccalc = () => {
            let i = 0;
            let v = 0;
            let values = Object.values(this.state.data);
            for (var k = 0; k < values.length; k++){
            if (values[k].socfamilycall){
                i = i + 1;
            }
            if (values[k].socfriendcall){
                i = i + 1;
            }
            if (values[k].socfamilyinperson){
                i = i + 1;
            }
            if (values[k].socfriendinperson){
                i = i + 1;
            }
            if (i >= 2){
                v = v + 3;
            } else {
                v = i;
            }
        }
        return v;
        }

        nutrcalc = () => {
            let v = 0;
            let i = 0;
            let values = Object.values(this.state.data);
            for (var k = 0; k < values.length; k++){
            if (values[k].nutrlogged){
                i = i + 1;
            }
            if (values[k].MIND){
                i = i + 1;
            }
            if (values[k].breakfast){
                i = i + 1;
            }
            if (values[k].nutrlunch){
                i = i + 1;
            }
            if (values[k].nutrdinner){
                i = i + 1;
            }
            if (i === 5){
                v = v + 3;
            } else if (i === 3 || i === 4){
                v = v + 2;
            } else if (i === 2){
                v = v + 1;
            } else {
                v = i;
            }
        }
        return v;
        }

    render(){
        return(
            <View style={{backgroundColor: 'white', height: screenheight}}>
            <ScrollView>
                <Text style={{fontSize: 20, fontWeight:'600', textAlign:'center', marginTop: '15%', marginBottom:'5%'}}>Statistics</Text>
                <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '15%', marginBottom:'5%'}}>30 Days Graph</Text>
                {this.state.exval ? <BarGraph exval={this.state.exval} mindval={this.state.mindval} sleepval={this.state.sleepval} socval={this.state.socval} nutrval={this.state.nutrval} />: <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '15%', marginBottom:'5%'}}>No Graph Data to show :S</Text>}
                {this.state.exval ? <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '5%', color:'green'}}>{this.state.exval} / {this.state.total}</Text> : <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '15%', marginBottom:'5%',}}>No exercise data</Text>}
                {this.state.exval ? <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '5%', color:'blue'}}>{this.state.mindval}/{this.state.total}</Text> : <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '15%', marginBottom:'5%'}}>No mindfulness data</Text>}
                {this.state.exval ? <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '5%', color:'purple'}}>{this.state.sleepval}/{this.state.total}</Text> : <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '15%', marginBottom:'5%'}}>No sleep data</Text>}
                {this.state.exval ? <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '5%', color:'red'}}>{this.state.socval}/{this.state.total}</Text> : <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '15%', marginBottom:'5%'}}>No social data</Text>}
                {this.state.exval ? <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '5%', color:'orange'}}>{this.state.nutrval}/{this.state.total}</Text> : <Text style={{fontSize: 15, fontWeight:'600', textAlign:'center', marginTop: '15%', marginBottom:'5%'}}>No nutrition data</Text>}
            </ScrollView>
            <Navbar />
            </View>
        )
    }
}

export default Statistics;