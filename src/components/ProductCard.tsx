import { useTranslation } from "react-i18next"
import type { Product } from "../data/products"
import { waOrder } from "../config"
import { Reveal } from "./Reveal"
import { PhotoFrame } from "./PhotoFrame"
import { ArrowIcon, WhatsAppIcon } from "./icons"

interface ProductCardProps {
  product: Product
  delay?: number
}

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const { t } = useTranslation()
  const item = t(`products.items.${product.id}`, { returnObjects: true }) as {
    name: string
    tag: string
    desc: string
    wa: string
  }

  return (
    <Reveal delay={delay} className="group">
      <PhotoFrame src={product.image} alt={item.name} className="aspect-[4/5]" />
      <div className="mt-5">
        <p className="kicker text-fern/70">{item.tag}</p>
        <h3 className="mt-2 font-display text-xl sm:text-2xl">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-pine/70">{item.desc}</p>
      </div>
      <a
        href={waOrder(item.wa)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-fern transition-colors hover:text-pine"
      >
        <WhatsAppIcon className="h-4 w-4" />
        {t("products.order")}
        <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </Reveal>
  )
}
