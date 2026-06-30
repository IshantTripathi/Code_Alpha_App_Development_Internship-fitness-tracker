import { useState } from "react";

function BMI() {
  const [height, setHeight] =
    useState("");

  const [weight, setWeight] =
    useState("");

  const [bmi, setBMI] =
    useState(null);

  const [status, setStatus] =
    useState("");

  const calculateBMI = () => {
    if (!height || !weight)
      return;

    const heightInMeters =
      height / 100;

    const bmiValue = (
      weight /
      (heightInMeters *
        heightInMeters)
    ).toFixed(1);

    setBMI(bmiValue);

    if (bmiValue < 18.5) {
      setStatus(
        "Underweight"
      );
    } else if (
      bmiValue < 25
    ) {
      setStatus("Normal");
    } else if (
      bmiValue < 30
    ) {
      setStatus(
        "Overweight"
      );
    } else {
      setStatus("Obese");
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl">

      <h2 className="text-2xl font-bold mb-5">
        BMI Calculator 🧠
      </h2>

      <div className="space-y-4">

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) =>
            setHeight(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) =>
            setWeight(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        />

        <button
          onClick={
            calculateBMI
          }
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-4 rounded-xl font-bold"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="text-center mt-4">
            
            <h1 className="text-4xl font-bold text-cyan-400">
              {bmi}
            </h1>

            <p className="text-gray-300 mt-2">
              {status}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMI;