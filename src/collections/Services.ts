import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Service', plural: 'Services' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Agency Content',
    defaultColumns: ['title', 'order', 'updatedAt'],
    useAsTitle: 'title',
  },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'tagline', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true, maxLength: 360 },
    {
      name: 'capabilities',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'label', type: 'text', required: true }],
    },
    { name: 'order', type: 'number', defaultValue: 0, required: true, admin: { position: 'sidebar' } },
    slugField(),
  ],
}
