import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/Layout"
import { useContent } from "@/LangContext"

export const Accolades = () => {
  const { accolades, ui } = useContent()
  return (
    <Section id="accolades" title={ui.accoladesTitle}>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-6">
        {accolades.map(a => (
          <li key={a.title} className="flex">
            <Card className="w-full shadow-sm">
              <CardHeader>
                <img src={a.image} alt="" className="h-10 w-20"/>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{a.title}</CardTitle>
                <CardDescription className="text-base">{a.subtext}</CardDescription>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}