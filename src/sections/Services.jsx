import React from "react";
import {
  Sparkles,
  Smile,
  Layers,
  ShieldCheck,
  Activity,
  Clock,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import { SERVICES_DATA, getWhatsAppUrl } from "../config/clinicData";
import SectionHeader from "../components/SectionHeader";
import "../styles/services.css";

const SERVICE_ICONS = {
  Sparkles,
  Smile,
  Layers,
  ShieldCheck,
  Activity,
  Clock,
};

export default function Services({ services = SERVICES_DATA }) {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container">
        <SectionHeader
          badge="Nuestros Tratamientos"
          title="Soluciones integrales para tu sonrisa"
          subtitle="Tratamientos odontológicos con los más altos estándares de calidad, seguridad y estética."
        />

        <div className="services-grid">
          {services.map((service) => {
            const IconComp = SERVICE_ICONS[service.icon] || Sparkles;
            const waLink = getWhatsAppUrl(
              `Hola, deseo más información sobre el servicio de ${service.title}.`,
            );

            return (
              <article key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-header-row">
                    <div className="service-icon-box">
                      <IconComp size={24} />
                    </div>
                    <span className="service-tag">{service.tag}</span>
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-price-row">
                    <BadgeDollarSign size={17} />
                    <span>{service.price}</span>
                  </div>
                  <p className="service-description">{service.description}</p>
                </div>

                <div className="service-action">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link"
                    aria-label={`Consultar por WhatsApp sobre ${service.title}`}
                  >
                    <span>Consultar por WhatsApp</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
