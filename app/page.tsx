import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import AddOns from "@/components/AddOns";
import HowItWorks from "@/components/HowItWorks";
import Audience from "@/components/Audience";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <WhyUs />
      <Services />
      <AddOns />
      <HowItWorks />
      <Audience />
      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}
