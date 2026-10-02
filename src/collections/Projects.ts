import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Project', plural: 'Projects' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    group: 'Agency Content',
    defaultColumns: ['title', 'client', 'sector', 'featured', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'client', type: 'text', required: true },
    { name: 'sector', type: 'text' },
    { name: 'summary', type: 'textarea', required: true, maxLength: 280 },
    {
      name: 'result',
      type: 'text',
      required: true,
      maxLength: 140,
      admin: { description: 'Use only a client-approved outcome or result statement.' },
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    {
      name: 'caseStudy',
      type: 'group',
      fields: [
        { name: 'challenge', type: 'richText' },
        { name: 'approach', type: 'richText' },
        { name: 'impact', type: 'richText' },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text' },
      ],
    },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
    slugField(),
  ],
  versions: {
    drafts: { autosave: true, schedulePublish: true },
    maxPerDoc: 40,
  },
}
