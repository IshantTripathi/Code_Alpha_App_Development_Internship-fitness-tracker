import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", calories: 300 },
  { day: "Tue", calories: 450 },
  { day: "Wed", calories: 500 },
  { day: "Thu", calories: 700 },
  { day: "Fri", calories: 650 },
  { day: "Sat", calories: 800 },
  { day: "Sun", calories: 900 },
];

function ProgressChart() {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
      
      <h2 className="text-2xl font-bold mb-5">
        Weekly Progress 📈
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>

          {/* Grid lines */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
          />

          {/* X Axis */}
          <XAxis
            dataKey="day"
            stroke="#94A3B8"
            tick={{ fill: "#CBD5E1" }}
          />

          {/* Y Axis */}
          <YAxis
            stroke="#94A3B8"
            tick={{ fill: "#CBD5E1" }}
          />

          {/* Premium Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "16px",
              color: "white",
              boxShadow:
                "0px 0px 20px rgba(34,211,238,0.3)",
            }}
            labelStyle={{
              color: "#22D3EE",
              fontWeight: "bold",
            }}
          />

          {/* Premium Line */}
          <Line
            type="monotone"
            dataKey="calories"
            stroke="#22D3EE"
            strokeWidth={5}
            dot={{
              r: 6,
              fill: "#22D3EE",
            }}
            activeDot={{
              r: 10,
              fill: "#06B6D4",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;