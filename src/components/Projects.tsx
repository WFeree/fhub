import { Section } from "@/Layout"
import { useContent } from "@/LangContext"

export const Projects = () => {
  const { skills, ui } = useContent()
  return (
    <Section id="skills" title={ui.skillsTitle}>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-6">
        {skills.map(p => (
          <li key={p.title} className="flex">
            <div className={"w-full flex items-center justify-center gap-4 border rounded-2xl p-4 shadow-sm bg-white"}>
              <img src={p.logo} className="w-10"/>
              <p>{p.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}