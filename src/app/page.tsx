import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Page() {
  return (
    <>
      <Hero />
      <Location />
      <Services />
      <Testimonials />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
