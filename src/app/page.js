'use client'
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Experience from "./Experience"

export default function Main() {

  return (
      <main className="bg-[#FFECDD]">
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
  )
}
