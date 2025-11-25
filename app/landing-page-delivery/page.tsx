"use client";

import "./styles/landing-page.css";
import dynamic from "next/dynamic";
import HeroSection from "./components/hero-section";
import "@fontsource/reddit-sans";
import "@fontsource/reddit-sans/600.css";
import "@fontsource/reddit-sans/700.css";

const FeaturesSection = dynamic(
  () => import("./components/features-section"),
  {
    loading: () => (
      <div className="py-20 text-center text-white">Loading features...</div>
    ),
    ssr: false,
  }
);
const TestimonialsSection = dynamic(
  () => import("./components/testimonials-section"),
  {
    loading: () => (
      <div className="py-20 text-center text-white">
        Loading testimonials...
      </div>
    ),
    ssr: false,
  }
);
const CTASection = dynamic(() => import("./components/cta-section"), {
  loading: () => (
    <div className="py-20 text-center text-white">Loading CTA...</div>
  ),
  ssr: false,
});
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white antialiased">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
