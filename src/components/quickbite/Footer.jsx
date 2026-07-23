import React from "react";
import { UtensilsCrossed } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-orange-100 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-orange-400 to-rose-400 text-white shadow-md">
            <UtensilsCrossed className="h-4 w-4" />
          </div>
          <span className="text-lg font-bold text-slate-800">
            Quick<span className="text-orange-500">Bite</span>
          </span>
        </div>
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} QuickBite. Made with 🧡 for food lovers.</p>
      </div>
    </footer>
  );
}