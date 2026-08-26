import React from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { CLINIC_CONFIG } from "../config/clinicData";
import WhatsAppButton from "../components/WhatsAppButton";
import SectionHeader from "../components/SectionHeader";
import "../styles/location.css";

export default function Location() {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container">
        <SectionHeader
          badge="Encuéntranos"
          title="Ubicación y Horarios de Atención"
          subtitle="Visítanos en una zona céntrica y de fácil acceso. ¡Te esperamos!"
        />

        <div className="location-grid">
          {/* Tarjeta de Información */}
          <div className="location-info-card">
            <ul className="location-detail-list">
              <li className="location-detail-item">
                <div className="location-icon-wrapper">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4>Dirección</h4>
                  <p>{CLINIC_CONFIG.address}</p>
                </div>
              </li>

              <li className="location-detail-item">
                <div className="location-icon-wrapper">
                  <Clock size={22} />
                </div>
                <div>
                  <h4>Horarios</h4>
                  <p>{CLINIC_CONFIG.schedule.weekdays}</p>
                  <p>{CLINIC_CONFIG.schedule.saturday}</p>
                  <p style={{ color: "#94a3b8" }}>
                    {CLINIC_CONFIG.schedule.sunday}
                  </p>
                </div>
              </li>

              <li className="location-detail-item">
                <div className="location-icon-wrapper">
                  <Phone size={22} />
                </div>
                <div>
                  <h4>Central Telefónica</h4>
                  <p>{CLINIC_CONFIG.phoneDisplay}</p>
                </div>
              </li>
            </ul>

            <WhatsAppButton
              text="¿Cómo llegar? Consulta por WhatsApp"
              message="Hola, quisiera consultar la ruta más rápida para llegar a la clínica."
            />
          </div>

          {/* Mapa Visual / Iframe Interactivo */}
          <div className="map-container">
            <iframe
              title="Mapa de Ubicación Sonrisa Norte Dental"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.442807380967!2d-77.03688562414774!3d-12.081829988157778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c866d5b03513%3A0x6337851240186981!2sSan%20Isidro%2C%20Lima!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
