import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import IntegrationsStrip from "@/components/sections/IntegrationsStrip";

const ProblemHook = dynamic(() => import("@/components/sections/ProblemHook"));
const RevenueCalculator = dynamic(() => import("@/components/RevenueCalculator"));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"));
const SocialProof = dynamic(() => import("@/components/sections/SocialProof"));
const SolutionsGrid = dynamic(() => import("@/components/sections/SolutionsGrid"));
const IndustriesAreas = dynamic(() => import("@/components/sections/IndustriesAreas"));
const AboutSnippet = dynamic(() => import("@/components/sections/AboutSnippet"));

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <IntegrationsStrip />
      <ProblemHook />
      <RevenueCalculator />
      <HowItWorks />
      <SocialProof />
      <SolutionsGrid />
      <IndustriesAreas />
      <AboutSnippet />
    </>
  );
}
