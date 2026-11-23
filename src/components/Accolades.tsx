import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/Layout"
import { accolades } from "@/data/content"

export const Accolades = () => {
  return (
    <Section id="accolades" title="My Accolades">
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
              {/* <CardContent className="mt-auto font-mono text-sm text-muted-foreground">{a.stack.join(", ")}</CardContent> */}
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
