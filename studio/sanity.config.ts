import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Sonrisa Norte Dental',
  projectId: '6bmhitue',
  dataset: 'production',
  plugins: [structureTool({structure}), visionTool()],
  schema: {types: schemaTypes},
})
