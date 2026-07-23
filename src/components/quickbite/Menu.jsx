import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Star } from "lucide-react";

const dishes = [
  { name: "Crispy Calamari", cat: "Appetizers", price: 8.99, rating:!4.7, desc: "Golden fried squid with lemon aioli", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80" },
  { name: "Bruschetta", cat: "Appetizers", price: 6.49, rating: 4.6, desc: "Toasted bread, tomato, basil & olive oil", img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80" },
  { name: "Loaded Nachos", cat: "Appetizers", price: 9.49, rating: 4.8, desc: "Cheese, jalapeños, guac & sour cream", img: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&w=600&q=80" },
  { name: "Margherita Pizza", cat: "Main Course", price: 12.99, rating: 4.9, desc: "Fresh mozzarella, basil, tomato sauce", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80" },
  { name: "Grilled Salmon", cat: "Main Course", price: 16.5, rating: 4.9, desc: "Atlantic salmon with lemon butter", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80" },
  { name: "Classic Burger", cat: "Main Course", price: 9.99, rating: 4.8, desc: "Beef patty, cheddar, lettuce & sauce", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
  { name: "Creamy Pasta", cat: "Main Course", price: 13.5, rating: 4.7, desc: "Penne in a rich Alfredo sauce", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80" },
  { name: "Chocolate Cake", cat: "Desserts", price: 6.99, rating: 4.9, desc: "Molten lava cake with vanilla cream", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
  { name: "Strawberry Cheesecake", cat: "Desserts", price: 7.49, rating: 4.8, desc: "Creamy cheesecake with fresh berries", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80" },
  { name: "Tiramisu", cat: "Desserts", price: 6.49, rating: 4.7, desc: "Coffee-soaked layers with mascarpone", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80" },
];

const cats = ["All", "Appetizers", "Main Course", "Desserts"];

export default function Menu() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? dishes : dishes.filter((d) => d.cat === active);

  return (
    <section id="menu" className="relative py-28 bg-gradient-to-b from-orange-50/60 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Our Menu</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-800">Pick your favorite</h2>
          <p className="mt-4 text-lg text-slate-500">Browse by category — every dish made fresh to order.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
                active === c
                  ? "bg-gradient-to-r from-orange-400 to-rose-400 text-white shadow-lg shadow-orange-300/50"
                  : "bg-white text-slate-600 shadow-sm hover:shadow-md hover:text-orange-500"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
          style={{ perspective: "1200px" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((d, i) => (
              <motion.div
                key={d.name}
                layout
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ rotateY: 10, rotateX: -8, y: -12, scale: 1.04 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative rounded-3xl bg-white p-4 shadow-[0_10px_40px_rgba(251,146,60,0.10)] transition-shadow duration-300 hover:shadow-[0_30px_70px_rgba(251,146,60,0.28)]"
              >
                <div className="relative overflow-hidden rounded-2xl" style={{ transform: "translateZ(40px)" }}>
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow backdrop-blur">
                    <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" /> {d.rating}
                  </span>
                  <span className="absolute top-3 right-3 rounded-full bg-orange-500/90 px-3 py-1 text-xs font-semibold text-white shadow backdrop-blur">
                    {d.cat}
                  </span>
                </div>
                <div className="mt-4 px-1" style={{ transform: "translateZ(30px)" }}>
                  <h3 className="font-bold text-slate-800">{d.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{d.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-extrabold text-orange-500">${d.price}</span>
                    <button className="flex items-center gap-1.5 rounded-xl bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 transition-colors duration-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-rose-400 hover:text-white">
                      <Plus className="h-4 w-4" /> Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}