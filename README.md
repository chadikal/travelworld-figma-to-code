# TravelWorld

TravelWorld is an independent KAIROS portfolio project that translates a Figma Community travel website into a responsive frontend. The Home page includes the original travel mosaics, services, experience section, reviews, and newsletter design.

## Design and credit

The supplied Figma screens credit **Vipin_uidesigns** in their footer. TravelWorld's original design and artwork are credited to their respective creators. This repository contains the frontend implementation and original source exports used by the project. [TravelWorld design in Figma](https://www.figma.com/design/GooQtKj4gnDni5dOonUro5/TravelWorld---Travel-Planning---Booking-Website--Community-?node-id=0-1)

Figma documents CC BY 4.0 for free Community files. The original Community listing and any separate terms for its photography and illustrations still need to be confirmed. Montserrat, Island Moments, and Jost are self-hosted using Fontsource distributions. The static export includes their SIL Open Font License notices. [Figma Community copyright and licensing](https://help.figma.com/hc/en-us/articles/360042296374-Figma-Community-copyright-and-licensing) · [Font notices](public/assets/fonts/)

## Development

The stack uses Next.js App Router, React, strict TypeScript, Tailwind CSS, and ESLint. Use Node.js 22.13 or newer.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

The dev server listens on [localhost:3000](http://localhost:3000) by default. The production build exports the static site to `out/`. For static hosting, use `npm run build` with `out` as the publish directory. Images are served from the static export with Next.js runtime optimization disabled. [Next.js static export guide](https://nextjs.org/docs/app/guides/static-exports)

## Implementation scope

The Figma source includes Home, Tours, About, Login, and Register. Home and Tours are implemented at `/` and `/tours/`. They use the 1120 px desktop content width, fluid gutters, a compact navigation menu, and reflowed mosaics and forms on smaller screens. About, Login, and Register remain in the implementation plan.

Home and Tours search filter sample tour data by destination, distance, and group size. The Tours page shows ten destinations from Figma and reveals three extra demo entries through Load More. Home reviews support manual selection and pausable rotation. The newsletter form validates email locally and displays demo feedback. Account creation, bookings, payments, and newsletter delivery are outside the demo.

See [the Figma audit](docs/FIGMA_IMPLEMENTATION.md) for screen dimensions, open design questions, and the asset inventory.
