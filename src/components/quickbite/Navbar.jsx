import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Menu as MenuIcon, X } from "lucide-react";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Menu", id: "menu" },
  { label: "Login", id: "login" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(251,146,60,0.12)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-orange-400 to-rose-400 text-white shadow-lg shadow-orange-300/50 transition-transform duration-300 group-hover:rotate-12">
            <UtensilsCrossed className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            Quick<span className="text-orange-500">Bite</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors duration-200 after:absolute after:left-4 after:bottom-1 after:h-0.5 after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("menu")}
            className="ml-3 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Order Now
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700">
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl mt-3 mx-4 rounded-2xl shadow-xl"
        >
          <div className="flex flex-col p-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-orange-50"
              >
                {l.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}