import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Benefits from "@/components/Benefits";
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

export default function ZavodPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Закупайте автохимию напрямую у завода в Казахстане с выгодой до 30%"
          highlight=""
          subtitle="Европейское качество без переплат за импорт, логистику и таможню. Цены на 30% ниже зарубежных аналогов"
        />
        <Intro />
        <Benefits />
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
