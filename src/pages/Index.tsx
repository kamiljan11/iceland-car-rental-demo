import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import USPSection from "@/components/USPSection";
import FleetSection from "@/components/FleetSection";
import PickupProcess from "@/components/PickupProcess";
import InsuranceCompare from "@/components/InsuranceCompare";
import AppShowcase from "@/components/AppShowcase";

import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import CookieConsent from "@/components/CookieConsent";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ReactNode } from "react";

const RevealSection = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RevealSection><TrustBadges /></RevealSection>
      <RevealSection><USPSection /></RevealSection>
      <RevealSection><FleetSection /></RevealSection>
      
      <RevealSection><PickupProcess /></RevealSection>
      <RevealSection><InsuranceCompare /></RevealSection>
      <RevealSection><AppShowcase /></RevealSection>
      <RevealSection><TeamSection /></RevealSection>
      <RevealSection><TestimonialsSection /></RevealSection>
      <RevealSection><FAQSection /></RevealSection>
      <RevealSection><CTASection /></RevealSection>
      <Footer />
      <FloatingContact />
      <CookieConsent />
    </div>
  );
};

export default Index;
