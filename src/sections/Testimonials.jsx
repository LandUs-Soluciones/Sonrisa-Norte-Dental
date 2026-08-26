import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../config/clinicData";
import SectionHeader from "../components/SectionHeader";
import "../styles/testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container">
        <SectionHeader
          badge="Testimonios"
          title="Lo que dicen nuestros pacientes"
          subtitle="La confianza de quienes nos eligen es nuestro mejor respaldo y motivación diaria."
        />

        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div>
                <div
                  className="testimonial-stars"
                  aria-label={`Calificación ${item.rating} de 5 estrellas`}
                >
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" />
                  ))}
                </div>
                <p className="testimonial-text">"{item.comment}"</p>
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">{item.name.charAt(0)}</div>
                <div className="author-info">
                  <h4>{item.name}</h4>
                  <span>
                    {item.treatment} • {item.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <span className="demo-tag">
          * Sección demostrativa para el portafolio conceptual de LandUs.
        </span>
      </div>
    </section>
  );
}
