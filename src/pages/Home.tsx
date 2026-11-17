import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { products } from "../data/products"
import { waOrder } from "../config"
import { Reveal } from "../components/Reveal"
import { PhotoFrame } from "../components/PhotoFrame"
import { ProductCard } from "../components/ProductCard"
import { Marquee } from "../components/Marquee"
import { CtaBand } from "../components/CtaBand"
import { usePageMeta } from "../hooks/usePageMeta"
import { ArrowIcon, LeafIcon, WhatsAppIcon } from "../components/icons"
import heroImg from "../assets/images/hero.jpg"
import aboutImg from "../assets/images/about.jpg"

/** Headline that rises word by word from behind a mask */
function WordReveal({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
          <motion.span
            className="inline-block"
            initial={{ y: reduce ? 0 : "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.35 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function Home() {
  const { t } = useTranslation()
  usePageMeta("home", "/")

  const values = [
    { t: t("home.val1t"), d: t("home.val1d") },
    { t: t("home.val2t"), d: t("home.val2d") },
    { t: t("home.val3t"), d: t("home.val3d") },
  ]

  return (
    <>
      {/* ——— Hero ——— */}
      <header className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-pine text-cream">
        <LeafIcon className="float-slow absolute -left-16 top-24 hidden h-44 w-44 text-fern/40 md:block" />
        <LeafIcon className="float-slower absolute -right-14 bottom-24 hidden h-32 w-32 rotate-[70deg] text-blush/10 md:block" />

        <div className="container-gutter grid items-center gap-14 py-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="kicker flex items-center gap-3 text-blush"
            >
              <span className="h-px w-8 bg-blush/60" aria-hidden="true" />
              {t("hero.eyebrow")}
            </motion.p>

            <h1 className="mt-6 font-display text-[clamp(2.6rem,7.5vw,4.75rem)] font-medium leading-[1.04]">
              <WordReveal text={t("hero.title")} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg leading-relaxed text-cream/70"
            >
              {t("hero.sub")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href={waOrder()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <WhatsAppIcon className="h-4 w-4" />
                {t("hero.ctaPrimary")}
              </a>
              <Link to="/products" className="btn-outline">
                {t("hero.ctaSecondary")}
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.35 }}
              className="mt-8 flex items-center gap-2 text-xs tracking-[0.2em] text-cream/50 uppercase"
            >
              <LeafIcon className="h-4 w-4 text-sand" />
              {t("hero.badge")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
          >
            <div className="aspect-[4/5]">
              <PhotoFrame src={heroImg} alt={t("hero.photoAlt")} eager className="h-full" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-4 rounded-2xl bg-cream px-5 py-4 text-pine shadow-xl shadow-pine/40 sm:-left-8"
            >
              <p className="font-display text-xl italic text-fern sm:text-2xl">{t("hero.cardTitle")}</p>
              <p className="mt-0.5 text-[11px] tracking-[0.25em] text-pine/60 uppercase">{t("hero.cardTag")}</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 h-10 w-px -translate-x-1/2 overflow-hidden" aria-hidden="true">
          <motion.div
            animate={{ y: [-40, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-px bg-gradient-to-b from-transparent via-blush to-transparent"
          />
        </div>
      </header>

      {/* ——— Ingredients ribbon ——— */}
      <Marquee />

      {/* ——— Bestsellers ——— */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-gutter">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="kicker text-fern">{t("home.bestKicker")}</p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight">
                {t("home.bestTitle")}
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-pine transition-colors hover:text-fern"
            >
              {t("home.bestLink")}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ——— Story teaser ——— */}
      <section className="relative overflow-hidden bg-pine py-20 text-cream sm:py-28">
        <LeafIcon className="float-slower absolute -left-16 bottom-10 hidden h-48 w-48 text-fern/40 lg:block" />
        <div className="container-gutter grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 mx-auto w-full max-w-xs sm:max-w-sm lg:order-1 lg:max-w-md">
            <PhotoFrame src={aboutImg} alt={t("about.photoAlt")} className="aspect-[4/5]" />
            <p className="absolute -right-3 -top-4 rotate-3 rounded-full bg-blush px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-pine uppercase sm:-right-6">
              {t("home.storyTag")}
            </p>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="kicker text-blush">{t("home.storyKicker")}</p>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.1]">
                {t("home.storyTitle")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-cream/70">{t("home.storyP1")}</p>
              <p className="mt-4 leading-relaxed text-cream/70">{t("home.storyP2")}</p>
              <Link
                to="/about"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blush transition-colors hover:text-cream"
              >
                {t("home.storyLink")}
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Promises ——— */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-gutter">
          <Reveal>
            <p className="kicker text-fern">{t("home.whyKicker")}</p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight">
              {t("home.whyTitle")}
            </h2>
          </Reveal>
          <div className="mt-12">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="grid gap-3 border-t border-pine/10 py-9 sm:grid-cols-[4rem_1fr_1.4fr] sm:items-baseline sm:gap-8">
                  <span className="font-display text-base italic text-sand">0{i + 1}</span>
                  <h3 className="font-display text-2xl sm:text-3xl">{v.t}</h3>
                  <p className="max-w-xl leading-relaxed text-pine/70">{v.d}</p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-pine/10" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ——— Final CTA ——— */}
      <CtaBand />
    </>
  )
}
