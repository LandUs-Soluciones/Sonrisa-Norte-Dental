export const CLINIC_CONFIG = {
  name: "Sonrisa Norte Dental",
  tagline: "Tu sonrisa merece el mejor cuidado",
  phoneDisplay: "+51 987 654 321",
  whatsappNumber: "51987654321", // Número internacional sin '+' ni espacios
  email: "contacto@sonrisanortedental.com",
  address: "Av. Los Jardines 245, San Isidro, Lima - Perú",
  schedule: {
    weekdays: "Lunes a Viernes: 9:00 a. m. – 7:00 p. m.",
    saturday: "Sábados: 9:00 a. m. – 2:00 p. m.",
    sunday: "Domingos: Cerrado (Emergencias previa coordinación)",
  },
  defaultWhatsappMessage:
    "Hola, vi la página de Sonrisa Norte Dental y quisiera agendar una cita de evaluación.",
  agencyBadge: "Proyecto conceptual desarrollado por LandUs",
};

// Generador de enlace de WhatsApp codificado
export const getWhatsAppUrl = (
  customMessage = CLINIC_CONFIG.defaultWhatsappMessage,
) => {
  return `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
};

export const SERVICES_DATA = [
  {
    id: "limpieza",
    title: "Limpieza Dental Profunda",
    icon: "Sparkles",
    description:
      "Profilaxis ultrasónica y pulido dental para eliminar placa bacteriana, manchas y sarro, previniendo caries y gingivitis.",
    tag: "Preventivo",
  },
  {
    id: "blanqueamiento",
    title: "Blanqueamiento Dental",
    icon: "Smile",
    description:
      "Aclara varios tonos el color de tus dientes de forma segura y controlada con tecnología LED de última generación.",
    tag: "Estética",
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia y Alineadores",
    icon: "Layers",
    description:
      "Corrección de la posición dental mediante brackets tradicionales, estéticos o alineadores invisibles personalizados.",
    tag: "Corrección",
  },
  {
    id: "implantes",
    title: "Implantes Dentales",
    icon: "ShieldCheck",
    description:
      "Reemplazo duradero y natural de piezas dentales perdidas con titanio biocompatible y coronas de alta resistencia.",
    tag: "Rehabilitación",
  },
  {
    id: "general",
    title: "Odontología Integral",
    icon: "Activity",
    description:
      "Diagnóstico completo, curaciones estéticas con resina, endodoncias y chequeos periódicos para toda la familia.",
    tag: "General",
  },
  {
    id: "emergencias",
    title: "Atención de Urgencias",
    icon: "Clock",
    description:
      "Atención prioritaria y alivio inmediato ante dolores agudos, fracturas dentales o inflamaciones inesperadas.",
    tag: "Prioritario",
  },
];

export const BENEFITS_DATA = [
  {
    icon: "HeartHandshake",
    title: "Atención Personalizada",
    description:
      "Tratamientos a tu medida con explicaciones claras, sin prisas y con trato cálido.",
  },
  {
    icon: "Award",
    title: "Profesionales Capacitados",
    description:
      "Odontólogos certificados con actualización constante en técnicas avanzadas.",
  },
  {
    icon: "Cpu",
    title: "Equipos Modernos",
    description:
      "Tecnología digital y esterilización estricta para procedimientos rápidos e indoloros.",
  },
  {
    icon: "CalendarCheck",
    title: "Horarios Flexibles",
    description:
      "Atención de lunes a sábado con facilidad para reprogramar citas si lo requieres.",
  },
];

export const STATS_DATA = [
  { value: "+500", label: "Pacientes atendidos", suffix: "Familias felices" },
  { value: "+5", label: "Años de experiencia", suffix: "Cuidando sonrisas" },
  {
    value: "98%",
    label: "Índice de satisfacción",
    suffix: "Calificación positiva",
  },
  { value: "6 días", label: "Atención continua", suffix: "Lunes a Sábado" },
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Mariana Rojas",
    treatment: "Blanqueamiento y Limpieza",
    comment:
      "Tenía mucho temor de ir al dentista, pero la atención en Sonrisa Norte fue impecable y súper delicada. El resultado superó mis expectativas.",
    rating: 5,
    location: "Lima",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    treatment: "Ortodoncia Invisible",
    comment:
      "Excelente puntualidad y trato profesional. Me explicaron cada fase de mi tratamiento y agendar citas por WhatsApp es sumamente rápido.",
    rating: 5,
    location: "San Isidro",
  },
  {
    id: 3,
    name: "Valeria Benítez",
    treatment: "Odontología Infantil y Familiar",
    comment:
      "Llevé a mis dos hijos para su primer chequeo y la paciencia del equipo fue maravillosa. Ahora van al dentista felices y sin miedo.",
    rating: 5,
    location: "Miraflores",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Escríbenos por WhatsApp",
    description:
      "Haz clic en cualquiera de nuestros botones y cuéntanos qué tratamiento o consulta necesitas.",
  },
  {
    step: "02",
    title: "Elige tu fecha y hora",
    description:
      "Nuestro equipo te responderá en minutos con los horarios disponibles que mejor se adapten a tu agenda.",
  },
  {
    step: "03",
    title: "Confirma y asiste",
    description:
      "Recibe el recordatorio directo en tu celular y visítanos para tu evaluación personalizada.",
  },
];

export const FAQ_DATA = [
  {
    question: "¿Necesito reservar una cita con anticipación?",
    answer:
      "Sí, recomendamos agendar previamente vía WhatsApp para garantizar tu tiempo de atención sin esperas. Sin embargo, para urgencias médicas dentales hacemos espacio prioritario en el día.",
  },
  {
    question: "¿Atienden emergencias dentales?",
    answer:
      "Sí, atendemos casos de dolor dental agudo, fracturas o traumatismos. Escríbenos inmediatamente por WhatsApp indicando que se trata de una urgencia para asistirte de inmediato.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo, transferencias bancarias directas, tarjetas de débito/crédito (Visa, Mastercard, Amex), billeteras digitales (Yape, Plin) y opciones de financiamiento en tratamientos extensos.",
  },
  {
    question: "¿Atienden a niños y adultos mayores?",
    answer:
      "¡Por supuesto! Contamos con enfoque de odontología familiar integral, brindando un trato paciente, empático y adaptado a las necesidades de los más pequeños y adultos mayores.",
  },
  {
    question: "¿Cuánto dura una consulta de evaluación inicial?",
    answer:
      "La primera cita suele durar entre 30 y 45 minutos. Incluye exploración clínica completa, diagnóstico fotográfico/radiográfico si es necesario y entrega de tu plan de tratamiento personalizado.",
  },
  {
    question: "¿Los tratamientos son dolorosos?",
    answer:
      "Trabajamos con anestesia local de última generación, geles tópicos desensibilizantes y técnicas mínimamente invasivas para que toda tu experiencia sea cómoda e indolora.",
  },
];
