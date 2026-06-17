import React from "react";
import type { Metadata } from "next";

import { Footer } from "@/components/layout-components/Footer";
import { Header } from "@/components/layout-components/Header";
import { Hero } from "@/sections/experiences/Hero";

export const metadata: Metadata = {
    title: "Bagus Ari | Works",
    description: "Discover Bagus Ari's professional journey as a Software Engineer and UI/UX Designer. Explore my work experience, key roles, and impactful contributions to various projects and companies.",
};

export default function Works() {
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
