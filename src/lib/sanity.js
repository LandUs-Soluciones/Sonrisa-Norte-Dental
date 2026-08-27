import { createClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '6bmhitue'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2026-08-27',
  useCdn: false,
})

export const landingPageQuery = `*[_type == "landingPage" && _id == "landingPage"][0]{
  siteName,
  hero{eyebrow, heading, highlight, description, primaryCtaLabel, primaryCtaMessage, secondaryCtaLabel, trustTitle, trustText, floatingCardTitle, floatingCardText, image{alt, asset->{url}}},
  benefits[]{_key, title, description, icon},
  services[]{_key, title, description, price, duration, tag, icon},
  about{badge, title, paragraphs, features, ctaLabel, ctaMessage, overlayTitle, overlayText, image{alt, asset->{url}}},
  team[]{_key, name, role, specialty, experience, category, image{alt, asset->{url}}},
  contact{address, phoneDisplay, whatsappNumber, email, weekdays, saturday, sunday, mapEmbedUrl},
  finalCta{title, description, label, message, helperText},
  sections{benefits{badge, title, subtitle}, booking{badge, title, subtitle, steps[]{_key, step, title, description}, ctaLabel, ctaMessage}, services{badge, title, subtitle}, team{badge, title, subtitle, clinicalLabel, supportLabel}, contact{badge, title, subtitle, routeCtaLabel, routeCtaMessage}, footer{description, safetyText, agencyCredit, floatingTooltip}}
}`

export function getLandingPageContent() {
  return sanityClient.fetch(landingPageQuery)
}



