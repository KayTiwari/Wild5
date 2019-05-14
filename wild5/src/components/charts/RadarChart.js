import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class RadarChart extends Component{
    state = {
        data:{
            labels: [],
            datasets: [
              {
                label: 'Wellness Tracking Data',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: []
              }
            ]
          }
    ,
    }

    setGraphData = () => {
        this.setState({
          data: this.props.data
        }, () => this.setSurveyData())
      }

      setSurveyData = () => {
        console.log("running")
        console.log(this.props);
        if(this.state.data.length !== 0){
        this.setState(() => ({
                data: {
                    labels: ['Exercise', 'Mindfulness', 'Sleep', 'Social', 'Nutrition'],
                    datasets:[
                      {
                        label: 'Wellness Tracking Data',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [this.props.exercise,
                        this.props.mindfulness,
                        this.props.sleep,
                        this.props.connectedness,
                        this.props.nutrition
                        ]
                    }]
                  }
              }))}}
    
        componentDidMount(){
            this.setGraphData()
        }

    render(){
        return (
        <div className="d-flex justify-content-center mt-4">
            {this.state.responses.length !== 0 ? <div className="graphContainer d-flex justify-content-center border border-dark p-4"><Radar className="d-flex justify-content-center m-3" data={this.state.data}/></div> : <div className="d-flex justify-content-center"><span className="mt-5">No Survey Data to Display</span></div>}
        </div>
        )
    }
}

export default RadarChart;