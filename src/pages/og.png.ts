// src/pages/og.png.ts
import { getFontDataTTF } from "@/lib/google-fonts";
import type { APIRoute } from "astro";
import { readFile } from "fs/promises";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";

export const GET: APIRoute = async () => {
  // PNG for transparency
  const image = (await readFile("./src/assets/og-background.png")).toString(
    "base64"
  );

  const config = {
    title: "Title",
    description: "Description",
  };

  const fontMono = await getFontDataTTF("--font-sans");

  const template = html`
    <div
      class="flex h-full w-full flex-col items-center bg-stone-200 justify-center"
    >
      <div
        class="absolute inset-0 flex h-full w-full opacity-10"
        style="background-image: url(data:image/png;base64,${image}); background-size: 100% 100%"
      />
      <div class="flex flex-col items-center -mt-12 justify-center">
        <div class="text-8xl text-stone-900 mb-4">${config.title}</div>
        <div class="text-7xl text-stone-800">${config.description}</div>
      </div>
    </div>
  ` as React.ReactNode;

  return satoriAstroOG({ template, width: 1200, height: 630 }).toResponse({
    satori: {
      fonts: [fontMono],
    },
  });
};
