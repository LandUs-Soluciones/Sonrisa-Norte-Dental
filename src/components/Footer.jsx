import React from "react";
import { Sparkles, MapPin, Phone, Mail, Clock, Shield } from "lucide-react";
import { CLINIC_CONFIG } from "../config/clinicData";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Columna 1: Marca */}
          <div className="footer-brand">
            <h3>
              <Sparkles size={20} color="#38bdf8" />
              {CLINIC_CONFIG.name}
            </h3>
            <p>
              Atención odontológica integral, moderna y cercana. Comprometidos
              con la salud y estética bucal de tu familia.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8rem",
                color: "#94a3b8",
              }}
            >
              <Shield size={16} color="#0d9488" />
              <span>Instalaciones 100% esterilizadas y seguras</span>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#servicios">Servicios Odontológicos</a>
              </li>
              <li>
                <a href="#nosotros">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#testimonios">Testimonios</a>
              </li>
              <li>
                <a href="#faq">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Tratamientos */}
          <div className="footer-col">
            <h4>Tratamientos</h4>
            <ul className="footer-links">
              <li>
                <a href="#servicios">Limpieza y Profilaxis</a>
              </li>
              <li>
                <a href="#servicios">Blanqueamiento LED</a>
              </li>
              <li>
                <a href="#servicios">Ortodoncia y Brackets</a>
              </li>
              <li>
                <a href="#servicios">Implantes Dentales</a>
              </li>
              <li>
                <a href="#servicios">Urgencias Dentales</a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} color="#38bdf8" />
                <span>{CLINIC_CONFIG.address}</span>
              </li>
              <li>
                <Phone size={18} color="#38bdf8" />
                <span>{CLINIC_CONFIG.phoneDisplay}</span>
              </li>
              <li>
                <Mail size={18} color="#38bdf8" />
                <span>{CLINIC_CONFIG.email}</span>
              </li>
              <li>
                <Clock size={18} color="#38bdf8" />
                <span>Lun - Sáb (Horarios continuos)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {CLINIC_CONFIG.name}. Todos los
            derechos reservados.
          </p>
          <p className="agency-credit">{CLINIC_CONFIG.agencyBadge}</p>
        </div>
      </div>
    </footer>
  );
}
