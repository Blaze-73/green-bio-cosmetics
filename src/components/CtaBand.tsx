import { useTranslation } from "react-i18next"
import { waOrder } from "../config"
import { Reveal } from "./Reveal"
import { WhatsAppIcon } from "./icons"

/** Blush call-to-action band, reused on several pages */
export function CtaBand() {
  const { t } = useTranslation()
  return (
    <section className="bg-blush py-16 text-pine sm:py-24">
      <div className="container-gutter flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]">{t("home.ctaTitle")}</h2>
          <p className="mt-3 max-w-md leading-relaxed text-pine/70">{t("home.ctaSub")}</p>
        </Reveal>
        <Reveal delay={0.1} className="shrink-0">
          <a href={waOrder()} target="_blank" rel="noopener noreferrer" className="btn-dark">
            <WhatsAppIcon className="h-4 w-4" />
            {t("home.ctaBtn")}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
