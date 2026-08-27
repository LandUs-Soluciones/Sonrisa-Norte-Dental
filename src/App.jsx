import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Services from "./sections/Services";
import ServiceCatalog from "./sections/ServiceCatalog";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import Faq from "./sections/Faq";
import Location from "./sections/Location";
import FinalCta from "./sections/FinalCta";
import Team from "./sections/Team";
import AdminPanel from "./sections/AdminPanel";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import useClinicContent from "./hooks/useClinicContent";

import "./styles/global.css";

export default function App() {
  const clinicContent = useClinicContent();
  const {
    services,
    dentists,
    employees,
    addItem,
    updateItem,
    removeItem,
    resetContent,
  } = clinicContent;

  return (
    <div className="app-layout">
      {/* Barra de Navegación Fija */}
      <Navbar />

      {/* Contenido Principal */}
      <main>
        <Hero />
        <About />
        <Benefits />
        <Services services={services} />
        <ServiceCatalog services={services} />
        <Team dentists={dentists} employees={employees} />
        <Stats />
        <Process />
        <Testimonials />
        <Faq />
        <Location />
        <FinalCta />
        <AdminPanel
          services={services}
          dentists={dentists}
          employees={employees}
          addItem={addItem}
          updateItem={updateItem}
          removeItem={removeItem}
          resetContent={resetContent}
        />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Botón Flotante Permanente */}
      <FloatingWhatsApp />
    </div>
  );
}
