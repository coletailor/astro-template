// src/lib/google-fonts.ts
const fontCache = new Map<string, ArrayBuffer>();

type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type FontDataTTF = {
  name: string;
  weight: Weight;
  style: "normal" | "italic";
  data: ArrayBuffer;
};

export async function getGoogleFontTTF(
  family: string,
  weight: Weight = 400
): Promise<ArrayBuffer> {
  const cacheKey = `${family}-${weight}-ttf`;

  if (fontCache.has(cacheKey)) {
    return fontCache.get(cacheKey)!;
  }

  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`,
    {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.54.16",
      },
    }
  ).then((res) => res.text());

  const url = css.match(/url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error(`Font ${family}@${weight} not found`);

  const data = await fetch(url).then((res) => res.arrayBuffer());
  fontCache.set(cacheKey, data);

  return data;
}

// Optional: Mimic Astro's getFontData interface
export async function getFontDataTTF(cssVar: string): Promise<FontDataTTF> {
  const fonts: Record<string, { family: string; weight: Weight }> = {
    "--font-title": { family: "Newsreader", weight: 600 },
    "--font-sans": { family: "Figtree", weight: 700 },
    "--font-mono": { family: "IBM Plex Mono", weight: 500 },
  };

  const config = fonts[cssVar];
  if (!config) throw new Error(`Unknown font: ${cssVar}`);

  const data = await getGoogleFontTTF(config.family, config.weight);

  return {
    name: config.family,
    weight: config.weight,
    data,
    style: "normal",
  };
}
