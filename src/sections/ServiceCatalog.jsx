import React from "react";
import {
  Activity,
  ArrowRight,
  BadgeDollarSign,
  CalendarClock,
  Clock,
  Layers,
  ShieldCheck,
  Smile,
  Sparkles,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { getWhatsAppUrl } from "../config/clinicData";
import "../styles/service-catalog.css";

const SERVICE_ICONS = {
  Activity,
  Clock,
  Layers,
  ShieldCheck,
  Smile,
  Sparkles,
};

export default function ServiceCatalog({ services }) {
  return (
    <section id="catalogo" className="section-padding bg-surface">
      <div className="container">
        <SectionHeader
          badge="Catálogo y precios"
          title="Tratamientos disponibles en clínica"
          subtitle="Precios referenciales en soles para orientar tu primera cita. Cada plan se confirma luego de la evaluación clínica."
        />

        <div className="catalog-grid">
          {services.map((service) => {
            const IconComp = SERVICE_ICONS[service.icon] || Sparkles;
            const waLink = getWhatsAppUrl(
              `Hola, quiero consultar disponibilidad y precio para ${service.title}.`,
            );

            return (
              <article className="catalog-card" key={service.id}>
                <div className="catalog-card-head">
                  <div className="catalog-icon-box">
                    <IconComp size={22} />
                  </div>
                  <span className="catalog-tag">{service.tag}</span>
                </div>

                <h3 className="catalog-title">{service.title}</h3>
                <p className="catalog-description">{service.description}</p>

                <dl className="catalog-meta">
                  <div>
                    <dt>
                      <BadgeDollarSign size={17} />
                      Precio
                    </dt>
                    <dd>{service.price}</dd>
                  </div>
                  <div>
                    <dt>
                      <CalendarClock size={17} />
                      Duración
                    </dt>
                    <dd>{service.duration}</dd>
                  </div>
                </dl>

                <a
                  className="catalog-link"
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Reservar ${service.title} por WhatsApp`}
                >
                  <span>Reservar</span>
                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
