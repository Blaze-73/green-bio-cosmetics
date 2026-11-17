import i18n from "../i18n"

function ToggleButton({ code, label, dark }: { code: "fr" | "en"; label: string; dark?: boolean }) {
  const active = i18n.language?.startsWith(code)
  return (
    <button
      onClick={() => i18n.changeLanguage(code)}
      aria-pressed={active}
      className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
        active
          ? dark
            ? "bg-blush text-pine"
            : "bg-pine text-cream"
          : dark
            ? "text-cream/60 hover:text-blush"
            : "text-pine/50 hover:text-pine"
      }`}
    >
      {label}
    </button>
  )
}

export function LanguageToggle({ dark = false }: { dark?: boolean }) {
  return (
    <div
      role="group"
      aria-label="Language / Langue"
      className={`flex w-fit items-center gap-0.5 rounded-full border p-0.5 ${
        dark ? "border-cream/20" : "border-pine/15"
      }`}
    >
      <ToggleButton code="fr" label="FR" dark={dark} />
      <ToggleButton code="en" label="EN" dark={dark} />
    </div>
  )
}
