import React from "react";
import type { Metadata } from "next";

import { Footer } from "@/components/layout-components/Footer";
import { Header } from "@/components/layout-components/Header";
import { Hero } from "@/sections/projects/Hero";

export const metadata: Metadata = {
	title: "Bagus Ari | Projects",
	description: "Explore the projects by Bagus Ari, showcasing innovative web designs, UI/UX prototypes, and software solutions. From concept to implementation, see the results of my creativity and technical skills.",
};

export default function Projects() {
    return (
        <>
            <Header />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    )
}
