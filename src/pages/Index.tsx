// Main landing page with all sections
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PrayerTimesSection } from "@/components/PrayerTimesSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { EventsSection } from "@/components/EventsSection";
import { DonationSection } from "@/components/DonationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <PrayerTimesSection />
          <AboutSection />
          <ServicesSection />
          <EventsSection />
          <DonationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
