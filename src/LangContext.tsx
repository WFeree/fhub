import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { content, type Lang } from "@/data/content"

type Ctx = { lang: Lang; setLang: (l: Lang) => void }
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {} })

// Saved choice first, then the browser language, then English.
function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang")
    if (saved === "en" || saved === "hu") return saved
  } catch {}
  return navigator.language.toLowerCase().startsWith("hu") ? "hu" : "en"
}

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem("lang", lang) } catch {}
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

// Returns the content object for the selected language.
export const useContent = () => content[useLang().lang]