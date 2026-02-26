import { useState } from "react";

function AddClassroom({ onAdd }) {
  const [form, setForm] = useState({
    roomId: "",
    capacity: "",
    floorNo: "",
    nearWashroom: false,
  });

  const handleSubmit = (e) => {
  e.preventDefault();

  if (Number(form.capacity) <= 0 || Number(form.floorNo) < 0) {
    alert("Invalid input values");
    return;
  }

  if (!form.roomId || !form.capacity || !form.floorNo) {
    alert("All fields required");
    return;
  }

  if (form.capacity <= 0 || form.floorNo < 0) {
    alert("Invalid capacity or floor number");
    return;
  }

  

  onAdd({
    ...form,
    capacity: Number(form.capacity),
    floorNo: Number(form.floorNo),
  });

  setForm({ roomId: "", capacity: "", floorNo: "", nearWashroom: false });
};

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold">Add Classroom</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
            placeholder="Room ID"
            className="bg-gray-700 border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.roomId}
            onChange={(e) => setForm({ ...form, roomId: e.target.value })}
            />

            <input
            type="number"
            placeholder="Capacity"
            className="bg-gray-700 border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.capacity}
            onChange={(e) => setForm({ ...form, capacity: e.target.value })}
            />

            <input
            type="number"
            placeholder="Floor No"
            className="bg-gray-700 border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.floorNo}
            onChange={(e) => setForm({ ...form, floorNo: e.target.value })}
            />

            <label className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={form.nearWashroom}
                onChange={(e) =>
                setForm({ ...form, nearWashroom: e.target.checked })
                }
            />
            Near Washroom
            </label>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg font-semibold">
            Add Classroom
        </button>
    </form>
  );
}

export default AddClassroom;