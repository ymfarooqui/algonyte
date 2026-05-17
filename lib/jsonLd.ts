/**
 * Safe JSON-LD serializer for inline <script type="application/ld+json"> blocks.
 *
 * `JSON.stringify` does NOT escape `<`, `>`, `&`, or U+2028/U+2029. If any
 * field in a schema object ever derives from user input (CMS, form, query
 * param), an attacker could break out of the <script> tag via `</script>`
 * or `<!--`. U+2028/U+2029 are valid in JSON strings but treated as line
 * terminators by older JS parsers, which is the same break-out hazard.
 * Escaping all five keeps the JSON parseable but neutralizes the
 * sandbox-escape bytes.
 *
 * Inputs today are all hardcoded — this is defense in depth.
 */
const ESCAPES: Record<string, string> = {
  "<": "\\u003c",
  ">": "\\u003e",
  "&": "\\u0026",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029",
};

export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(
    /[<>&\u2028\u2029]/g,
    (c) => ESCAPES[c],
  );
}
