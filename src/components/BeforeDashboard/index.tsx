import React from 'react'

import { BrandMark } from '@/components/BrandMark'

import './index.scss'

const baseClass = 'before-dashboard'
const destinations = [
  { label: 'Selected work', detail: 'Projects, results and case-study media', href: '/admin/collections/projects' },
  { label: 'Services', detail: 'Capabilities, descriptions and ordering', href: '/admin/collections/services' },
  { label: 'Insights', detail: 'Draft, preview and publish field notes', href: '/admin/collections/posts' },
  { label: 'Media library', detail: 'Images, crops, alt text and captions', href: '/admin/collections/media' },
]

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}__hero`}>
        <BrandMark className={`${baseClass}__mark`} />
        <p className={`${baseClass}__eyebrow`}>Outrospective Content Studio</p>
        <h1>One clear place to shape the site.</h1>
        <p>
          Create in draft, check the live preview, secure approval, then publish. Keep project
          results and biographies client-approved before they go live.
        </p>
        <a className={`${baseClass}__site-link`} href="/" target="_blank" rel="noreferrer">
          View live website
        </a>
      </div>

      <div className={`${baseClass}__destinations`}>
        {destinations.map((destination) => (
          <a key={destination.href} href={destination.href} className={`${baseClass}__card`}>
            <span>{destination.label}</span>
            <small>{destination.detail}</small>
          </a>
        ))}
      </div>
    </div>
  )
}

export default BeforeDashboard
