import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const info = [
  { icon: MapPin, label: "Visit us", value: "123 Flavor Street, Foodie City" },
  { icon: Phone, label: "Call us", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email us", value: "hello@quickbite.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-white to-orange-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Contact</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-800">Get in touch</h2>
          <p className="mt-4 text-lg text-slate-500">Questions, feedback, or a craving? We'd love to hear from you.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {info.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-[0_10px_40px_rgba(251,146,60,0.10)] transition-shadow hover:shadow-[0_18px_50px_rgba(251,146,60,0.2)]"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100 text-orange-500">
                  <it.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{it.label}</p>
                  <p className="font-semibold text-slate-800">{it.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(251,146,60,0.15)]"
          >
            <div className="space-y-4">
              <input
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-colors focus:border-orange-300 focus:bg-white focus:outline-none"
              />
              <input
                placeholder="Your email"
                className="w-full rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-colors focus:border-orange-300 focus:bg-white focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-colors focus:border-orange-300 focus:bg-white focus:outline-none"
              />
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-400 to-rose-400 py-3.5 font-semibold text-white shadow-lg shadow-orange-300/50 transition-transform duration-200 hover:scale-[1.02] active:scale-95">
                Send message <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}