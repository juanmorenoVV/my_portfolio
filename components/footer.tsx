"use client"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-3xl items-center justify-between text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Juan Moreno</span>
        <span className="font-mono">{t.footer}</span>
      </div>
    </footer>
  )
}
