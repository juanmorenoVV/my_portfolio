"use client"

import { FadeIn } from "@/components/fade-in"
import { useLanguage } from "@/components/language-provider"
import { techStack } from "@/lib/i18n"
import { SectionHeading } from "@/components/section-heading"

export function TechStack() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>{t.tech.heading}</SectionHeading>
        <FadeIn>
          <ul className="mt-10 grid grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-4 md:grid-cols-6">
            {techStack.map((tech) => (
              <li
                key={tech.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span
                  aria-hidden="true"
                  className="h-7 w-7 bg-muted-foreground transition-colors group-hover:bg-foreground"
                  style={{
                    maskImage: `url(/icons/${tech.slug}.svg)`,
                    WebkitMaskImage: `url(/icons/${tech.slug}.svg)`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
                <span className="text-xs text-muted-foreground">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
