import React from "react";
import WhatsAppButton from "../components/WhatsAppButton";
import "../styles/cta.css";

export default function FinalCta() {
  return (
    <section className="cta-section bg-white">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">
            Da el primer paso hacia una sonrisa más saludable
          </h2>
          <p className="cta-subtitle">
            Agenda tu evaluación hoy mismo y recibe atención personalizada en un
            ambiente cómodo, moderno y sin dolor.
          </p>
          <div className="cta-action-wrap">
            <WhatsAppButton
              text="Agendar por WhatsApp"
              size="large"
              message="Hola, deseo dar el primer paso y agendar mi cita en Sonrisa Norte Dental."
            />
            <span style={{ fontSize: "0.85rem", color: "#bae6fd" }}>
              ⚡ Respuesta inmediata en menos de 15 minutos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
