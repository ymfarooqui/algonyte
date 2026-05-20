import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import FoundingStrip from "@/components/sections/FoundingStrip";
import StatsStrip from "@/components/sections/StatsStrip";
import IntegrationsStrip from "@/components/sections/IntegrationsStrip";

const ProblemHook = dynamic(() => import("@/components/sections/ProblemHook"));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"));
const SocialProof = dynamic(() => import("@/components/sections/SocialProof"));
const ProductGrid = dynamic(() => import("@/components/sections/ProductGrid"));
const WhyNot = dynamic(() => import("@/components/sections/WhyNot"));
const AboutSnippet = dynamic(() => import("@/components/sections/AboutSnippet"));

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
      <WhyNot />
      <AboutSnippet />
    </>
  );
}
