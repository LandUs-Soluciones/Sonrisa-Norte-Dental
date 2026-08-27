import React from 'react'
import {HeartHandshake, Award, Cpu, CalendarCheck} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import '../styles/benefits.css'
const ICONS = {HeartHandshake, Award, Cpu, CalendarCheck}
export default function Benefits({content, benefits}) { return <section className="section-padding bg-surface"><div className="container"><SectionHeader badge={content.badge} title={content.title} subtitle={content.subtitle} /><div className="benefits-grid">{benefits.map((benefit) => { const IconComponent = ICONS[benefit.icon] || HeartHandshake; return <article key={benefit._key || benefit.title} className="benefit-card"><div className="benefit-icon-wrapper"><IconComponent size={26} /></div><h3 className="benefit-title">{benefit.title}</h3><p className="benefit-description">{benefit.description}</p></article> })}</div></div></section> }
