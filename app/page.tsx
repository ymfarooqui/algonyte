import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import ProblemHook from "@/components/sections/ProblemHook";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";
import PricingPreview from "@/components/sections/PricingPreview";
import WhyNot from "@/components/sections/WhyNot";
import AboutSnippet from "@/components/sections/AboutSnippet";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProblemHook />
      <HowItWorks />
      <SocialProof />
      <PricingPreview />
      <WhyNot />
      <AboutSnippet />
    </>
  );
}
