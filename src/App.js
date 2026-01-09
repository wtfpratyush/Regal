import React from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PropertiesSection } from "@/components/sections/PropertiesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <PropertiesSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
