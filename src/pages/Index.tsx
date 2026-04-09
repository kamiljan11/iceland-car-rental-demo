import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import FleetSection from "@/components/FleetSection";
import InsuranceSection from "@/components/InsuranceSection";
import RoutesSection from "@/components/RoutesSection";
import SeasonalSection from "@/components/SeasonalSection";
import DrivingTips from "@/components/DrivingTips";
import PickupLocations from "@/components/PickupLocations";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <StatsBar />
      <HowItWorks />
      <FleetSection />
      <InsuranceSection />
      <RoutesSection />
      <SeasonalSection />
      <DrivingTips />
      <PickupLocations />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
