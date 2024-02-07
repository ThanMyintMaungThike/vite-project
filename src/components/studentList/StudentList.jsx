import React from 'react'

const studentList = [
    {
        id: 1,
        name: "Aung",
        grade: "A",
    },
    {
        id: 2,
        name: "Aye Aye",
        grade: "B",
    },
    {
        id: 3,
        name: "BoBo",
        grade: "C",
    },
    {
        id: 4,
        name: "Sue",
        grade: "D",
    },
];
const StudentList = () => {
  return (
    <div>
      <h2>StudentList</h2>
      <div className="students">
        {studentList.map((student) => (
            <div className="student" key={student.id}>
                <h3>Student Name: {student.name}</h3>
                <h3>Student Grade: {student.grade}</h3>
            </div>
        ))}
      </div>
    </div>
  )
}

export default StudentList
