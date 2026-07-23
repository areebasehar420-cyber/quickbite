import React from "react";
import { motion } from "framer-motion";
import { Leaf, Truck, ChefHat, Heart } from "lucide-react";

const features = [
  { icon: ChefHat, title: "Top Chefs", desc: "Crafted by award-winning local kitchens." },
  { icon: Leaf, title: "Fresh Daily", desc: "Locally sourced, fresh ingredients every day." },
  { icon: Truck, title: "Fast Delivery", desc: "Hot food at your door in under 30 minutes." },
  { icon: Heart, title: "Made with Love", desc: "Every dish prepared with care and passion." },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">About Us</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-800">
            Food you love, made effortless
          </h2>
          <p className="mt-!4 text-lg text-slate-500">
            QuickBite connects you with the finest kitchens nearby. We obsess over quality, speed, and that warm feeling of a perfect meal arriving right on time.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ rotateX: 8, rotateY: -8, y: -8 }}
              style={{ transformStyle: "preserve-3d" }}
              className="rounded-3xl bg-white p-7 shadow-[0_10px_40px_rgba(251,146,60,0.10)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(251,146,60,0.22)]"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100 text-orange-500">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}