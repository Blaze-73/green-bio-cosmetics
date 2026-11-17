import { useTranslation } from "react-i18next"
import { products } from "../data/products"
import { PageHero } from "../components/PageHero"
import { ProductCard } from "../components/ProductCard"
import { CtaBand } from "../components/CtaBand"
import { usePageMeta } from "../hooks/usePageMeta"

export function Products() {
  const { t } = useTranslation()
  usePageMeta("products", "/products")

  return (
    <>
      <PageHero kicker={t("products.kicker")} title={t("products.title")} sub={t("products.sub")} />

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-gutter grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
