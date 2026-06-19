import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Impact from '@/components/landing/Impact';
import Ecosystem from '@/components/landing/Ecosystem';
import Features from '@/components/landing/Features';
import Mutuelle from '@/components/landing/Mutuelle';
import { SOS, Rewards, LifeStages } from '@/components/landing/HealthServices';
import Professionals from '@/components/landing/Professionals';
import { ZeroCash, DataDashboard, Testimonials, Partners } from '@/components/landing/TrustSections';
import FAQ from '@/components/landing/FAQ';
import Footer, { CTABanner } from '@/components/landing/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Impact & Stats */}
      <Impact />

      {/* 3. Écosystème */}
      <Ecosystem />

      {/* 4. Fonctionnalités */}
      <Features />

      {/* 5. Mutuelle numérique */}
      <Mutuelle />

      {/* 6. Santé récompensée */}
      <Rewards />

      {/* 7. SOS Urgence */}
      <SOS />

      {/* 8. Étapes de la vie */}
      <LifeStages />

      {/* 9. Professionnels */}
      <Professionals />

      {/* 10. Zéro cash */}
      <ZeroCash />

      {/* 11. Data Dashboard */}
      <DataDashboard />

      {/* 12. Témoignages */}
      <Testimonials />

      {/* 13. Partenaires */}
      <Partners />

      {/* 14. FAQ */}
      <FAQ />

      {/* 15. CTA final */}
      <CTABanner />

      {/* 16. Footer */}
      <Footer />
    </>
  );
}
