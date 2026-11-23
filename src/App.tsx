import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Experience } from "./components/Experience"
import { About } from "./components/About"
import { Contact } from "./components/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
      </main>
      <Contact />
    </div>
  )
}
