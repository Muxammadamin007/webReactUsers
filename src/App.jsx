import React from 'react'
import StudentProfileCard from './components/StudentProfileCard.jsx'
import './App.css'

function App() {
  return (
    <div className="directory">
      <header className="directory-header">
        <span className="eyebrow">REACT PROJECT · 2026</span>
        <h1>Student <span>Directory.</span></h1>
        <p>Meet the students of Computer Engineering.</p>
      </header>

      <div className="directory-info">
        <span>STUDENT COLLECTION</span>
        <span>03 STUDENTS</span>
      </div>

      <div className="card-list">
        <StudentProfileCard
          name="Khakimov Mukhammadamin"
          studentId="202537558"
          major="Computer Engineering"
          year={3}
          gpa={4.3}
        />

        <StudentProfileCard
          name="Abdulaziz Bakhriddinov"
          studentId="202537225"
          major="Computer Engineering"
          year={2}
          gpa={4.3}
        />

        <StudentProfileCard
          name="Asadbek Nosirjonov"
          studentId="202537228"
          major="Computer Engineering"
          year={4}
          gpa={4.3}
        />
      </div>
    </div>
  )
}

export default App