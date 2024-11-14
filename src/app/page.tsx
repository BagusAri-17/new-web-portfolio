import Image from "next/image";
import { Header } from "@/components/layout-components/Header";
import { Hero } from "@/sections/home/Hero";
import { Tape } from "@/sections/home/Tape";
import { CallToAction } from "@/sections/home/CallToAction";
import { Footer } from "@/components/layout-components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Tape />
				{/* <CallToAction /> */}
			</main>
			<Footer />
		</>
	);
}
