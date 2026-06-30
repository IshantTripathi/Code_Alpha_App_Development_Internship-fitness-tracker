import { useState } from "react";

function WaterTracker() {
  const [water, setWater] = useState(4);

  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl">
      
      <h2 className="text-2xl font-bold mb-5">
        Water Intake 💧
      </h2>

      <h1 className="text-5xl font-bold text-cyan-400">
        {water} Glasses
      </h1>

      <div className="flex gap-4 mt-6">
        
        <button
          onClick={() =>
            setWater(water - 1)
          }
          className="bg-red-500 px-4 py-2 rounded-xl"
        >
          -
        </button>

        <button
          onClick={() =>
            setWater(water + 1)
          }
          className="bg-cyan-500 px-4 py-2 rounded-xl"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default WaterTracker;