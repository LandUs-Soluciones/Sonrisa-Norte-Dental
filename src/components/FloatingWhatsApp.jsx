import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config/clinicData";
import "../styles/floating-whatsapp.css";

export default function FloatingWhatsApp() {
  const url = getWhatsAppUrl(
    "Hola, vi la página de Sonrisa Norte Dental y quisiera consultar disponibilidad para una cita.",
  );

  return (
    <aside
      className="floating-whatsapp"
      aria-label="Contacto flotante de WhatsApp"
    >
      <span className="floating-tooltip">¿Dudas? ¡Escríbenos ahora!</span>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </aside>
  );
}
