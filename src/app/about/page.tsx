import { Footer } from "@/components/layout-components/Footer";
import { Header } from "@/components/layout-components/Header";
import { Achievement } from "@/sections/about/Achievement";
import { Hero } from "@/sections/about/Hero";
import { TechStack } from "@/sections/about/TechStack";

export default function About() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Achievement />
				<TechStack />
			</main>
			<Footer />
		</>
	)
}
