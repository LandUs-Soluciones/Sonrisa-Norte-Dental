import React from "react";
import { PROCESS_STEPS } from "../config/clinicData";
import SectionHeader from "../components/SectionHeader";
import WhatsAppButton from "../components/WhatsAppButton";
import "../styles/process.css";

export default function Process() {
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <SectionHeader
          badge="Agendamiento Rápido"
          title="Tu cita lista en 3 simples pasos"
          subtitle="Olvídate de formularios interminables. Agenda directamente por WhatsApp en menos de 2 minutos."
        />

        <div className="process-grid">
          {PROCESS_STEPS.map((stepItem, index) => (
            <div key={index} className="process-card">
              <div className="process-step-badge">{stepItem.step}</div>
              <h3 className="process-title">{stepItem.title}</h3>
              <p className="process-desc">{stepItem.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <WhatsAppButton text="Empieza ahora por WhatsApp" size="large" />
        </div>
      </div>
    </section>
  );
}
