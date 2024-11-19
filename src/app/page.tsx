import React from "react";
import type { Metadata } from "next";

import { Header } from "@/components/layout-components/Header";
import { Hero } from "@/sections/home/Hero";
import { Tape } from "@/sections/home/Tape";
import { Footer } from "@/components/layout-components/Footer";

export const metadata: Metadata = {
	title: "Bagus Ari | Software Engineer & UI/UX Designer",
	description: "Welcome to the portfolio of Bagus Ari, a Software Engineer specializing in Front-End Development and UI/UX Design. Explore my works, achievements, and professional journey.",
};

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Tape />
			</main>
			<Footer />
		</>
	);
}
