import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'dashboard-training',

  projectId: 's7b2vwyo',
  dataset: 'dashboard',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
