import { Check } from "lucide-react"
import { Section } from "@/Layout"
import { about, strengths } from "@/data/content"

export const About = () => (
  <Section id="about" title="How I work">
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <div className="max-w-[62ch] space-y-4">{about.map(t => <p key={t}>{t}</p>)}</div>
      <ul className="grid gap-3">
        {strengths.map(s => (
          <li key={s} className="flex items-start gap-3">
            <Check className="mt-1 size-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />{s}
          </li>
        ))}
      </ul>
    </div>
  </Section>
)
