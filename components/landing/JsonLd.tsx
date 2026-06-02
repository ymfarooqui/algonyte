import { jsonLdString } from "@/lib/jsonLd";

/** Inline JSON-LD <script>, escaped against tag-breakout. See lib/jsonLd.ts. */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(data) }}
    />
  );
}
