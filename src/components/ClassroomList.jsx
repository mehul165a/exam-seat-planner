function ClassroomList({ classrooms }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Classroom List</h2>

        {classrooms.length === 0 ? (
            <p className="text-gray-400">No classrooms added yet.</p>
        ) : (
            <div className="space-y-2">
            {classrooms.map((room, index) => (
                <div
                key={index}
                className="bg-gray-700 p-3 rounded-lg flex justify-between"
                >
                <span>
                    <span className="font-semibold">{room.roomId}</span>
                    <span className="text-gray-300 ml-2">
                    Capacity: {room.capacity}
                    </span>
                </span>
                <span className="text-gray-400">
                    Floor {room.floorNo}
                </span>
                </div>
            ))}
            </div>
        )}
    </div>
  );
}

export default ClassroomList;