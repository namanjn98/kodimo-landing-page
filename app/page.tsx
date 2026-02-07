import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <SocialProof />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
