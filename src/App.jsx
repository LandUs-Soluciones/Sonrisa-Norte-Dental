import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Services from "./sections/Services";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import Faq from "./sections/Faq";
import Location from "./sections/Location";
import FinalCta from "./sections/FinalCta";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import "./styles/global.css";

export default function App() {
  return (
    <div className="app-layout">
      {/* Barra de Navegación Fija */}
      <Navbar />

      {/* Contenido Principal */}
      <main>
        <Hero />
        <Benefits />
        <Services />
        <About />
        <Stats />
        <Process />
        <Testimonials />
        <Faq />
        <Location />
        <FinalCta />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Botón Flotante Permanente */}
      <FloatingWhatsApp />
    </div>
  );
}
