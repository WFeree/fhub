import { Globe } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import "flag-icons/css/flag-icons.min.css"

const LangSelector = () => {
  const [LangSelectorOpen, setLangSelectorOpen] = useState<boolean>(false)
  const [lang, setLang] = useState<"en" | "hu">("en")

  function changeLang(){
    if(lang == "en"){
      setLang("hu")
    }
    if(lang == "hu"){
      setLang("en")
    }
    setLangSelectorOpen(false)
  }
  
  const LangItem = (flagCode: string, name: string) => {
    if(lang == "en"){
      return(
      <Button variant="ghost" className="w-full text-left px-4 py-2 hover:bg-accent rounded-md flex gap-2" onClick={changeLang}>
        <span className={`fi fi-${flagCode}`}></span>
        <span>{name}</span>
      </Button>
        )
    }
    if(lang == "hu"){
      return(
        <Button variant="ghost" className="w-full text-left px-4 py-2 hover:bg-accent rounded-md flex gap-2" onClick={changeLang}>
          <span className={`fi fi-${flagCode}`}></span>
          <span>{name}</span>
        </Button>
      )
    }
  }

  return (
    <div className="relative">
      <Button variant="outline" className="flex border rounded-4xl px-4 py-2 items-center gap-2 w-25" onClick={() => setLangSelectorOpen(!LangSelectorOpen)}>
        <Globe size={18}/>
        <span>{lang.toUpperCase()}</span>
      </Button>

      {LangSelectorOpen && (
        <div className="absolute top-8 mt-2 rounded-md border bg-background shadow-md p-2 w-25">
          {LangItem("us","EN")}
          {LangItem("hu","HU")}
        </div>
      )}

    </div>
  )
}

export default LangSelector