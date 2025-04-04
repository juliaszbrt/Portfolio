'use client'
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Experience from "./Experience"

export default function Main() {

	return (
		<main className="bg-[#FFECDD]">
			<section id="home">
				<Home />
			</section>
			<section id="portfolio">
				<Portfolio />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="experience">
				<Experience />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</main>
	)
}
