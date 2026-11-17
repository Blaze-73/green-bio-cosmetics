/**
 * Central place to edit the business details.
 * Everything on the site reads from here.
 */
export const SITE = {
  name: "GREEN Bio Cosmetics",
  /** TODO: replace the Instagram handle with the real one */
  instagram: "https://instagram.com/green.biocosmetics",
  phoneDisplay: "+212 723-293972",
  phoneHref: "tel:+212723293972",
  /** WhatsApp deep link — number without +, spaces or dashes */
  whatsapp: "https://wa.me/212723293972",
  /** TODO: update once the site is deployed on its final domain */
  domain: "https://green-biocosmetics.vercel.app",
} as const

/** Build a WhatsApp link with a prefilled message */
export const waOrder = (message?: string) =>
  message ? `${SITE.whatsapp}?text=${encodeURIComponent(message)}` : SITE.whatsapp
