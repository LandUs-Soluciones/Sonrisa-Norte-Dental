import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Landing page')
        .id('landingPage')
        .child(S.document().schemaType('landingPage').documentId('landingPage').title('Landing page')),
    ])
