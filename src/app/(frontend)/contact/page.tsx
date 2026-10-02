import type { Metadata } from 'next'

import { ContactForm } from '@/components/ContactForm'
import { EditorialPageHero } from '@/components/EditorialPageHero'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with Outrospective in Cape Town or Scotland.',
}

export default function ContactPage() {
  return (
    <main>
      <EditorialPageHero
        eyebrow="Start a conversation"
        title={['What could', 'this become?']}
        intro="Bring the challenge, the ambition, or the question that will not leave you alone. We will bring a different lens."
      />
      <section className="px-6 pb-32 lg:px-10 lg:pb-44">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28">
          <div className="space-y-10">
            <div><p className="text-[0.6rem] uppercase tracking-[0.3em] text-primary">Cape Town</p><p className="mt-3 text-lg">South Africa</p></div>
            <div><p className="text-[0.6rem] uppercase tracking-[0.3em] text-primary">Scotland</p><p className="mt-3 text-lg">United Kingdom</p></div>
            <div><p className="text-[0.6rem] uppercase tracking-[0.3em] text-primary">Email</p><a className="mt-3 block text-lg hover:text-primary" href="mailto:hello@outrospective.co">hello@outrospective.co</a></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
