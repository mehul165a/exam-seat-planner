import { useState } from "react";

function AllocateExam({ onAllocate }) {
  const [students, setStudents] = useState("");

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold">Allocate Exam</h2>

        <div className="flex gap-4">
            <input
            type="number"
            placeholder="Total Students"
            className="flex-1 bg-gray-700 border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={students}
            onChange={(e) => setStudents(e.target.value)}
            />

            <button
            onClick={() => onAllocate(Number(students))}
            className="bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded-lg font-semibold"
            >
            Allocate
            </button>
        </div>
    </div>
  );
}

export default AllocateExam;