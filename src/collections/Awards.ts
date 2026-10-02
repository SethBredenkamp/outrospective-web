import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

export const Awards: CollectionConfig = {
  slug: 'awards',
  labels: { singular: 'Award', plural: 'Awards' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Agency Content',
    defaultColumns: ['title', 'organisation', 'year', 'project'],
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'organisation', type: 'text', required: true },
    { name: 'year', type: 'number', required: true },
    { name: 'project', type: 'relationship', relationTo: 'projects' },
    { name: 'proofURL', type: 'text', admin: { description: 'Link to the awarding body or another verifiable source.' } },
  ],
}
