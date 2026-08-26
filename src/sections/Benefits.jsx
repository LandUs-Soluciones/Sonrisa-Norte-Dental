import React from "react";
import { HeartHandshake, Award, Cpu, CalendarCheck } from "lucide-react";
import { BENEFITS_DATA } from "../config/clinicData";
import SectionHeader from "../components/SectionHeader";
import "../styles/benefits.css";

const ICONS = {
  HeartHandshake,
  Award,
  Cpu,
  CalendarCheck,
};

export default function Benefits() {
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <SectionHeader
          badge="¿Por qué elegirnos?"
          title="Cuidamos tu salud dental con excelencia"
          subtitle="Diseñamos una experiencia odontológica cómoda, transparente y con resultados duraderos."
        />

        <div className="benefits-grid">
          {BENEFITS_DATA.map((benefit, index) => {
            const IconComponent = ICONS[benefit.icon] || HeartHandshake;
            return (
              <article key={index} className="benefit-card">
                <div className="benefit-icon-wrapper">
                  <IconComponent size={26} />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
