import React from 'react'
import WhatsAppButton from '../components/WhatsAppButton'
import '../styles/cta.css'

export default function FinalCta({content, whatsappNumber}) {
  return (
    <section className="cta-section bg-white"><div className="container"><div className="cta-box">
      <h2 className="cta-title">{content.title}</h2><p className="cta-subtitle">{content.description}</p>
      <div className="cta-action-wrap"><WhatsAppButton text={content.label} size="large" message={content.message} phoneNumber={whatsappNumber} /><span style={{fontSize: '0.85rem', color: '#bae6fd'}}>{content.helperText}</span></div>
    </div></div></section>
  )
}
