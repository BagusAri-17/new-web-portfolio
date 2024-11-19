import React from "react";
import type { Metadata } from "next";

import { Footer } from "@/components/layout-components/Footer";
import { Header } from "@/components/layout-components/Header";
import { Achievement } from "@/sections/about/Achievement";
import { Hero } from "@/sections/about/Hero";
import { TechStack } from "@/sections/about/TechStack";


export const metadata: Metadata = {
	title: "Bagus Ari | About",
	description: "Learn more about Bagus Ari, a passionate Software Engineer based in Bali, Indonesia. Discover my journey, expertise in front-end development, and dedication to crafting delightful user experiences.",
};

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
