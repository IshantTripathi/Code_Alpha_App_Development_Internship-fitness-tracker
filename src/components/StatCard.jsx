import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-gradient-to-r ${color} p-6 rounded-3xl shadow-xl`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-200">
            {title}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {value}
          </h1>
        </div>

        <i className={`${icon} text-5xl`}></i>
      </div>
    </motion.div>
  );
}

export default StatCard;