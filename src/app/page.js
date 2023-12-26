'use client'
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

export default function Main() {

  return (
      <main className="bg-[#FFECDD]">
        <Home />
        <About />
        <Portfolio />
        {/* <Skills /> */}
        <Contact />
      </main>
  )
}
