import beldi from "../assets/images/beldi.jpg"
import lipstick from "../assets/images/lipstick.jpg"
import argan from "../assets/images/argan.jpg"
import hair from "../assets/images/hair.jpg"
import soothing from "../assets/images/soothing.jpg"

export type ProductId = "savon" | "fez" | "argan" | "hair" | "soothing"

export interface Product {
  id: ProductId
  image: string
}

export const products: Product[] = [
  { id: "savon", image: beldi },
  { id: "fez", image: lipstick },
  { id: "argan", image: argan },
  { id: "hair", image: hair },
  { id: "soothing", image: soothing },
]
