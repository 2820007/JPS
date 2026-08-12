import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JobsSection from "@/components/Job_Section";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FeatureJob from '@/components/FeatureJob';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <FeatureJob/>
      <JobsSection />
      <Testimonials />
      <Footer/>
    </main>
  );
}