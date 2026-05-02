import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhyUsPreview from "@/components/WhyUsPreview";
import AudienceStrip from "@/components/AudienceStrip";
import ServicesTeaser from "@/components/ServicesTeaser";
import FirstClientsBand from "@/components/FirstClientsBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <WhyUsPreview />
      <AudienceStrip />
      <ServicesTeaser />
      <FirstClientsBand />
    </>
  );
}
