import AboutUs from "@/components/modules/landing/AboutUs";
import FAQ from "@/components/modules/landing/FAQ";
import Features from "@/components/modules/landing/Features";
import Hero from "@/components/modules/landing/Hero";
import HowItWorks from "@/components/modules/landing/HowItWorks";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "ProjectDesk",
    },
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <AboutUs />
            <HowItWorks />
            <Features />
            <FAQ />
        </>
    );
}
