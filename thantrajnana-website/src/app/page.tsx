import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Hero from "@/src/components/home/Hero";
import Courses from "@/src/components/home/Courses";
import Kits from "@/src/components/home/Kits";
import Platforms from "@/src/components/home/Platforms";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import CTA from "@/src/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Courses />
      <Kits />
      <Platforms />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  );
}
