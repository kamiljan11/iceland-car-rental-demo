import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import USPSection from "@/components/USPSection";
import FleetSection from "@/components/FleetSection";
import ItinerarySection from "@/components/RoutesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import NorthernLightsWave from "@/components/svg/NorthernLightsWave";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <NorthernLightsWave className="h-16 sm:h-24 -mb-1" />
      <USPSection />
      <FleetSection />
      <NorthernLightsWave className="h-16 sm:h-24 -mb-1 rotate-180" />
      <ItinerarySection />
      <TestimonialsSection />
      <NorthernLightsWave className="h-12 sm:h-16 -mb-1" />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
