import { Menu } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import LangSelector from "./LangSelector"
import { Container, Icon } from "@/Layout"
import { profile } from "@/data/content"

const links = [
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export const Header = () => (
  <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
    <Container className="flex min-h-16 items-center justify-between gap-4">
      <a href="#top" className="font-bold tracking-tight flex items-center gap-2">
        <img src="logotrans.png" alt="logo" className="w-12"/>
        <span className="hidden md:block">{profile.name}</span>
      </a>

      <nav aria-label="Main" className="hidden gap-6 sm:flex">
        {links.map(l => (
          <a key={l.href} href={l.href} className="font-medium text-muted-foreground hover:text-foreground">{l.label}</a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <LangSelector />
        <Sheet>
          <SheetTrigger className={buttonVariants({ variant: "outline", size: "icon", className: "sm:hidden" })} aria-label="Open menu">
            <Icon as={Menu} />
          </SheetTrigger>
          <SheetContent side="right">
            <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
              {links.map(l => (
                <SheetClose render={<a href={l.href} className={buttonVariants({ variant: "ghost", className: "justify-start text-base" })} />}>{l.label}</SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </Container>
  </header>
)
