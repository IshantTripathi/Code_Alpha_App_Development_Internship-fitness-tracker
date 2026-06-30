import { motion } from "framer-motion";

function Sidebar() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-72 bg-white/10 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col"
    >
      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        FitTrack ⚡
      </h1>

      <div className="space-y-4">

        <a
          href="#dashboard"
          className="flex items-center gap-4 p-4 rounded-2xl hover:bg-cyan-500/20 transition"
        >
          <i className="bi bi-grid-fill text-2xl"></i>
          <span className="font-medium">
            Dashboard
          </span>
        </a>

        <a
          href="#activity"
          className="flex items-center gap-4 p-4 rounded-2xl hover:bg-cyan-500/20 transition"
        >
          <i className="bi bi-heart-pulse-fill text-2xl"></i>
          <span className="font-medium">
            Activity
          </span>
        </a>

        <a
          href="#progress"
          className="flex items-center gap-4 p-4 rounded-2xl hover:bg-cyan-500/20 transition"
        >
          <i className="bi bi-bar-chart-fill text-2xl"></i>
          <span className="font-medium">
            Progress
          </span>
        </a>

        <a
          href="#profile"
          className="flex items-center gap-4 p-4 rounded-2xl hover:bg-cyan-500/20 transition"
        >
          <i className="bi bi-person-circle text-2xl"></i>
          <span className="font-medium">
            Profile
          </span>
        </a>
      </div>

      <div className="mt-auto bg-gradient-to-r from-cyan-500 to-purple-600 p-5 rounded-3xl">
        <h2 className="font-bold text-lg">
          Stay Healthy 💪
        </h2>

        <p className="text-sm text-gray-200 mt-2">
          Track your workouts and stay fit every day.
        </p>
      </div>
    </motion.div>
  );
}

export default Sidebar;