import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";

export default function Login() {
  const [mode, setMode] = useState("login");

  return (
    <section id="login" className="relative py-28">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Account</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-800">
            {mode === "login" ? "Welcome back!" : "Join QuickBite"}
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Save your favorites, track orders in real time, and unlock member-only deals.
          </p>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80"
            alt="Tasty food"
            className="mt-8 hidden md:block rounded-3xl object-cover shadow-2xl shadow-orange-200/50"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ transformStyle: "preserve-3d" }}
          className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(251,146,60,0.18)]"
        >
          <div className="mb-6 flex rounded-2xl bg-orange-50 p-1">
            {["login", "signup"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 rounded-xl py-2.5 text-sm font-semibold capitalize transition-all duration-200 ${
                  mode === m ? "bg-white text-orange-500 shadow" : "text-slate-500"
                }`}
              >
                {m === "login" ? "Login" : "Sign Up"}
              </button>
            ))}
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === "signup" && (
              <Field icon={User} type="text" placeholder="Full name" />
            )}
            <Field icon={Mail} type="email" placeholder="Email address" />
            <Field icon={Lock} type="password" placeholder="Password" />
            <button className="w-full rounded-2xl bg-gradient-to-r from-orange-400 to-rose-400 py-3.5 font-semibold text-white shadow-lg shadow-orange-300/50 transition-transform duration-200 hover:scale-[1.02] active:scale-95">
              {mode === "login" ? "Login" : "Create account"}
            </button>
          </form>
          <p className="mt-5 text-center text-sm text-slate-400">
            {mode === "login" ? "New here? " : "Already a member? "}
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="font-semibold text-orange-500"
            >
              {mode === "login" ? "Create an account" : "Login instead"}
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, ...props }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3 transition-colors focus-within:border-orange-300 focus-within:bg-white">
      <Icon className="h-5 w-5 text-slate-400" />
      <input
        {...props}
        className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
      />
    </div>
  );
}