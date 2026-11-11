import { Globe } from "lucide-react"
import { Button } from "./ui/button"

const LangSelector = () => {
  return (
    <Button variant="outline" className="flex border rounded-4xl px-4 py-2 items-center gap-2">
      <Globe size={18}/>
      <span>EN</span>
    </Button>
  )
}

export default LangSelector