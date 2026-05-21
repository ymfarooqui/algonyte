import type { Metadata } from "next";
import RevealLab from "./RevealLab";

export const metadata: Metadata = {
  title: "Reveal flicker test",
  robots: { index: false, follow: false },
};

export default function FlickerTestPage() {
  return (
    <section className="section">
      <RevealLab />
    </section>
  );
}
