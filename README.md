# Links

- [Prettier/ESLINT with Astro Setup](https://cosmicthemes.com/blog/astro-eslint-prettier-setup/)
- [eslint-plugin-better-tailwindcss](https://github.com/schoero/eslint-plugin-better-tailwindcss)
- [Astro OG Image](https://github.com/bepyan/bepyan.me.v2/blob/main/src/content/post/en/note/astro-dynamic-og.mdx)
- [Really Good Astro/Tailwind Blog](https://github.com/penrodlol/christianpenrod/tree/main)

## Convex Scripts

```
"scripts": {
  "dev": "run-p -r dev:*",
  "predev": "convex dev --until-success",
  "dev:astro": "astro dev",
  "dev:convex": "convex dev",
  "build": "astro build",
  "preview": "astro preview",
  "check": "astro check",
  "vercel": "bunx vercel --prod --yes",
  "astro": "astro",
  "convex": "bunx convex dev"
}
```

## Env

```
 env: {
    schema: {
      AI_GATEWAY_API_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
      CONVEX_URL: envField.string({
        context: "server",
        access: "secret",
      }),
      THRIVECART_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
    },
    validateSecrets: true,
  },
```
