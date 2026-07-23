import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12"
      style={{ perspective: "1200px" }}
    >
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-rose-200/50 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-orange-500 shadow-md">
            <Star className="h-4 w-4 fill-orange-400 text-orange-400" /> Rated #1 in your city
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-800">
            Delicious food,
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              delivered fast.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-slate-500">
            Fresh meals from the best local kitchens, brought right to your door with QuickBite — warm, fast, and effortless.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 px-7 py-3.5 font-semibold text-white shadow-xl shadow-orange-300/50 transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Explore Menu
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Clock className="h-5 w-5 text-orange-500" /> Avg. 25 min delivery
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto h-80 w-80 md:h-96 md:w-96"
          >
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
              alt="Delicious pizza"
              className="h-full w-full rounded-full object-cover shadow-2xl shadow-orange-300/40 ring-8 ring-white"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 left-0 rounded-2xl bg-white px-5 py-3 shadow-xl"
          >
            <p className="text-xs text-slate-400">Free delivery</p>
            <p className="font-bold text-slate-800">on orders $20+</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 right-0 rounded-2xl bg-white px-5 py-3 shadow-xl"
          >
            <p className="text-xs text-slate-400">Live tracking</p>
            <p className="font-bold text-slate-800">🔥 Hot & fresh</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}