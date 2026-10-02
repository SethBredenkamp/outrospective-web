import React from 'react'

import { BrandMark } from '@/components/BrandMark'

const BeforeLogin: React.FC = () => {
  return (
    <div className="outrospective-admin-intro">
      <BrandMark className="outrospective-admin-intro__mark" />
      <p className="outrospective-admin-intro__eyebrow">Content Studio</p>
      <h1>Shape what the world sees next.</h1>
      <p>Sign in to manage Outrospective&apos;s work, services, people and publishing.</p>
    </div>
  )
}

export default BeforeLogin
