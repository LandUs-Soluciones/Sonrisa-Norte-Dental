import React from "react";
import { Star, ShieldCheck, ArrowRight } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Contenido Principal */}
          <div className="hero-content">
            <div className="hero-pill">
              <ShieldCheck size={16} />
              <span>Odontología Preventiva y Estética en Lima</span>
            </div>

            <h1 className="hero-title">
              Tu sonrisa merece el <span>mejor cuidado</span>
            </h1>

            <p className="hero-subtitle">
              Atención dental profesional, cercana y pensada para toda la
              familia. Diagnósticos precisos, tecnología moderna y un trato
              humano sin dolor.
            </p>

            <div className="hero-cta-group">
              <WhatsAppButton
                text="Agenda tu cita"
                size="large"
                message="Hola, quisiera agendar una cita de evaluación en Sonrisa Norte Dental."
              />
              <a href="#servicios" className="btn btn-secondary btn-lg">
                <span>Conoce nuestros servicios</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Barra de Confianza */}
            <div className="hero-trust-bar">
              <div className="trust-avatar-group">
                <div className="trust-avatar">DR</div>
                <div className="trust-avatar">AS</div>
                <div className="trust-avatar">MR</div>
              </div>
              <div className="trust-text">
                <strong>Calificación 4.9 / 5.0</strong>
                <span>Más de 500 pacientes satisfechos</span>
              </div>
            </div>
          </div>

          {/* Visual Hero */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                alt="Consultorio dental moderno y profesional de Sonrisa Norte Dental"
                className="hero-image"
                loading="eager"
              />

              <div className="hero-floating-card">
                <div className="floating-icon-box">
                  <Star size={24} fill="#0d9488" />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: "700",
                      color: "#0f2e59",
                    }}
                  >
                    Primera Consulta
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
                    Evaluación y diagnóstico completo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
