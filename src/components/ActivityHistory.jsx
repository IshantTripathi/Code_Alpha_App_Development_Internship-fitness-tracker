function ActivityHistory({
  activities,
  deleteActivity,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl mt-8">
      
      <h2 className="text-2xl font-bold mb-5">
        Recent Activities 🏋️
      </h2>

      {activities.length === 0 ? (
        <p className="text-gray-400">
          No activities added yet.
        </p>
      ) : (
        <div className="space-y-4">
          {activities.map(
            (activity) => (
              <div
                key={activity.id}
                className="bg-slate-800 p-5 rounded-2xl flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold">
                    {
                      activity.workout
                    }
                  </h3>

                  <p className="text-gray-400">
                    {
                      activity.calories
                    }
                    kcal •{" "}
                    {
                      activity.duration
                    }
                    mins •{" "}
                    {
                      activity.steps
                    }{" "}
                    steps
                  </p>
                </div>

                <button
                  onClick={() =>
                    deleteActivity(
                      activity.id
                    )
                  }
                  className="bg-red-500 px-4 py-2 rounded-xl"
                >
                  Delete
                </button>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default ActivityHistory;