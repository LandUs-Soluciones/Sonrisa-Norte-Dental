import React from 'react'
import {CheckCircle2} from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton'
import '../styles/about.css'

export default function About({content, whatsappNumber}) {
  return (
    <section id="nosotros" className="section-padding bg-surface">
      <div className="container"><div className="about-grid">
        <div className="about-image-wrapper">
          <img src={content.image.src} alt={content.image.alt} className="about-image" loading="lazy" />
          <div className="about-overlay-card"><strong>{content.overlayTitle}</strong><p>{content.overlayText}</p></div>
        </div>
        <div className="about-content">
          <span className="section-badge">{content.badge}</span>
          <h2 className="about-title">{content.title}</h2>
          {content.paragraphs.map((paragraph, index) => <p className="about-paragraph" key={index}>{paragraph}</p>)}
          <ul className="about-checklist">
            {content.features.map((feature) => <li className="about-check-item" key={feature}><CheckCircle2 className="check-icon" size={20} /><span>{feature}</span></li>)}
          </ul>
          <WhatsAppButton text={content.ctaLabel} message={content.ctaMessage} phoneNumber={whatsappNumber} />
        </div>
      </div></div>
    </section>
  )
}
