import { ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, Icon } from "@/Layout"
import { projects } from "@/data/content"

export const Projects = () => {
  const main = projects.find(p => p.featured)!
  const rest = projects.filter(p => p !== main)
  return (
    <Section id="work" title="Featured Projects">
      <Card className="bg-primary mb-6">
        <CardHeader className="w-full">
          <CardTitle className="text-[clamp(1.5rem,1rem+2.2vw,2.75rem)] leading-tight tracking-tight text-white font-semibold">{main.title}</CardTitle>
          <CardDescription className="max-w-[62ch] text-base text-primary-foreground">{main.summary}</CardDescription>
        </CardHeader>
        <CardFooter>
          <a href={main.href} className={buttonVariants({ variant: "secondary" })}>View case study <Icon as={ArrowUpRight} /></a>
        </CardFooter>
      </Card>

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-6">
        {rest.map(p => (
          <li key={p.title} className="flex">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-xl">{p.title}</CardTitle>
                <CardDescription className="text-base">{p.summary}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto font-mono text-sm text-muted-foreground">{p.stack.join(", ")}</CardContent>
              <CardFooter>
                <a href={p.href} className={buttonVariants({ variant: "link", className: "h-auto p-0" })}>Open <Icon as={ArrowUpRight} /></a>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
