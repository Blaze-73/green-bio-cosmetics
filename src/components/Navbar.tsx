import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { waOrder, SITE } from "../config"
import { LanguageToggle } from "./LanguageToggle"
import { ArrowIcon, CloseIcon, InstagramIcon, MenuIcon, WhatsAppIcon } from "./icons"

const links = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/products", key: "nav.products" },
  { to: "/contact", key: "nav.contact" },
]

function Wordmark() {
  return (
    <Link to="/" className="group inline-block" aria-label="GREEN Bio Cosmetics — home">
      <span className="font-display text-[1.65rem] font-semibold leading-none text-blush transition-colors group-hover:text-blush-soft">
        Green
      </span>
      <span className="mt-1 block text-[9px] uppercase tracking-[0.4em] text-cream/60">bio cosmetics</span>
    </Link>
  )
}

export function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the menu on navigation + lock body scroll while open
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "border-b border-cream/10 bg-pine/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container-gutter flex items-center justify-between py-4">
          <Wordmark />

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide transition-colors hover:text-blush ${
                    isActive ? "text-blush" : "text-cream/80"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {t(l.key)}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-blush"
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <LanguageToggle dark />
            <a href={waOrder()} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5 text-xs">
              <WhatsAppIcon className="h-4 w-4" />
              {t("nav.order")}
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle dark />
            <button
              onClick={() => setOpen(true)}
              aria-label={t("nav.menu")}
              className="rounded-full p-2 text-cream transition-colors hover:text-blush"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex flex-col bg-pine text-cream"
            role="dialog"
            aria-modal="true"
          >
            <div className="container-gutter flex items-center justify-between py-4">
              <Wordmark />
              <button
                onClick={() => setOpen(false)}
                aria-label={t("nav.close")}
                className="rounded-full p-2 text-cream transition-colors hover:text-blush"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="container-gutter mt-8 flex flex-1 flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-cream/10"
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `group flex items-center justify-between py-5 font-display text-3xl transition-colors ${
                        isActive ? "text-blush" : "text-cream"
                      }`
                    }
                  >
                    {t(l.key)}
                    <ArrowIcon className="h-5 w-5 text-cream/40 transition-all group-hover:translate-x-1 group-hover:text-blush" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="container-gutter flex flex-col gap-4 pb-10"
            >
              <a href={waOrder()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                <WhatsAppIcon className="h-4 w-4" />
                {t("nav.order")}
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
