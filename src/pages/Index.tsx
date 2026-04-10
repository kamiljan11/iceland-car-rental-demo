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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <USPSection />
      <FleetSection />
      <PickupProcess />
      <InsuranceCompare />
      <AppShowcase />
      
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingContact />
      <CookieConsent />
    </div>
  );
};

export default Index;
