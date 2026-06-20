"use client"

import { Mail } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"

type LinkItem = {
  label: string
  href: string
  icon: { type: "lucide"; Icon: typeof Mail } | { type: "mask"; slug: string }
}

const links: LinkItem[] = [
  {
    label: "Email",
    href: "mailto:juanmandresv@gmail.com",
    icon: { type: "lucide", Icon: Mail },
  },
  {
    label: "GitHub",
    href: "https://github.com/juanmorenoVV",
    icon: { type: "mask", slug: "github" },
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juan-andres-m-165ba6301/",
    icon: { type: "mask", slug: "linkedin" },
  },
]

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>{t.contact.heading}</SectionHeading>
        <FadeIn>
          <p className="mt-6 text-pretty text-2xl font-medium tracking-tight">
            {t.contact.subtitle}
          </p>
          <div className="mt-8 flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={link.label}
                className="group flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                {link.icon.type === "lucide" ? (
                  <link.icon.Icon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <span
                    aria-hidden="true"
                    className="h-5 w-5 bg-muted-foreground transition-colors group-hover:bg-foreground"
                    style={{
                      maskImage: `url(/icons/${link.icon.slug}.svg)`,
                      WebkitMaskImage: `url(/icons/${link.icon.slug}.svg)`,
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                    }}
                  />
                )}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
