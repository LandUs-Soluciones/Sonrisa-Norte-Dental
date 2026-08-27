import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Benefits from './sections/Benefits'
import ServiceCatalog from './sections/ServiceCatalog'
import About from './sections/About'
import Process from './sections/Process'
import Location from './sections/Location'
import FinalCta from './sections/FinalCta'
import Team from './sections/Team'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import useLandingContent from './hooks/useLandingContent'

import './styles/global.css'

export default function App() {
  const content = useLandingContent()
  const dentists = content.team.filter((member) => member.category !== 'staff')
  const employees = content.team.filter((member) => member.category === 'staff')

  return (
    <div className="app-layout">
      <Navbar siteName={content.siteName} whatsappNumber={content.contact.whatsappNumber} />
      <main>
        <Hero content={content.hero} whatsappNumber={content.contact.whatsappNumber} />
        <Benefits content={content.sections.benefits} benefits={content.benefits} />
        <Process content={content.sections.booking} whatsappNumber={content.contact.whatsappNumber} />
        <ServiceCatalog content={content.sections.services} services={content.services} whatsappNumber={content.contact.whatsappNumber} />
        <About content={content.about} whatsappNumber={content.contact.whatsappNumber} />
        <Team content={content.sections.team} dentists={dentists} employees={employees} />
        <Location content={content.contact} section={content.sections.contact} />
        <FinalCta content={content.finalCta} whatsappNumber={content.contact.whatsappNumber} />
      </main>
      <Footer siteName={content.siteName} contact={content.contact} content={content.sections.footer} />
      <FloatingWhatsApp whatsappNumber={content.contact.whatsappNumber} tooltip={content.sections.footer.floatingTooltip} />
    </div>
  )
}
