import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ProgressChart from "../components/ProgressChart";
import GoalProgress from "../components/GoalProgress";
import WaterTracker from "../components/WaterTracker";
import BMI from "../components/BMI";
import Profile from "./Profile";
import AddActivityModal from "../components/AddActivityModal";
import ActivityHistory from "../components/ActivityHistory";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activities, setActivities] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const savedActivities =
      JSON.parse(
        localStorage.getItem(
          "fitnessActivities"
        )
      ) || [];

    setActivities(savedActivities);
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem(
      "fitnessActivities",
      JSON.stringify(activities)
    );
  }, [activities]);

  // Add activity
  const addActivity = (newActivity) => {
    setActivities([
      ...activities,
      newActivity,
    ]);
  };

  // Delete activity
  const deleteActivity = (id) => {
    setActivities(
      activities.filter(
        (activity) =>
          activity.id !== id
      )
    );
  };

  // Dynamic stats
  const totalSteps =
    activities.reduce(
      (acc, curr) =>
        acc +
        Number(curr.steps),
      0
    );

  const totalCalories =
    activities.reduce(
      (acc, curr) =>
        acc +
        Number(curr.calories),
      0
    );

  const totalWorkout =
    activities.reduce(
      (acc, curr) =>
        acc +
        Number(
          curr.duration
        ),
      0
    );

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Header */}
        <div
          id="dashboard"
          className="flex justify-between items-center mb-10"
        >
          <div>
            <h1 className="text-5xl font-bold">
              Fitness Dashboard 🔥
            </h1>

            <p className="text-gray-400 mt-2">
              Track your progress and stay fit.
            </p>
          </div>

          <button
            onClick={() =>
              setIsOpen(true)
            }
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-bold shadow-lg transition"
          >
            + Add Activity
          </button>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <StatCard
            title="Steps"
            value={totalSteps}
            icon="bi bi-shoe-print-fill"
            color="from-cyan-500 to-blue-600"
          />

          <StatCard
            title="Calories"
            value={`${totalCalories} kcal`}
            icon="bi bi-fire"
            color="from-orange-500 to-red-600"
          />

          <StatCard
            title="Workout"
            value={`${totalWorkout} mins`}
            icon="bi bi-stopwatch-fill"
            color="from-purple-500 to-pink-600"
          />
        </div>

        {/* Progress Section */}
        <div
          id="progress"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8"
        >
          <div className="lg:col-span-2">
            <ProgressChart />
          </div>

          <GoalProgress />
        </div>

        {/* Water + BMI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <WaterTracker />

          <BMI />

        </div>

        {/* Profile Section */}
        <div
          id="profile"
          className="mt-8"
        >
          <Profile />
        </div>

        {/* Activity Section */}
        <div
          id="activity"
          className="mt-8"
        >
          <ActivityHistory
            activities={activities}
            deleteActivity={
              deleteActivity
            }
          />
        </div>

        {/* Add Activity Modal */}
        <AddActivityModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          addActivity={addActivity}
        />
      </div>
    </div>
  );
}

export default Dashboard;