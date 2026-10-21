
import React from "react";
import { useParams, Link } from "react-router-dom";
import students from "../data";
import "../style/Content.css";

function Content() {
  const { id } = useParams();

  const student = students.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return <h2>Student not found!</h2>;
  }

  return (
    <div className="details-container">
      <h1>Student Details</h1>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>Gender: {student.gender}</p>
      <p>Email: {student.email}</p>
      <p>College: {student.college}</p>
      <p>About: {student.about}</p>

      <Link to="/" className="back-link">
        Back
      </Link>
    </div>
  );
}

export default Content;
