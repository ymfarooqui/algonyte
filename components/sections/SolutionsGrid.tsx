import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

type Props = {
  eyebrow?: string;
  heading?: string;
  subhead?: string;
  className?: string;
};

export default function SolutionsGrid({
  eyebrow = "What we do",
  heading = "Pick the services you need. Stack the ones you don't.",
  subhead = "Each one is a done-for-you install that runs while you sleep. Start with one, add more whenever you're ready — no packages, no lock-in.",
  className = "bg-white",
}: Props) {
  return (
    <section className={`section ${className}`}>
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="h-section">{heading}</h2>
          {subhead && <p className="lede mt-5">{subhead}</p>}
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-stretch">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
