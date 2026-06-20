"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"

const ODOO_URL = "https://apps.odoo.com/apps"

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects

  const projects = [
    {
      key: "sync",
      title: p.items.sync.title,
      description: p.items.sync.description,
      image: "/projects/sync-sheets-to-leads.png",
      meta: p.published,
      tags: ["Odoo", "Python", "Google Sheets API"],
      link: { label: p.viewOn, href: ODOO_URL },
    },
    {
      key: "margin",
      title: p.items.margin.title,
      description: p.items.margin.description,
      image: "/projects/profit-margin.png",
      meta: `${p.published} · ${p.collaborators}`,
      tags: ["Odoo", "Python"],
      link: { label: p.viewOn, href: ODOO_URL },
    },
    {
      key: "cobranza",
      title: p.items.cobranza.title,
      description: p.items.cobranza.description,
      image: null,
      meta: p.inProduction,
      tags: ["React", "Next.js", "Python", "Docker", "Nginx", "PWA", "ERP Profit"],
      link: null,
    },
    {
      key: "agro",
      title: p.items.agro.title,
      description: p.items.agro.description,
      image: null,
      meta: p.inDevelopment,
      tags: ["Python", "React", "Docker", "ERP Profit"],
      link: null,
    },
  ]

  return (
    <section id="projects" className="border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>{p.heading}</SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.key} delay={i * 80}>
              <Card className="flex h-full flex-col gap-0 overflow-hidden p-0">
                {project.image && (
                  <div className="relative aspect-video w-full border-b border-border/60">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs text-accent">{project.meta}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {project.link.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
