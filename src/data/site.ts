import heroImage from '@/endpoints/seed/image-hero1.webp'
import projectOne from '@/endpoints/seed/image-post1.webp'
import projectTwo from '@/endpoints/seed/image-post2.webp'
import projectThree from '@/endpoints/seed/image-post3.webp'
import type { StaticImageData } from 'next/image'

export type Project = {
  client: string
  clientUrl?: string
  color: 'ember' | 'light'
  detail: string
  image?: StaticImageData
  result: string
  scope?: readonly string[]
  sector: string
  slug: string
  status: 'documented' | 'representative'
}

export const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
]

export const clientLogos = ['Northstar', 'Fieldwork', 'Vantage', 'Atlas', 'Common Ground']

export const services = [
  {
    number: '01',
    icon: 'Gem',
    title: 'Campaign & Content Design',
    tagline: 'One idea. Built to travel.',
    body: 'Campaign platforms and content systems that give a clear idea the range, rhythm and staying power to travel.',
  },
  {
    number: '02',
    icon: 'Clapperboard',
    title: 'Brand Design',
    tagline: 'Distinct by design.',
    body: 'Positioning, identity and brand systems that clarify what you stand for—and make every expression unmistakably yours.',
  },
  {
    number: '03',
    icon: 'Layers',
    title: 'Product & Experience Design',
    tagline: 'Complexity, made intuitive.',
    body: 'Digital products and experiences that make complex journeys feel intuitive, useful and beautifully resolved.',
  },
  {
    number: '04',
    icon: 'Share2',
    title: 'Multi-Channel Network Strategy',
    tagline: 'Every channel, pulling together.',
    body: 'Connected channel strategies that turn fragmented touchpoints into a coherent engine for reach, relevance and growth.',
  },
]

export const projects: readonly Project[] = [
  {
    client: 'Pan African Resources',
    clientUrl: 'https://www.panafricanresources.com/',
    sector: 'Mining · Investor & ESG',
    result: 'A complex business, made visible.',
    detail: 'A five-year partnership elevating brand presence and communication across investor, ESG and stakeholder narratives, multimedia and AI-enabled storytelling.',
    color: 'ember',
    slug: 'pan-african-resources',
    status: 'documented',
    scope: ['Brand presence', 'Investor & ESG narrative', 'Stakeholder engagement', 'Multimedia & AI'],
  },
  {
    client: 'Northstar',
    sector: 'Technology',
    result: 'A category made visible.',
    detail: 'A unified brand and product experience for a platform entering its next stage of growth.',
    color: 'ember',
    image: projectOne,
    slug: 'northstar',
    status: 'representative',
  },
  {
    client: 'Fieldwork',
    sector: 'Culture',
    result: 'A digital home with depth.',
    detail: 'An editorial system that turns an expanding body of work into a focused, intuitive experience.',
    color: 'light',
    image: projectTwo,
    slug: 'fieldwork',
    status: 'representative',
  },
  {
    client: 'Vantage',
    sector: 'Impact',
    result: 'Complexity, made compelling.',
    detail: 'A new story and platform that brings ambitious work to life without losing its substance.',
    color: 'ember',
    image: projectThree,
    slug: 'vantage',
    status: 'representative',
  },
]

export const insights = [
  { category: 'Perspective', title: 'Distinctiveness is not decoration. It is infrastructure.', image: heroImage },
  { category: 'Design', title: 'The best interfaces make complexity disappear', image: projectTwo },
  { category: 'Growth', title: 'In the age of AI search, brand meaning compounds', image: projectThree },
] as const
