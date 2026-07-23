import React from "react";
import CursorGlow from "../components/quickbite/CursorGlow";
import Navbar from "../components/quickbite/Navbar";
import Hero from "../components/quickbite/Hero";
import About from "../components/quickbite/About";
import Menu from "../components/quickbite/Menu";
import Login from "../components/quickbite/Login";
import Contact from "../components/quickbite/Contact";
import Footer from "../components/quickbite/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-slate-800 antialiased overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Login />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}