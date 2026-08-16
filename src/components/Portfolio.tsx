import { motion } from 'framer-motion'
import { ArrowUpRight } from "lucide-react";
import Image from 'next/image'
import { projects } from "@/data/site";
import { Reveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-8 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-[var(--ink)] shadow-[var(--shadow-deep)] ring-1 ring-white/[0.08]">
            <div className="flex items-end justify-between gap-6 px-8 pt-10 lg:px-14 lg:pt-14">
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-primary">Proof, not promises</p>
                <h2 className="display mt-4 text-[clamp(2.4rem,4.5vw,4.5rem)] leading-none text-foreground">Selected Work</h2>
              </div>
              <p className="hidden max-w-xs text-xs leading-relaxed text-muted-foreground sm:block">
                Hover a project to reveal the result.
              </p>
            </div>

            <div className="mt-8 divide-y divide-border lg:mt-12">
              {projects.map((project, i) => (
                <ProjectRow key={project.client} project={project} index={i} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const isEmber = project.color === "ember";
  const fillStyle = isEmber
    ? { backgroundImage: "var(--gradient-ember)" }
    : { backgroundColor: "oklch(0.97 0.005 80)" };
  const onSolidColor = isEmber ? "oklch(0.14 0.01 40)" : "oklch(0.13 0 0)";
  const idleColor = "oklch(0.97 0.005 80)";
  const idleMuted = "oklch(0.68 0.008 70)";

  return (
    <motion.a
      href="#portfolio"
      initial="rest"
      whileHover="hover"
      animate="rest"
              className="group relative block overflow-hidden px-8 py-11 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary lg:px-14 lg:py-14"
    >
      <motion.span
        aria-hidden
        variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }}
        transition={{ duration: 0.65, ease }}
        style={{ ...fillStyle, transformOrigin: "bottom" }}
        className="absolute inset-0"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto_20rem]">
        <div>
          <motion.p
            variants={{ rest: { color: idleMuted }, hover: { color: onSolidColor } }}
            transition={{ duration: 0.5, ease }}
            className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]"
          >
            {String(index + 1).padStart(2, "0")} — {project.sector}
          </motion.p>
          <motion.h3
            variants={{ rest: { color: idleColor }, hover: { color: onSolidColor } }}
            transition={{ duration: 0.5, ease }}
            className="display mt-4 text-[clamp(2rem,5vw,4rem)]"
          >
            {project.client}
          </motion.h3>

          <motion.div
            variants={{
              rest: { opacity: 0, y: 12, color: onSolidColor },
              hover: { opacity: 1, y: 0, color: onSolidColor },
            }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="mt-5 max-w-md"
          >
            <p className="display text-xl">{project.result}</p>
            <p className="mt-2 text-sm leading-relaxed opacity-80">{project.detail}</p>
          </motion.div>
        </div>

        <motion.span
          variants={{
            rest: { opacity: 0, x: -8, color: onSolidColor },
            hover: { opacity: 1, x: 0, color: onSolidColor },
          }}
          transition={{ duration: 0.45, ease }}
          className="hidden lg:block"
        >
          <ArrowUpRight size={40} strokeWidth={1.2} />
        </motion.span>

        <motion.div
          variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.04, rotate: -1.2 } }}
          transition={{ duration: 0.7, ease }}
          className="overflow-hidden rounded-2xl"
        >
          <Image
            src={project.image}
            alt={`${project.client} project preview`}
            loading="lazy"
            width={1024}
            height={768}
            className="h-52 w-full object-cover lg:h-44"
          />
        </motion.div>
      </div>
    </motion.a>
  );
}
