import {useEffect, useState} from 'react'

import {
  BENEFITS_DATA,
  CLINIC_CONFIG,
  DENTISTS_DATA,
  EMPLOYEES_DATA,
  SERVICES_DATA,
} from '../config/clinicData'
import {getLandingPageContent} from '../lib/sanity'

const fallbackContent = {
  siteName: CLINIC_CONFIG.name,
  hero: {
    eyebrow: 'Odontología Preventiva y Estética en Lima',
    heading: 'Tu sonrisa merece el',
    highlight: 'mejor cuidado',
    description: 'Atención dental profesional, cercana y pensada para toda la familia. Diagnósticos precisos, tecnología moderna y un trato humano.',
    primaryCtaLabel: 'Agenda tu cita',
    primaryCtaMessage: 'Hola, quisiera agendar una cita de evaluación en Sonrisa Norte Dental.',
    secondaryCtaLabel: 'Conoce nuestros servicios',
    trustTitle: 'Atención profesional y cercana',
    trustText: 'Planes claros para el cuidado de tu sonrisa',
    floatingCardTitle: 'Primera consulta',
    floatingCardText: 'Evaluación y diagnóstico personalizado',
    image: {src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80', alt: 'Consultorio dental moderno y profesional de Sonrisa Norte Dental'},
  },
  benefits: BENEFITS_DATA,
  services: SERVICES_DATA,
  about: {
    badge: 'Sobre Nosotros',
    title: 'Pasión por la odontología, dedicación a tu bienestar',
    paragraphs: ['En Sonrisa Norte Dental entendemos que visitar al dentista debe ser una experiencia tranquila, transparente y libre de estrés.', 'Somos un equipo multidisciplinario enfocado en la odontología preventiva y reconstructiva, combinando tecnología moderna con un trato cálido y personalizado.'],
    features: ['Protocolos rigurosos de bioseguridad y esterilización.', 'Instalaciones modernas para tu confort.', 'Planes de tratamiento claros y sin costos ocultos.'],
    ctaLabel: 'Conoce a nuestro equipo',
    ctaMessage: 'Hola, quisiera conocer más sobre el equipo de Sonrisa Norte Dental.',
    overlayTitle: 'Compromiso y calidez',
    overlayText: 'Tratamientos diseñados para devolverte la confianza y comodidad al sonreír.',
    image: {src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80', alt: 'Equipo de especialistas dentales en consulta'},
  },
  team: [...DENTISTS_DATA.map((member) => ({...member, category: 'dentist'})), ...EMPLOYEES_DATA.map((member) => ({...member, category: 'staff'}))],
  contact: {address: CLINIC_CONFIG.address, phoneDisplay: CLINIC_CONFIG.phoneDisplay, whatsappNumber: CLINIC_CONFIG.whatsappNumber, email: CLINIC_CONFIG.email, weekdays: CLINIC_CONFIG.schedule.weekdays, saturday: CLINIC_CONFIG.schedule.saturday, sunday: CLINIC_CONFIG.schedule.sunday, mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.442807380967!2d-77.03688562414774!3d-12.081829988157778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c866d5b03513%3A0x6337851240186981!2sSan%20Isidro%2C%20Lima!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe'},
  finalCta: {title: 'Da el primer paso hacia una sonrisa más saludable', description: 'Agenda tu evaluación y recibe atención personalizada en un ambiente cómodo, moderno y cercano.', label: 'Agendar por WhatsApp', message: 'Hola, deseo agendar mi cita en Sonrisa Norte Dental.', helperText: 'Atención personalizada para resolver tus dudas'},
  sections: {
    benefits: {badge: '¿Por qué elegirnos?', title: 'Cuidamos tu salud dental con excelencia', subtitle: 'Diseñamos una experiencia odontológica cómoda, transparente y con resultados duraderos.'},
    booking: {badge: 'Agendamiento rápido', title: 'Tu cita lista en 3 simples pasos', subtitle: 'Agenda directamente por WhatsApp en menos de 2 minutos.', steps: [{step: '01', title: 'Escríbenos por WhatsApp', description: 'Cuéntanos qué tratamiento o consulta necesitas.'}, {step: '02', title: 'Elige tu fecha y hora', description: 'Te responderemos con horarios que se adapten a tu agenda.'}, {step: '03', title: 'Confirma y asiste', description: 'Recibe el recordatorio y visítanos para tu evaluación personalizada.'}], ctaLabel: 'Empieza ahora por WhatsApp', ctaMessage: CLINIC_CONFIG.defaultWhatsappMessage},
    services: {badge: 'Servicios', title: 'Tratamientos disponibles en clínica', subtitle: 'Cada plan se confirma luego de una evaluación clínica personalizada.'},
    team: {badge: 'Equipo clínico', title: 'Especialistas y atención coordinada', subtitle: 'Dentistas, asistentes y personal administrativo preparados para acompañarte antes, durante y después de tu tratamiento.', clinicalLabel: 'Dentistas', supportLabel: 'Personal de apoyo'},
    contact: {badge: 'Encuéntranos', title: 'Ubicación y horarios de atención', subtitle: 'Visítanos en una zona céntrica y de fácil acceso. ¡Te esperamos!', routeCtaLabel: '¿Cómo llegar? Consulta por WhatsApp', routeCtaMessage: 'Hola, quisiera consultar la ruta más rápida para llegar a la clínica.'},
    footer: {description: 'Atención odontológica integral, moderna y cercana. Comprometidos con la salud y estética bucal de tu familia.', safetyText: 'Atención pensada para tu seguridad y comodidad', agencyCredit: 'Proyecto conceptual desarrollado por LandUs', floatingTooltip: '¿Dudas? ¡Escríbenos ahora!'},
  },
}

const imageValue = (image) => image?.asset?.url ? {src: image.asset.url, alt: image.alt || ''} : null
const mergeSection = (fallback, remote) => ({...fallback, ...(remote || {})})
const withImage = (remoteSection) => {
  const {image, ...fields} = remoteSection || {}
  const mappedImage = imageValue(image)
  return mappedImage ? {...fields, image: mappedImage} : fields
}

const mapRemoteContent = (remote) => ({
  siteName: remote.siteName || fallbackContent.siteName,
  hero: mergeSection(fallbackContent.hero, withImage(remote.hero)),
  benefits: remote.benefits?.length ? remote.benefits : fallbackContent.benefits,
  services: remote.services?.length ? remote.services : fallbackContent.services,
  about: mergeSection(fallbackContent.about, withImage(remote.about)),
  team: remote.team?.length ? remote.team.map((member, index) => {
    const fallbackMember = fallbackContent.team.find((item) => item.name === member.name) || fallbackContent.team[index]
    return {...fallbackMember, ...member, id: member._key, image: imageValue(member.image)?.src || fallbackMember?.image}
  }) : fallbackContent.team,
  contact: mergeSection(fallbackContent.contact, remote.contact),
  finalCta: mergeSection(fallbackContent.finalCta, remote.finalCta),
  sections: {
    benefits: mergeSection(fallbackContent.sections.benefits, remote.sections?.benefits),
    booking: mergeSection(fallbackContent.sections.booking, remote.sections?.booking),
    services: mergeSection(fallbackContent.sections.services, remote.sections?.services),
    team: mergeSection(fallbackContent.sections.team, remote.sections?.team),
    contact: mergeSection(fallbackContent.sections.contact, remote.sections?.contact),
    footer: mergeSection(fallbackContent.sections.footer, remote.sections?.footer),
  },
})

export default function useLandingContent() {
  const [content, setContent] = useState(fallbackContent)
  useEffect(() => {
    let active = true
    getLandingPageContent().then((remoteContent) => { if (active && remoteContent) setContent(mapRemoteContent(remoteContent)) }).catch((error) => console.warn('No se pudo cargar el contenido de Sanity.', error))
    return () => { active = false }
  }, [])
  return content
}



