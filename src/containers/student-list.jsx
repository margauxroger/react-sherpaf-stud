import React, { Component } from 'react';
import Student from "./student";
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class StudentList extends Component {
  render() {
    return (
      <div className="student-list">
        {this.props.students.map((student) => {
            return (
              <Student student={student} key={student.id}/>
          );
        })}
      </div>
    )
  }
}

export default StudentList;
