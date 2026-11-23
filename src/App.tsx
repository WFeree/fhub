import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Experience } from "./components/Experience"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Accolades } from "./components/Accolades"
import { LangProvider } from "@/LangContext"

export default function App() {
  return (
    <LangProvider>
      <div
        className="min-h-screen bg-background font-sans text-foreground antialiased"
        style={{
          backgroundImage:
            "linear-gradient(rgb(138 138 138 / 0.3) 1.5px, transparent 1.5px), linear-gradient(to right, rgb(138 138 138 / 0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
          backgroundAttachment: "fixed",
        }}
      >
        <Header />
        <main>
          <Hero />
          <div className="bg-background">
            <Projects />
            <Experience />
            <Accolades />
            <About />
          </div>
        </main>
        <Contact />
      </div>
    </LangProvider>
  )
}
