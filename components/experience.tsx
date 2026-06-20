"use client"

import { FadeIn } from "@/components/fade-in"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>{t.experience.heading}</SectionHeading>
        <ol className="mt-10 border-l border-border">
          {t.experience.items.map((item, i) => (
            <FadeIn key={item.role} delay={i * 80}>
              <li className="relative pb-10 pl-6 last:pb-0">
                <span
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <h3 className="font-medium text-foreground">{item.role}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
