import heroImage from '@/endpoints/seed/image-hero1.webp'
import projectOne from '@/endpoints/seed/image-post1.webp'
import projectTwo from '@/endpoints/seed/image-post2.webp'
import projectThree from '@/endpoints/seed/image-post3.webp'

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Blog', href: '#insights' },
]

export const clientLogos = ['Canva', 'amazon', 'android', 'ORACLE', 'asana']

export const services = [
  {
    number: '01',
    icon: 'Gem',
    title: 'Campaign & Content Design',
    tagline: 'Stories built to travel.',
    body: 'Connected campaign thinking and content systems that turn strategy into memorable storytelling.',
  },
  {
    number: '02',
    icon: 'Clapperboard',
    title: 'Brand Design',
    tagline: 'Distinct by design.',
    body: 'Positioning, identity and brand systems that make every expression coherent, useful and unmistakable.',
  },
  {
    number: '03',
    icon: 'Layers',
    title: 'Product & Experience Design',
    tagline: 'Designed for impact.',
    body: 'Digital products and experiences where thoughtful interaction meets durable, high-performance engineering.',
  },
  {
    number: '04',
    icon: 'Share2',
    title: 'Multi-Channel Network Strategy',
    tagline: 'Ready to scale.',
    body: 'A connected network of channels that multiplies reach, relevance and market impact beyond a single platform.',
  },
]

export const projects = [
  {
    client: 'Northstar',
    sector: 'Technology',
    result: 'A category made visible.',
    detail: 'A unified brand and product experience for a platform entering its next stage of growth.',
    color: 'ember',
    image: projectOne,
  },
  {
    client: 'Fieldwork',
    sector: 'Culture',
    result: 'A digital home with depth.',
    detail: 'An editorial system that turns an expanding body of work into a focused, intuitive experience.',
    color: 'light',
    image: projectTwo,
  },
  {
    client: 'Vantage',
    sector: 'Impact',
    result: 'Complexity, made compelling.',
    detail: 'A new story and platform that brings ambitious work to life without losing its substance.',
    color: 'ember',
    image: projectThree,
  },
] as const

export const insights = [
  { category: 'Perspective', title: 'Why distinctiveness is a business system', image: heroImage },
  { category: 'Design', title: 'Building interfaces people can understand at a glance', image: projectTwo },
  { category: 'Growth', title: 'Search is becoming a question of brand meaning', image: projectThree },
] as const
