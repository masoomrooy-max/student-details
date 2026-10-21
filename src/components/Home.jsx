import React from 'react'
import { Link } from 'react-router-dom'
import students from '../data.js'
import '../style/Home.css';

function Home() {
  return (
  <>
  <div className="home-container">
  <h1>Our Students 🎓</h1>
    <div className="students-list">
        
  {students.map((student) => (
    <Link
      to={`/student/${student.id}`}
      key={student.id}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="student-card">
        <h2>{student.name}</h2>
      </div>
    </Link>
  ))}
</div>
</div>
    </>
    )

}


export default Home;

    
 