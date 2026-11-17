import { useTranslation } from "react-i18next"
import { LeafIcon } from "./icons"

/** Blush ribbon of ingredient names scrolling forever */
export function Marquee() {
  const { t } = useTranslation()
  const items = t("marquee.items", { returnObjects: true }) as unknown as string[]
  const row = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-pine/10 bg-blush py-4 text-pine" aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-display text-lg italic">
            {item}
            <LeafIcon className="h-4 w-4 shrink-0 text-pine/50" />
          </span>
        ))}
      </div>
    </div>
  )
}
