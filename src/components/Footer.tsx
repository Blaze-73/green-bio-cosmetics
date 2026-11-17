import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { SITE, waOrder } from "../config"
import { LanguageToggle } from "./LanguageToggle"
import { InstagramIcon, WhatsAppIcon } from "./icons"

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const navLinks = [
    { to: "/", key: "nav.home" },
    { to: "/about", key: "nav.about" },
    { to: "/products", key: "nav.products" },
    { to: "/contact", key: "nav.contact" },
  ]

  return (
    <footer className="bg-pine text-cream">
      <div className="container-gutter grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-block" aria-label="GREEN Bio Cosmetics — home">
            <span className="font-display text-3xl font-semibold text-blush">Green</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.4em] text-cream/60">bio cosmetics</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">{t("footer.tagline")}</p>
          <div className="mt-6">
            <LanguageToggle dark />
          </div>
        </div>

        <div>
          <p className="kicker text-blush">{t("footer.nav")}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/70 transition-colors hover:text-blush">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="kicker text-blush">{t("footer.contact")}</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={waOrder()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream/70 transition-colors hover:text-blush"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream/70 transition-colors hover:text-blush"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </li>
            <li>
              <a href={SITE.phoneHref} className="text-cream/70 transition-colors hover:text-blush">
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-gutter flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/40 sm:flex-row">
          <p>
            © {year} {SITE.name}. {t("footer.rights")}
          </p>
          <p>{t("footer.credit")}</p>
        </div>
      </div>
    </footer>
  )
}
