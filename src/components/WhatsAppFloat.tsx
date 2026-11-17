import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { waOrder } from "../config"
import { WhatsAppIcon } from "./icons"

/** Floating WhatsApp bubble — always one tap away */
export function WhatsAppFloat() {
  const { t } = useTranslation()
  return (
    <motion.a
      href={waOrder()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("nav.order")}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-fern p-3.5 text-cream shadow-lg shadow-pine/30 transition-colors hover:bg-forest"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </motion.a>
  )
}
