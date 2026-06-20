"use client"

import { buttonVariants } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="flex min-h-[90vh] items-center px-6 pt-14"
    >
      <FadeIn className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm text-accent">{t.hero.title}</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          {t.hero.name}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {t.hero.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className={buttonVariants({ size: "lg" })}>
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
