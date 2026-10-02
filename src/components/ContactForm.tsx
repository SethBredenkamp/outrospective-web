'use client'

import { ArrowUpRight } from 'lucide-react'

export function ContactForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const name = String(data.get('name') ?? '')
        const email = String(data.get('email') ?? '')
        const organisation = String(data.get('organisation') ?? '')
        const brief = String(data.get('brief') ?? '')
        const subject = encodeURIComponent(`Project enquiry from ${name || organisation || 'the website'}`)
        const body = encodeURIComponent(
          [`Name: ${name}`, `Email: ${email}`, `Organisation: ${organisation}`, '', brief].join('\n'),
        )

        window.location.href = `mailto:hello@outrospective.co?subject=${subject}&body=${body}`
      }}
      className="grid gap-7"
    >
      {['Name', 'Email', 'Organisation'].map((label) => (
        <label key={label} className="grid gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-primary">
          {label}
          <input
            required
            name={label.toLowerCase()}
            type={label === 'Email' ? 'email' : 'text'}
            className="border-x-0 border-b border-t-0 border-border bg-transparent px-0 py-4 text-base normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
          />
        </label>
      ))}
      <label className="grid gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-primary">
        What are we solving?
        <textarea
          required
          name="brief"
          rows={5}
          className="resize-none border-x-0 border-b border-t-0 border-border bg-transparent px-0 py-4 text-base normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
        />
      </label>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button type="submit" className="ember-gradient inline-flex w-fit items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]">
          Open email draft <ArrowUpRight size={18} />
        </button>
        <p className="max-w-xs text-xs leading-5 text-muted-foreground">
          This opens your email app so you can review the message before sending.
        </p>
      </div>
    </form>
  )
}
