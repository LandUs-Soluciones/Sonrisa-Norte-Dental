import React from "react";
import { CheckCircle2 } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import "../styles/about.css";

export default function About() {
  return (
    <section id="nosotros" className="section-padding bg-surface">
      <div className="container">
        <div className="about-grid">
          {/* Imagen de la Clínica */}
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
              alt="Equipo de especialistas dentales en consulta"
              className="about-image"
              loading="lazy"
            />
            <div className="about-overlay-card">
              <strong>Compromiso y Calidez</strong>
              <p>
                Tratamientos diseñados para devolverte la confianza y comodidad
                al sonreír.
              </p>
            </div>
          </div>

          {/* Texto Sobre Nosotros */}
          <div className="about-content">
            <span className="section-badge">Sobre Nosotros</span>
            <h2 className="about-title">
              Pasión por la odontología, dedicación a tu bienestar
            </h2>
            <p className="about-paragraph">
              En <strong>Sonrisa Norte Dental</strong> entendemos que visitar al
              dentista debe ser una experiencia tranquila, transparente y libre
              de estrés.
            </p>
            <p className="about-paragraph">
              Somos un equipo multidisciplinario enfocado en la odontología
              preventiva y reconstructiva, combinando tecnología de vanguardia
              con un trato cálido y personalizado para cada miembro de la
              familia.
            </p>

            <ul className="about-checklist">
              <li className="about-check-item">
                <CheckCircle2 className="check-icon" size={20} />
                <span>
                  Protocolos rigurosos de bioseguridad y esterilización.
                </span>
              </li>
              <li className="about-check-item">
                <CheckCircle2 className="check-icon" size={20} />
                <span>
                  Instalaciones modernas y climatizadas para tu confort.
                </span>
              </li>
              <li className="about-check-item">
                <CheckCircle2 className="check-icon" size={20} />
                <span>Planes de tratamiento claros y sin costos ocultos.</span>
              </li>
            </ul>

            <WhatsAppButton text="Conoce a nuestro equipo" />
          </div>
        </div>
      </div>
    </section>
  );
}
