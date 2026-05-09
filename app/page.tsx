import Hero from "@/components/sections/Hero";
import ProblemHook from "@/components/sections/ProblemHook";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import SocialProof from "@/components/sections/SocialProof";
import ServicesOverview from "@/components/sections/ServicesOverview";
import PricingPreview from "@/components/sections/PricingPreview";
import AboutSnippet from "@/components/sections/AboutSnippet";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemHook />
      <HowItWorks />
      <Features />
      <SocialProof />
      <ServicesOverview />
      <PricingPreview />
      <AboutSnippet />
      <FinalCTA />
    </>
  );
}
