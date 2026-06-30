import { useState } from "react";
import { motion } from "framer-motion";

function AddActivityModal({
  isOpen,
  setIsOpen,
  addActivity,
}) {
  const [formData, setFormData] =
    useState({
      workout: "",
      calories: "",
      duration: "",
      steps: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newActivity = {
      id: Date.now(),
      ...formData,
      date:
        new Date().toLocaleDateString(),
    };

    addActivity(newActivity);

    setFormData({
      workout: "",
      calories: "",
      duration: "",
      steps: "",
    });

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        className="bg-slate-900 p-8 rounded-3xl w-[450px] border border-cyan-500/20"
      >
        <h2 className="text-3xl font-bold mb-5">
          Add Activity 💪
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="workout"
            placeholder="Workout Type"
            value={formData.workout}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <input
            type="number"
            name="calories"
            placeholder="Calories"
            value={formData.calories}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <input
            type="number"
            name="duration"
            placeholder="Duration (mins)"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <input
            type="number"
            name="steps"
            placeholder="Steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <div className="flex gap-4 mt-4">
            <button
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 p-4 rounded-xl font-bold"
            >
              Save
            </button>

            <button
              type="button"
              onClick={() =>
                setIsOpen(false)
              }
              className="flex-1 bg-red-500 hover:bg-red-600 p-4 rounded-xl font-bold"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default AddActivityModal;