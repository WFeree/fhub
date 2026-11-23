import { MapPin } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Container, Icon } from "@/Layout"
import { GithubIcon } from "@/BrandIcons"
import { profile } from "@/data/content"

export const Contact = () => (
  <>
    <section id="contact" className="border-t bg-card py-20 sm:py-28">
      <Container>
        <h2 className="max-w-[20ch] text-[clamp(1.5rem,1.2rem+1.4vw,2.25rem)] font-semibold leading-tight tracking-tight">
          Have a project or role in mind? Let's talk.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.github} className={buttonVariants({ variant: "outline" })}>
            <Icon as={GithubIcon} />GitHub
          </a>
        </div>
        <p className="mt-6 flex items-center gap-3 text-muted-foreground"><Icon as={MapPin} />{profile.location}</p>
      </Container>
    </section>
    <Separator />
    <footer className="py-6 text-sm text-muted-foreground"><Container>© 2026 {profile.name}</Container></footer>
  </>
)