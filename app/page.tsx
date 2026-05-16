import Hero from "@/components/sections/Hero";
import FoundingStrip from "@/components/sections/FoundingStrip";
import StatsStrip from "@/components/sections/StatsStrip";
import IntegrationsStrip from "@/components/sections/IntegrationsStrip";
import ProblemHook from "@/components/sections/ProblemHook";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";
import ProductGrid from "@/components/sections/ProductGrid";
import PricingPreview from "@/components/sections/PricingPreview";
import WhyNot from "@/components/sections/WhyNot";
import AboutSnippet from "@/components/sections/AboutSnippet";

export default function Home() {
  return (
    <>
      <Hero />
      <FoundingStrip />
      <StatsStrip />
      <IntegrationsStrip />
      <ProblemHook />
      <HowItWorks />
      <SocialProof />
      <ProductGrid />
      <PricingPreview />
      <WhyNot />
      <AboutSnippet />
    </>
  );
}
