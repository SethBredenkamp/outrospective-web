import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

export async function Header() {
  if (!process.env.PAYLOAD_SECRET || !process.env.DATABASE_URL) return null

  const headerData = await getCachedGlobal('header', 1)()

  return <HeaderClient data={headerData} />
}
