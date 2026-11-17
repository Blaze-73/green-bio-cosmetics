import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { SITE } from "../config"

/** Sets the document title, meta description, <html lang> and canonical per page */
export function usePageMeta(metaKey: "home" | "about" | "products" | "contact", path: string) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const lang = i18n.language?.startsWith("en") ? "en" : "fr"
    document.title = t(`meta.${metaKey}Title`)
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t(`meta.${metaKey}Desc`))
    document.documentElement.lang = lang
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `${SITE.domain}${path}`)
  }, [t, i18n.language, metaKey, path])
}
