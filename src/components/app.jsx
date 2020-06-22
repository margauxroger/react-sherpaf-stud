import React from 'react';
import StudentList from "../containers/student-list";
import StudentDashboard from "../containers/student-dashboard";


const student = [
  {
    first_name: "Lola",
    grade: 42,
    email: "lola@gmail.com",
    id: 100,
    picture_url: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    first_name: "Eric",
    grade: 42,
    email: "lola@gmail.com",
    id: 2,
    picture_url: "https://randomuser.me/api/portraits/women/47.jpg",
  }
];

const grades = [
  {
    student_id: 100,
    chapter: "chapter 1",
    score: 27
  },
  {
    student_id: 100,
    chapter: "chapter 12",
    score: 56
  },
  {
    student_id: 100,
    chapter: "chapter 15",
    score: 80
  }
];

const App = () => {
  return (
    <div className="app">
      <StudentList students={student} />
      <StudentDashboard grades={grades} />
    </div>
  );
};



export default App;
