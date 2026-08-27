import {HomeIcon} from '@sanity/icons/Home'
import {defineArrayMember, defineField, defineType} from 'sanity'

const imageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'image',
    options: {hotspot: true},
    fields: [
      defineField({name: 'alt', title: 'Descripción breve de la imagen', type: 'string'}),
    ],
  })

const section = (
  name: string,
  title: string,
  description: string,
  fields: ReturnType<typeof defineField>[],
  collapsed = true,
) =>
  defineField({
    name,
    title,
    description,
    type: 'object',
    options: {collapsible: true, collapsed},
    fields,
  })

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Contenido de la web',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nombre de la clínica',
      description: 'Aparece en la barra superior y en el pie de página.',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Sonrisa Norte Dental',
    }),
    section('hero', '1. Portada principal', 'Lo primero que verá una persona al entrar a la web.', [
      defineField({name: 'eyebrow', title: 'Texto pequeño superior', type: 'string'}),
      defineField({name: 'heading', title: 'Primera parte del título', type: 'string', validation: (Rule) => Rule.required()}),
      defineField({name: 'highlight', title: 'Palabras destacadas del título', type: 'string'}),
      defineField({name: 'description', title: 'Texto de bienvenida', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
      defineField({name: 'primaryCtaLabel', title: 'Texto del botón de cita', type: 'string'}),
      defineField({name: 'primaryCtaMessage', title: 'Mensaje que se abrirá en WhatsApp', type: 'text', rows: 2}),
      defineField({name: 'secondaryCtaLabel', title: 'Texto del segundo botón', type: 'string'}),
      defineField({name: 'trustTitle', title: 'Título del mensaje de confianza', type: 'string'}),
      defineField({name: 'trustText', title: 'Texto de confianza', type: 'string'}),
      defineField({name: 'floatingCardTitle', title: 'Título de la tarjeta sobre la foto', type: 'string'}),
      defineField({name: 'floatingCardText', title: 'Texto de la tarjeta sobre la foto', type: 'string'}),
      imageField('image', 'Foto principal'),
    ]),
    defineField({
      name: 'benefits',
      title: '2. Por qué elegir la clínica',
      description: 'Agrega solo razones reales que le den confianza al paciente.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Título corto', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', title: 'Explicación', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'icon', title: 'Ícono', type: 'string', options: {list: ['HeartHandshake', 'Award', 'Cpu', 'CalendarCheck']}}),
          ],
          preview: {select: {title: 'title', subtitle: 'description'}},
        }),
      ],
    }),
    section('sections', 'Textos de cada sección', 'Edita títulos, subtítulos, botones y etiquetas visibles en la landing.', [
      section('benefits', 'Razones para elegir la clínica', 'Encabezado de esta sección.', [
        defineField({name: 'badge', title: 'Etiqueta pequeña', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
        defineField({name: 'subtitle', title: 'Texto explicativo', type: 'text', rows: 2}),
      ]),
      section('booking', 'Pasos para agendar', 'Encabezado y pasos del proceso de agendamiento.', [
        defineField({name: 'badge', title: 'Etiqueta pequeña', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
        defineField({name: 'subtitle', title: 'Texto explicativo', type: 'text', rows: 2}),
        defineField({name: 'steps', title: 'Pasos', type: 'array', of: [defineArrayMember({type: 'object', fields: [defineField({name: 'step', title: 'Número', type: 'string'}), defineField({name: 'title', title: 'Título', type: 'string'}), defineField({name: 'description', title: 'Descripción', type: 'text', rows: 2})], preview: {select: {title: 'title', subtitle: 'step'}}})]}),
        defineField({name: 'ctaLabel', title: 'Texto del botón', type: 'string'}),
        defineField({name: 'ctaMessage', title: 'Mensaje de WhatsApp', type: 'text', rows: 2}),
      ]),
      section('services', 'Servicios', 'Encabezado del catálogo de servicios.', [
        defineField({name: 'badge', title: 'Etiqueta pequeña', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
        defineField({name: 'subtitle', title: 'Texto explicativo', type: 'text', rows: 2}),
      ]),
      section('team', 'Equipo', 'Encabezado y nombres de los grupos de profesionales.', [
        defineField({name: 'badge', title: 'Etiqueta pequeña', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
        defineField({name: 'subtitle', title: 'Texto explicativo', type: 'text', rows: 2}),
        defineField({name: 'clinicalLabel', title: 'Nombre del grupo clínico', type: 'string'}),
        defineField({name: 'supportLabel', title: 'Nombre del grupo de apoyo', type: 'string'}),
      ]),
      section('contact', 'Contacto y ubicación', 'Encabezado que aparece antes de dirección, horarios y mapa.', [
        defineField({name: 'badge', title: 'Etiqueta pequeña', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
        defineField({name: 'subtitle', title: 'Texto explicativo', type: 'text', rows: 2}),
        defineField({name: 'routeCtaLabel', title: 'Texto del botón de ruta', type: 'string'}),
        defineField({name: 'routeCtaMessage', title: 'Mensaje de WhatsApp para consultar ruta', type: 'text', rows: 2}),
      ]),
      section('footer', 'Pie de página', 'Texto de presentación y mensaje de seguridad del pie de página.', [
        defineField({name: 'description', title: 'Descripción de la clínica', type: 'text', rows: 3}),
        defineField({name: 'safetyText', title: 'Mensaje de seguridad', type: 'string'}),
        defineField({name: 'agencyCredit', title: 'Crédito inferior', type: 'string'}),
        defineField({name: 'floatingTooltip', title: 'Texto del botón flotante de WhatsApp', type: 'string'}),
      ]),
    ]),    defineField({
      name: 'services',
      title: '3. Servicios y precios referenciales',
      description: 'Cada tarjeta aparecerá en la sección Servicios de la web.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Nombre del servicio', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', title: 'Descripción sencilla', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'tag', title: 'Categoría', type: 'string'}),
            defineField({name: 'price', title: 'Precio referencial', type: 'string'}),
            defineField({name: 'duration', title: 'Duración aproximada', type: 'string'}),
            defineField({name: 'icon', title: 'Ícono', type: 'string', options: {list: ['Activity', 'Clock', 'Layers', 'ShieldCheck', 'Smile', 'Sparkles']}}),
          ],
          preview: {select: {title: 'title', subtitle: 'tag'}},
        }),
      ],
    }),
    section('about', '4. Sobre la clínica', 'Cuenta quiénes son y qué hace diferente a Sonrisa Norte Dental.', [
      defineField({name: 'badge', title: 'Etiqueta pequeña', type: 'string'}),
      defineField({name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()}),
      defineField({name: 'paragraphs', title: 'Textos descriptivos', type: 'array', of: [defineArrayMember({type: 'text', rows: 3})]}),
      defineField({name: 'features', title: 'Puntos que quieren destacar', type: 'array', of: [defineArrayMember({type: 'string'})]}),
      defineField({name: 'ctaLabel', title: 'Texto del botón', type: 'string'}),
      defineField({name: 'ctaMessage', title: 'Mensaje de WhatsApp del botón', type: 'text', rows: 2}),
      defineField({name: 'overlayTitle', title: 'Título sobre la foto', type: 'string'}),
      defineField({name: 'overlayText', title: 'Texto sobre la foto', type: 'text', rows: 2}),
      imageField('image', 'Foto de la clínica o del equipo'),
    ]),
    defineField({
      name: 'team',
      title: '5. Equipo de la clínica',
      description: 'Agrega a cada profesional o miembro del equipo que deba mostrarse en la web.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Nombre', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'role', title: 'Cargo', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'specialty', title: 'Especialidad o función', type: 'string'}),
            defineField({name: 'experience', title: 'Experiencia', type: 'string'}),
            defineField({name: 'category', title: 'Grupo', type: 'string', options: {list: [{title: 'Equipo clínico', value: 'dentist'}, {title: 'Personal de apoyo', value: 'staff'}]}, initialValue: 'dentist'}),
            imageField('image', 'Foto'),
          ],
          preview: {select: {title: 'name', subtitle: 'role', media: 'image'}},
        }),
      ],
    }),
    section('contact', '6. Contacto, horarios y ubicación', 'Edita aquí la dirección, horarios, WhatsApp y el mapa de Google.', [
      defineField({name: 'address', title: 'Dirección', type: 'string', validation: (Rule) => Rule.required()}),
      defineField({name: 'phoneDisplay', title: 'Teléfono visible', type: 'string'}),
      defineField({name: 'whatsappNumber', title: 'WhatsApp (código de país, sin + ni espacios)', type: 'string', validation: (Rule) => Rule.regex(/^\d+$/).warning('Usa solo números, incluido el código de país.')}),
      defineField({name: 'email', title: 'Correo', type: 'string', validation: (Rule) => Rule.email().warning('Revisa el formato del correo.')}),
      defineField({name: 'weekdays', title: 'Horario de lunes a viernes', type: 'string'}),
      defineField({name: 'saturday', title: 'Horario de sábado', type: 'string'}),
      defineField({name: 'sunday', title: 'Horario de domingo', type: 'string'}),
      defineField({name: 'mapEmbedUrl', title: 'URL de inserción del mapa', type: 'url', description: 'Pega aquí la URL del atributo src del mapa de Google Maps.'}),
    ], false),
    section('finalCta', 'Mensaje final para agendar', 'La invitación que aparece al final de la página.', [
      defineField({name: 'title', title: 'Título', type: 'string'}),
      defineField({name: 'description', title: 'Descripción', type: 'text', rows: 3}),
      defineField({name: 'label', title: 'Texto del botón', type: 'string'}),
      defineField({name: 'message', title: 'Mensaje de WhatsApp', type: 'text', rows: 2}),
      defineField({name: 'helperText', title: 'Texto pequeño bajo el botón', type: 'string'}),
    ]),
  ],
  preview: {prepare: () => ({title: 'Contenido de la web', subtitle: 'Edición de la landing pública'})},
})


