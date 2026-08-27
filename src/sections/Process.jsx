import React from 'react'
import SectionHeader from '../components/SectionHeader'
import WhatsAppButton from '../components/WhatsAppButton'
import '../styles/process.css'
export default function Process({content, whatsappNumber}) { return <section className="section-padding bg-surface"><div className="container"><SectionHeader badge={content.badge} title={content.title} subtitle={content.subtitle} /><div className="process-grid">{content.steps.map((item) => <div key={item._key || item.step} className="process-card"><div className="process-step-badge">{item.step}</div><h3 className="process-title">{item.title}</h3><p className="process-desc">{item.description}</p></div>)}</div><div style={{textAlign: 'center', marginTop: '40px'}}><WhatsAppButton text={content.ctaLabel} message={content.ctaMessage} size="large" phoneNumber={whatsappNumber} /></div></div></section> }
