import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import BeforeAfter from "@/components/BeforeAfter";
import Media from "@/components/Media";
import Geography from "@/components/Geography";
import Catalog from "@/components/Catalog";
import Comparison from "@/components/Comparison";
import HowWeWork from "@/components/HowWeWork";
import Wholesale from "@/components/Wholesale";
import Capacity from "@/components/Capacity";
import Quality from "@/components/Quality";
import AboutCompany from "@/components/AboutCompany";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <BeforeAfter />
        <Catalog />
        <Comparison />
        <HowWeWork />
        <Wholesale />
        <Capacity />
        <Media />
        <Quality />
        <AboutCompany />
        <Testimonials />
        <Geography />
        <CtaBand />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
