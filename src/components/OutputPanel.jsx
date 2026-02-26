function OutputPanel({ rooms, error }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Output</h2>

        {error && (
            <div className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-4">
            {error}
            </div>
        )}

        {rooms.length > 0 && (
            <div className="bg-green-500/20 p-4 rounded-lg space-y-2">
            <p className="font-semibold text-green-400">Allocated Rooms:</p>
            {rooms.map((room, index) => (
                <div key={index} className="flex justify-between">
                <span>{room.roomId}</span>
                <span>
                    Floor {room.floorNo} | Capacity {room.capacity}
                </span>
                </div>
            ))}

            <div className="border-t border-gray-600 pt-2 mt-2 text-sm text-gray-300">
                Total Capacity:{" "}
                {rooms.reduce((sum, r) => sum + r.capacity, 0)}
            </div>
            </div>
        )}
    </div>
  );
}

export default OutputPanel;