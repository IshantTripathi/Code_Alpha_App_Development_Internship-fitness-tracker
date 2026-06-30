import { CircularProgressbar } from
"react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function GoalProgress() {
  const percentage = 78;

  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl flex flex-col items-center">
      
      <h2 className="text-2xl font-bold mb-5">
        Daily Goal 🎯
      </h2>

      <div className="w-40 h-40">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
        />
      </div>

      <p className="mt-4 text-gray-300">
        You completed your goal!
      </p>
    </div>
  );
}

export default GoalProgress;