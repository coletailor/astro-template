# Links

- [Prettier/ESLINT with Astro Setup](https://cosmicthemes.com/blog/astro-eslint-prettier-setup/)
- [eslint-plugin-better-tailwindcss](https://github.com/schoero/eslint-plugin-better-tailwindcss)

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
