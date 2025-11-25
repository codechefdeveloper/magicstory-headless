import { Metadata } from 'next';
import './styles/landing-page.css';
import HeroSection from './components/hero-section';
import FeaturesSection from './components/features-section';
import TestimonialsSection from './components/testimonials-section';
import CTASection from './components/cta-section';


export const metadata: Metadata = {
  title: 'Your Landing Page Title | Magic Story',
  description: 'Your compelling meta description here',
  openGraph: {
    title: 'Your Landing Page Title',
    description: 'Your compelling meta description here',
    images: ['/assets/og-image.png'],
  },
};

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
