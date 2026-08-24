import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CategoriesOverview } from './components/CategoriesOverview';
import { ProductCatalogue } from './components/ProductCatalogue';
import { WhatsAppBanner } from './components/WhatsAppBanner';
import { ContactSection } from './components/ContactSection';
import { MaduraiMap } from './components/MaduraiMap';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2D332D] flex flex-col font-sans selection:bg-[#40916C]/20 selection:text-[#1B4332]">
      {/* 1. STICKY HEADER */}
      <Header />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <Hero />

        {/* 3. ABOUT US */}
        <AboutUs />

        {/* 4. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 5. CATEGORIES OVERVIEW */}
        <CategoriesOverview />

        {/* 6. PRODUCT SEARCH, FILTER & CATALOGUE */}
        <ProductCatalogue />

        {/* 7. WHATSAPP ENQUIRY BANNER */}
        <WhatsAppBanner />

        {/* 8. CONTACT SECTION */}
        <ContactSection />

        {/* 9. MADURAI MAP */}
        <MaduraiMap />
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* 11. FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />
    </div>
  );
}
