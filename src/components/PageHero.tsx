import { motion, useReducedMotion } from "framer-motion"
import { LeafIcon } from "./icons"

interface PageHeroProps {
  kicker: string
  title: string
  sub?: string
}

/** Dark green header band for inner pages */
export function PageHero({ kicker, title, sub }: PageHeroProps) {
  const reduce = useReducedMotion()
  return (
    <header className="relative overflow-hidden bg-pine pb-16 pt-36 text-cream sm:pb-24 sm:pt-44">
      <LeafIcon className="float-slow absolute -right-16 top-20 hidden h-40 w-40 rotate-45 text-fern/40 md:block" />
      <LeafIcon className="float-slower absolute -left-20 bottom-0 hidden h-56 w-56 -rotate-12 text-fern/30 md:block" />
      <div className="container-gutter">
        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="kicker flex items-center gap-3 text-blush"
        >
          <span className="h-px w-8 bg-blush/60" aria-hidden="true" />
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,6vw,4rem)] leading-[1.05]"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl leading-relaxed text-cream/70"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </header>
  )
}
