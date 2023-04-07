import React, { useState } from "react";

export default function Student() {
  let studentsList = []

  let [students, setStudentsList] = useState(studentsList);
  let [studentName, setName] = useState("");
  let [studentAge, setAge] = useState("");
  let [nameError, setNameError] = useState("");
  let [ageError, setAgeError] = useState("");
  const addStudent = () => {
    let flag = true
    setNameError("")
    setAgeError("")
    if(studentName === "") {
      setNameError("Name is required")
      flag = false
    }
    if(!studentName.match(/^[a-zA-Z_\s\\-]*$/)) {
      setNameError("Name must be string")
      flag = false
    }
    if(studentAge === ""){
      setAgeError("Age is required")
      flag = false
    }
    else if (!studentAge.match(/^[0-9]*$/)){
      setAgeError("Age must be Number")
      flag = false
    }
    else if (parseInt(studentAge) < 18){
      setAgeError("Age must be more than 18")
      flag = false
    }
    if(flag){
   
      setStudentsList([...students, {id: ++students.length, name: studentName, age: studentAge}]);
      setNameError("")
      setAgeError("")
      setName("")
      setAge("")

    }
  };
      return (
        <section className="main mt-5">
          <section className="container">
            <h1 className="my-5">Add New Student</h1>
            <div className="row">
              <div className="mb-3 col-12 col-md-4">
                <label for="name" className="form-label">Student Name </label>
                <input type="text" className="form-control" id="name"
                 placeholder="Enter Student Name" name="name"
                 value={studentName}
                 onChange={(e)=>setName(e.target.value)}
                 />
                <p className="text-danger">{nameError}</p>
              </div>
              <div className="mb-3 col-12 col-md-4">
                <label for="age" className="form-label">Student Age </label>
                <input type="text" className="form-control" id="age" 
                  placeholder="Enter Student Age" name="age"
                  value={studentAge}
                  onChange={(e)=>setAge(e.target.value)}
                />
                <p className="text-danger">{ageError}</p>
              </div>

              
            </div>
                <div className="mb-3 col-3 col-md-1 m-auto">
                                <button className="btn btn-success py-2 px-3 mt-1 w-100 border rounded"
                                onClick={addStudent}>Add</button>
                            </div>
            <div className="row border my-5 p-5">
              <h1 className="col-12 text-center mb-5"> Student List </h1>
              <div className="row">
                <div className="mb-3 col">
                  <table className="table table-hover text-center">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Student Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        students.map((student) => {
                          return (
                            <tr key={student.id}>
                              <td>{student.id}</td>
                              <td>{student.name}</td>
                              <td>{student.age}</td>
                            </tr>
                          )
                          
                        })
                      }
                    </tbody>
                  </table>
                  </div>
              </div>
            </div>

          </section>
        </section>

      );
    }
  