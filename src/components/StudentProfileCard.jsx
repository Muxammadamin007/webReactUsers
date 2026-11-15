import './StudentProfileCard.css'
function StudentProfileCard({ name, studentId, major, year, gpa }) {
  return (
    <div className="student-card">

      <div className="student-heading">
        <span className="student-icon">✦</span>
        <span>STUDENT PROFILE</span>
      </div>

      <h2>{name}</h2>
      <p className="student-major">{major}</p>

      <div className="student-info">
        <p>
          <span>Student ID</span>
          <strong>{studentId}</strong>
        </p>

        <p>
          <span>Academic Year</span>
          <strong>{year}</strong>
        </p>

        <p>
          <span>GPA</span>
          <strong>{gpa}</strong>
        </p>
      </div>

      <div className="student-footer">
        <span>COMPUTER ENGINEERING</span>
        <span>↗</span>
      </div>

    </div>
  )
}

export default StudentProfileCard