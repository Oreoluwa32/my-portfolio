# Oreoluwa Adewale — Portfolio

Full-stack portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Stack

- Next.js 14 + React 18
- TypeScript (strict)
- Tailwind CSS
- Edge-friendly contact API route (`app/api/contact/route.ts`)
- Deploys to Netlify (`@netlify/plugin-nextjs`) or Vercel out of the box

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build && npm start
```

## Customize

- **Profile, skills, projects, experience** live in [`lib/data.ts`](lib/data.ts).
- **Photo** at `public/me.jpeg`. Swap it freely.
- **Theme** colors in `tailwind.config.ts`.

## Contact form

`POST /api/contact` validates input and currently logs the payload server-side.
To actually deliver mail, plug in a provider in `app/api/contact/route.ts`
(e.g. Resend, SendGrid, AWS SES) and set the API key in your environment.

## Deploy on Netlify

The repo includes `netlify.toml`. Connect the repo, set Node to 18+, and Netlify
will install `@netlify/plugin-nextjs` automatically.

## Legacy site

The original static site lives under `legacy-site/` for reference.
