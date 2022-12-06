import "./App.css";
import React from "react";
import { v1 as uuidv1 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { AddOne, AddStudent, SubOne } from "./redux/actions";

function App() {
  const dispath = useDispatch();
  const [student, setStudent] = React.useState("");

  const students = useSelector((state) => state.students);
  const startNumber = useSelector((state) => state.startNuber);

  const handleUpNumber = () => {
    dispath(AddOne());
  };

  const handleDowNumber = () => {
    dispath(SubOne());
  };

  const handleSaveStudent = () => {
    if (student) {
      const data = {
        id: uuidv1(),
        name: student,
      };

      dispath(AddStudent(data));
      setStudent("");
    } else {
      alert("Please, enter name of students");
    }
  };

  return (
    <div className="App">
      <h1>How to install</h1>
      <button type="button" onClick={handleUpNumber}>
        Add number
      </button>
      <div>
        <span>{startNumber}</span>
      </div>
      <button type="button" onClick={handleDowNumber}>
        Sub number
      </button>

      <div>
        <input
          type="text"
          value={student}
          onChange={(e) => setStudent(e.target.value)}
        />
        <button type="button" onClick={handleSaveStudent}>
          Save
        </button>
        <div>
          <ul>
            {students.map((item) => {
              return (
                <li key={item.id}>
                  {item.name} : {item.id}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
