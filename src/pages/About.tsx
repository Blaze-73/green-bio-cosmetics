import { useTranslation } from "react-i18next"
import { PageHero } from "../components/PageHero"
import { PhotoFrame } from "../components/PhotoFrame"
import { CtaBand } from "../components/CtaBand"
import { Reveal } from "../components/Reveal"
import { usePageMeta } from "../hooks/usePageMeta"
import aboutImg from "../assets/images/about.jpg"

export function About() {
  const { t } = useTranslation()
  usePageMeta("about", "/about")

  return (
    <>
      <PageHero kicker={t("about.kicker")} title={t("about.title")} />

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-gutter grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <PhotoFrame src={aboutImg} alt={t("about.photoAlt")} className="aspect-[4/5]" />
          </Reveal>

          <div>
            <Reveal>
              <p className="font-display text-2xl italic leading-snug text-fern sm:text-3xl">{t("about.lead")}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 leading-relaxed text-pine/75">{t("about.p1")}</p>
              <p className="mt-4 leading-relaxed text-pine/75">{t("about.p2")}</p>
              <p className="mt-4 leading-relaxed text-pine/75">{t("about.p3")}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="mt-9 border-l-2 border-blush pl-6">
                <p className="font-display text-xl italic leading-snug text-pine sm:text-2xl">{t("about.quote")}</p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
