import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/Layout"
import { profile } from "@/data/content"

export const Hero = () => (
  <section id="top" className="pb-16 pt-[clamp(2.5rem,12vw,7rem)]">
    <Container>
      <h1 className="max-w-[14ch] wrap-break-word text-[clamp(2.75rem,1.2rem+7.5vw,7rem)] font-bold leading-[.98] tracking-tighter">
        {profile.role} <span className="text-primary">building useful things.</span>
      </h1>
    <p className="mt-6 max-w-[62ch] text-[clamp(1.125rem,1rem+.6vw,1.5rem)] text-muted-foreground">{profile.intro}</p>
    <div className="mt-10 flex flex-wrap gap-3 justify-center">
      <Button className="p-6">
        <a href="#skills" className="flex items-center gap-2 text-lg">
          <ArrowDown strokeWidth={3}/>Learn more about me
        </a>
      </Button>
    </div>
    </Container>
  </section>
)