import Image from 'next/image'

import type { Project } from '@/data/site'

export function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === 'pan-african-resources') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[oklch(0.12_0.018_72)] text-[oklch(0.94_0.02_82)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,oklch(0.76_0.15_75/0.72),transparent_22%),radial-gradient(circle_at_42%_72%,oklch(0.55_0.14_62/0.5),transparent_31%),linear-gradient(135deg,transparent_0_42%,oklch(0.28_0.055_68/0.72)_43%_54%,transparent_55%)]" />
        <div className="absolute -right-[14%] -top-[18%] aspect-square w-[68%] rounded-full border border-[oklch(0.87_0.12_78/0.32)]" />
        <div className="absolute -right-[4%] -top-[7%] aspect-square w-[48%] rounded-full border border-[oklch(0.87_0.12_78/0.2)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,oklch(0.84_0.14_78/0.7),transparent)]" />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <p className="display translate-x-[8%] text-[clamp(7rem,17vw,16rem)] uppercase leading-[0.7] tracking-[-0.04em] text-white/[0.055]">
            Gold<br />Future
          </p>
        </div>
      </div>
    )
  }

  if (!project.image) return null

  return (
    <Image
      src={project.image}
      alt={`${project.client} project preview`}
      fill
      loading="lazy"
      className="object-cover"
      sizes="(min-width: 1024px) 58vw, 100vw"
    />
  )
}
