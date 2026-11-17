import { useTranslation } from "react-i18next"
import { SITE, waOrder } from "../config"
import { PageHero } from "../components/PageHero"
import { PhotoFrame } from "../components/PhotoFrame"
import { Reveal } from "../components/Reveal"
import { usePageMeta } from "../hooks/usePageMeta"
import { ArrowIcon, InstagramIcon, PhoneIcon, WhatsAppIcon } from "../components/icons"
import hairImg from "../assets/images/hair.jpg"

export function Contact() {
  const { t } = useTranslation()
  usePageMeta("contact", "/contact")

  const actions = [
    {
      href: waOrder(),
      label: t("contact.waLabel"),
      value: t("contact.waValue"),
      icon: <WhatsAppIcon className="h-5 w-5" />,
      external: true,
    },
    {
      href: SITE.instagram,
      label: t("contact.igLabel"),
      value: t("contact.igValue"),
      icon: <InstagramIcon className="h-5 w-5" />,
      external: true,
    },
    {
      href: SITE.phoneHref,
      label: t("contact.callLabel"),
      value: SITE.phoneDisplay,
      icon: <PhoneIcon className="h-5 w-5" />,
      external: false,
    },
  ]

  return (
    <>
      <PageHero kicker={t("contact.kicker")} title={t("contact.title")} sub={t("contact.sub")} />

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-gutter grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="max-w-md leading-relaxed text-pine/75">{t("contact.note")}</p>
              <p className="mt-4 flex items-center gap-3 text-sm text-pine/60">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fern opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-fern" />
                </span>
                {t("contact.hours")}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 max-w-sm">
              <div className="aspect-[4/3]">
                <PhotoFrame src={hairImg} alt={t("contact.photoAlt")} className="aspect-[4/3]" />
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <div>
              {actions.map((a, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <a
                    href={a.href}
                    {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4 border-t border-pine/10 py-7 transition-colors last:border-b hover:bg-blush/10 sm:px-4"
                  >
                    <span className="flex items-center gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine text-blush transition-colors group-hover:bg-fern">
                        {a.icon}
                      </span>
                      <span>
                        <span className="kicker block text-fern/70">{a.label}</span>
                        <span className="mt-1 block font-display text-lg sm:text-xl">{a.value}</span>
                      </span>
                    </span>
                    <ArrowIcon className="h-5 w-5 shrink-0 text-pine/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-fern" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
