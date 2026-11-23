import type { ReactNode } from "react"
import type { ComponentType } from "react"

type IconType = ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: "true" }>


// Shared building blocks so spacing and icons stay consistent.
export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-300 px-4 sm:px-8 ${className}`}>{children}</div>
)

export const Section = ({ id, title, children, className = "" }:
  { id: string; title: string; children: ReactNode; className?: string }) => (
  <section id={id} className={`py-20 sm:py-28 ${className}`}>
    <Container>
      <h2 className="mb-10 text-[clamp(1.5rem,1.2rem+1.4vw,2.25rem)] font-semibold leading-tight tracking-tight">{title}</h2>
      {children}
    </Container>
  </section>
)

export const Icon = ({ as: C }: { as: IconType }) => (
  <C className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
)
