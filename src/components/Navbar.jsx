import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Phone } from "lucide-react";
import { CLINIC_CONFIG } from "../config/clinicData";
import WhatsAppButton from "./WhatsAppButton";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon-box">
            <Sparkles size={22} />
          </div>
          <span>{CLINIC_CONFIG.name}</span>
        </a>

        {/* Enlaces Desktop */}
        <ul className="nav-menu">
          <li>
            <a href="#inicio" className="nav-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" className="nav-link">
              Servicios
            </a>
          </li>
          <li>
            <a href="#nosotros" className="nav-link">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#testimonios" className="nav-link">
              Testimonios
            </a>
          </li>
          <li>
            <a href="#faq" className="nav-link">
              Preguntas Frecuentes
            </a>
          </li>
          <li>
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </li>
        </ul>

        {/* CTA Desktop */}
        <div className="navbar-actions">
          <WhatsAppButton text="Agenda tu cita" />
        </div>

        {/* Toggle Móvil */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <a href="#inicio" className="mobile-nav-link" onClick={closeMenu}>
          Inicio
        </a>
        <a href="#servicios" className="mobile-nav-link" onClick={closeMenu}>
          Servicios
        </a>
        <a href="#nosotros" className="mobile-nav-link" onClick={closeMenu}>
          Nosotros
        </a>
        <a href="#testimonios" className="mobile-nav-link" onClick={closeMenu}>
          Testimonios
        </a>
        <a href="#faq" className="mobile-nav-link" onClick={closeMenu}>
          Preguntas Frecuentes
        </a>
        <a href="#contacto" className="mobile-nav-link" onClick={closeMenu}>
          Ubicación y Horarios
        </a>
        <div style={{ marginTop: "12px" }}>
          <WhatsAppButton
            text="Agenda tu cita por WhatsApp"
            className="btn btn-whatsapp"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </nav>
  );
}
