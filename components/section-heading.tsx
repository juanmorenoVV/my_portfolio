import { FadeIn } from "@/components/fade-in"

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <FadeIn>
      <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
        {children}
      </h2>
    </FadeIn>
  )
}
