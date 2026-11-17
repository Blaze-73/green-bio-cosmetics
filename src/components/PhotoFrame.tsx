interface PhotoFrameProps {
  src: string
  alt: string
  /** Eager-load for above-the-fold images (hero) */
  eager?: boolean
  /** Sizing comes from the parent: pass e.g. "aspect-[4/5]" */
  className?: string
}

/** Moroccan-arch photo frame with the brand's duotone color grading */
export function PhotoFrame({ src, alt, eager = false, className = "" }: PhotoFrameProps) {
  return (
    <div className={`photo-frame ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding="async"
      />
    </div>
  )
}
