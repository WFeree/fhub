import LangSelector from "./LangSelector"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
const Navbar = () => {
  const NavItem = (href: string, label: string) => {
    return <a href={"#" + href} className="relative group">
      <Button variant="link" className="relative px-2">
        {label}
        <span className="absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 w-0 group-hover:w-full"/>
      </Button>
    </a>
  }
  
  return (
    <header className="bg-white sticky top-0 z-50 w-full border-b backdrop-blur-2xl">
      <nav className="flex mx-auto h-16 max-w-6xl items-center justify-center px-6">
        <div className="flex items-center gap-4 mr-auto">
          <img src="./logotrans.png" className="h-16"/>
          <span className="font-bold">Ferenc Wágner - CV</span>
        </div>
        <div className="flex justify-center items-center gap-12">
          {NavItem("", "About")}
          <Separator orientation="vertical"/>
          {NavItem("", "Work")}
          <Separator orientation="vertical"/>
          {NavItem("", "Achivements")}
          <LangSelector/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar