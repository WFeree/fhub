import { Globe } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import "flag-icons/css/flag-icons.min.css"

type Lang = "en" | "hu"

const LANGUAGES: { code: Lang; flagCode: string; name: string }[] = [
  { code: "en", flagCode: "us", name: "EN" },
  { code: "hu", flagCode: "hu", name: "HU" },
]

const LangSelector = () => {
  const [langSelectorOpen, setLangSelectorOpen] = useState<boolean>(false)
  const [lang, setLang] = useState<Lang>("en")

  function changeLang(newLang: Lang) {
    setLang(newLang)
    setLangSelectorOpen(false)
  }

  return (
    <div className="relative">
      <Button variant="outline" className="flex border rounded-4xl px-4 py-2 items-center gap-2 w-25" onClick={() => setLangSelectorOpen(!langSelectorOpen)}>
        <Globe size={18} />
        <span>{lang.toUpperCase()}</span>
      </Button>

      {langSelectorOpen && (
        <div className="absolute top-8 mt-2 rounded-md border bg-background shadow-md p-2 w-25">
          {LANGUAGES.map(({ code, flagCode, name }) => (
            <Button key={code} variant="ghost" disabled={lang === code} className="w-full text-left px-4 py-2 hover:bg-accent rounded-md flex gap-2" onClick={() => changeLang(code)}>
              <span className={`fi fi-${flagCode}`}></span>
              <span>{name}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LangSelector