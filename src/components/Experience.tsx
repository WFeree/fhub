import { Fragment } from "react"
import { Separator } from "@/components/ui/separator"
import { Section } from "@/Layout"
import { useContent } from "@/LangContext"

export const Experience = () => {
  const { jobs, ui } = useContent()
  return (
    <Section id="experience" title={ui.experienceTitle}>
      <ul className="grid gap-8">
        {jobs.map((j, i) => (
          <Fragment key={j.title}>
            {i > 0 && <Separator />}
            <li className="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-6">
              <p className="text-muted-foreground">{j.period}</p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{j.title}</h3>
                  <p className="mt-1 text-muted-foreground">{j.text}</p>
                </div>
                  <img src={j.image} className="h-15"/>
              </div>
            </li>
          </Fragment>
        ))}
      </ul>
    </Section>
  )
}