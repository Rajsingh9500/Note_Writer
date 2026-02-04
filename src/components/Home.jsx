import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-[#0e1117]">

      {/* SOFT RADIAL GRADIENT BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-white/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur"
        >
          ✨ Private • Minimal • Fast
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6"
        >
          Write things down. <br />
          <span className="text-gray-300 font-semibold">
            Keep your mind clear.
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-gray-400 text-lg mb-10"
        >
          A calm space for notes, ideas, and thoughts —
          designed to help you focus, not distract.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Link
            to="/note"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            Start Writing
          </Link>

          <Link
            to="/note"
            className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            View Notes
          </Link>
        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 text-sm text-gray-500"
        >
          Minimal by design. Powerful by habit.
        </motion.div>
      </div>
    </div>
  );
};

export default Home;