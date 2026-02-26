import { useState } from "react";
import AddClassroom from "./components/AddClassroom";
import ClassroomList from "./components/ClassroomList";
import AllocateExam from "./components/AllocateExam";
import OutputPanel from "./components/OutputPanel";

function App() {
  const [classrooms, setClassrooms] = useState([]);
  const [allocatedRooms, setAllocatedRooms] = useState([]);
  const [error, setError] = useState("");

  const addClassroom = (room) => {
  const exists = classrooms.some(r => r.roomId === room.roomId);
  if (exists) {
    alert("Room ID already exists");
    return;
  }
  setClassrooms([...classrooms, room]);
};

  const allocateExam = (totalStudents) => {
  setError("");
  setAllocatedRooms([]);

  if (!totalStudents || totalStudents <= 0) {
    setError("Please enter a valid number of students");
    return;
  }

  if (classrooms.length === 0) {
    setError("No classrooms available");
    return;
  }

  const sortedRooms = [...classrooms].sort((a, b) => {
    if (a.floorNo === b.floorNo) {
      return b.capacity - a.capacity;
    }
    return a.floorNo - b.floorNo;
  });

  let selected = [];
  let totalCapacity = 0;

  for (let room of sortedRooms) {
    if (totalCapacity >= totalStudents) break;
    selected.push(room);
    totalCapacity += room.capacity;
  }

  if (totalCapacity < totalStudents) {
    setError("Not enough seats available");
    return;
  }

  setAllocatedRooms(selected);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex justify-center p-6">
      <div className="w-full max-w-5xl space-y-8">

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-wide">
            College Exam Seat Planner
          </h1>
        </div>

        <AddClassroom onAdd={addClassroom} />
        <ClassroomList classrooms={classrooms} />
        <AllocateExam onAllocate={allocateExam} />
        <OutputPanel rooms={allocatedRooms} error={error} />

      </div>
    </div>
  );
}

export default App;