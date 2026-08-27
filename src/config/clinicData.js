export const CLINIC_CONFIG = {
  name: 'Sonrisa Norte Dental',
  tagline: 'Tu sonrisa merece el mejor cuidado',
  phoneDisplay: '+51 907 842 168',
  whatsappNumber: '51907842168',
  email: 'contacto@sonrisanortedental.com',
  address: 'Av. Los Jardines 245, San Isidro, Lima - Perú',
  schedule: {
    weekdays: 'Lunes a Viernes: 9:00 a. m. – 7:00 p. m.',
    saturday: 'Sábados: 9:00 a. m. – 2:00 p. m.',
    sunday: 'Domingos: Cerrado (Emergencias previa coordinación)',
  },
  defaultWhatsappMessage: 'Hola, vi la página de Sonrisa Norte Dental y quisiera agendar una cita de evaluación.',
  agencyBadge: 'Proyecto conceptual desarrollado por LandUs',
}

export const getWhatsAppUrl = (customMessage = CLINIC_CONFIG.defaultWhatsappMessage, phoneNumber = CLINIC_CONFIG.whatsappNumber) => `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`

export const SERVICES_DATA = [
  {id: 'limpieza', title: 'Limpieza Dental Profunda', icon: 'Sparkles', price: 'S/ 120', duration: '45 min', description: 'Profilaxis ultrasónica y pulido dental para eliminar placa bacteriana, manchas y sarro.', tag: 'Preventivo'},
  {id: 'blanqueamiento', title: 'Blanqueamiento Dental', icon: 'Smile', price: 'S/ 450', duration: '60 min', description: 'Aclara varios tonos del color de tus dientes de forma segura y controlada.', tag: 'Estética'},
  {id: 'ortodoncia', title: 'Ortodoncia y Alineadores', icon: 'Layers', price: 'Desde S/ 280', duration: 'Evaluación inicial', description: 'Corrección de la posición dental mediante brackets o alineadores personalizados.', tag: 'Corrección'},
  {id: 'implantes', title: 'Implantes Dentales', icon: 'ShieldCheck', price: 'Desde S/ 2,500', duration: 'Plan personalizado', description: 'Reemplazo duradero y natural de piezas dentales perdidas.', tag: 'Rehabilitación'},
  {id: 'general', title: 'Odontología Integral', icon: 'Activity', price: 'Desde S/ 90', duration: '30 a 50 min', description: 'Diagnóstico completo, curaciones estéticas y chequeos periódicos.', tag: 'General'},
  {id: 'emergencias', title: 'Atención de Urgencias', icon: 'Clock', price: 'Desde S/ 150', duration: 'Prioritario', description: 'Atención ante dolor agudo, fracturas dentales o inflamaciones inesperadas.', tag: 'Prioritario'},
]

export const DENTISTS_DATA = [
  {id: 'dra-camila-rojas', name: 'Dra. Camila Rojas', role: 'Odontóloga rehabilitadora', specialty: 'Implantes, coronas y estética dental', experience: '8 años de experiencia', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'},
  {id: 'dr-alonso-vega', name: 'Dr. Alonso Vega', role: 'Ortodoncista', specialty: 'Brackets estéticos y alineadores transparentes', experience: '6 años de experiencia', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'},
  {id: 'dra-natalia-paredes', name: 'Dra. Natalia Paredes', role: 'Odontopediatra', specialty: 'Atención infantil y prevención familiar', experience: '7 años de experiencia', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80'},
]

export const EMPLOYEES_DATA = [
  {id: 'lucia-morales', name: 'Lucía Morales', role: 'Coordinadora de citas', specialty: 'Agenda, confirmaciones y seguimiento por WhatsApp', experience: 'Atención al paciente', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'},
  {id: 'mateo-salazar', name: 'Mateo Salazar', role: 'Asistente dental', specialty: 'Apoyo clínico y preparación de gabinete', experience: 'Bioseguridad y esterilización', image: 'https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&w=600&q=80'},
]

export const BENEFITS_DATA = [
  {icon: 'HeartHandshake', title: 'Atención personalizada', description: 'Tratamientos a tu medida con explicaciones claras, sin prisas y con trato cálido.'},
  {icon: 'Award', title: 'Profesionales capacitados', description: 'Odontólogos con actualización constante en técnicas avanzadas.'},
  {icon: 'Cpu', title: 'Equipos modernos', description: 'Tecnología digital y esterilización estricta para procedimientos cómodos.'},
  {icon: 'CalendarCheck', title: 'Horarios flexibles', description: 'Atención de lunes a sábado con facilidad para reprogramar tus citas.'},
]

export const PROCESS_STEPS = [
  {step: '01', title: 'Escríbenos por WhatsApp', description: 'Cuéntanos qué tratamiento o consulta necesitas.'},
  {step: '02', title: 'Elige tu fecha y hora', description: 'Te responderemos con horarios que se adapten a tu agenda.'},
  {step: '03', title: 'Confirma y asiste', description: 'Recibe el recordatorio y visítanos para tu evaluación personalizada.'},
]
