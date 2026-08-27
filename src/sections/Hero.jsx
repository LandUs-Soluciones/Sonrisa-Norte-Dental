import React from 'react'
import {Star, ShieldCheck, ArrowRight} from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton'
import '../styles/hero.css'

export default function Hero({content, whatsappNumber}) {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-pill">
              <ShieldCheck size={16} />
              <span>{content.eyebrow}</span>
            </div>
            <h1 className="hero-title">
              {content.heading} {content.highlight && <span>{content.highlight}</span>}
            </h1>
            <p className="hero-subtitle">{content.description}</p>
            <div className="hero-cta-group">
              <WhatsAppButton text={content.primaryCtaLabel} size="large" message={content.primaryCtaMessage} phoneNumber={whatsappNumber} />
              <a href="#servicios" className="btn btn-secondary btn-lg">
                <span>{content.secondaryCtaLabel}</span>
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="hero-trust-bar">
              <div className="trust-avatar-group" aria-hidden="true">
                <div className="trust-avatar">DR</div><div className="trust-avatar">AS</div><div className="trust-avatar">MR</div>
              </div>
              <div className="trust-text">
                <strong>{content.trustTitle}</strong>
                <span>{content.trustText}</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src={content.image.src} alt={content.image.alt} className="hero-image" loading="eager" />
              <div className="hero-floating-card">
                <div className="floating-icon-box"><Star size={24} fill="#0d9488" /></div>
                <div>
                  <h4 style={{fontSize: '0.92rem', fontWeight: '700', color: '#0f2e59'}}>{content.floatingCardTitle}</h4>
                  <p style={{fontSize: '0.8rem', color: '#64748b'}}>{content.floatingCardText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
