import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CanvasJSReact from '../canvasjs.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StudentDashboard extends Component {
  render() {
console.log(this.props)

  if (!this.props.activeStudent) {
    return (
      <div className="active-city">
        <p>Select a student...</p>
      </div>
    );
  }


const data_graph = []
const data = this.props.grades.forEach((grade) => {
                    let hash = new Object();

                    hash.label = grade.chapter;
                    hash.y = grade.score;
                    data_graph.push(hash);
                });
console.log(data_graph);

const options = {
      title: {
        text: "Flashcard score chapter by chapter"
      },
      data: [{
                type: "column",
                color: "rgb(128, 1, 128)",
                dataPoints: data_graph
       }],
       scales: {
              yAxes: [{
                  ticks: {
                      display: true,
                      beginAtZero: true,
                      suggestedMin: 0,
                      suggestedMax: 100
                  },
                  gridLines : {
                    display: true,
                  }
              }]
          },
   }

   return (
      <div>
      <h2>{this.props.activeStudent.first_name}'s Individual Dashboard</h2>
      <img src={this.props.activeStudent.picture_url} alt="" className="avatar"/>
      <p>Overall score: {this.props.activeStudent.grade} / 100</p>
        <CanvasJSChart options = {options} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeStudent: state.activeStudent
  };
}
export default connect(mapStateToProps)(StudentDashboard);
