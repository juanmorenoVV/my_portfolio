"use client"

import { useLanguage } from "@/components/language-provider"

export function SiteNav() {
  const { lang, toggle, t } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <a
          href="#hero"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          JM
        </a>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="#projects"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            {t.nav.projects}
          </a>
          <a
            href="#contact"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            {t.nav.contact}
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="rounded-md border border-border px-2.5 py-1 font-mono text-xs uppercase text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </nav>
    </header>
  )
}
