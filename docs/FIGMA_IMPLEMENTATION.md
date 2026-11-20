# Figma implementation notes

## Source audit

[The TravelWorld Figma file](https://www.figma.com/design/GooQtKj4gnDni5dOonUro5/TravelWorld---Travel-Planning---Booking-Website--Community-?node-id=0-1) contains three pages. `main` has five desktop frames. `assets` has 40 top-level component and text references, including variant sets. `color/font` has seven swatches and two type samples. The audit used live Figma layer metadata, design context and previews for all five screens, plus the supplied PNG exports in the parent workspace.

| Frame | Size (px) | Planned route | Sections |
| --- | --- | --- | --- |
| [main](https://www.figma.com/design/GooQtKj4gnDni5dOonUro5?node-id=1-2) | 1440 × 4239 | `/` | Header, hero and search, services, featured tours, experience, gallery, reviews, newsletter, footer |
| [tours](https://www.figma.com/design/GooQtKj4gnDni5dOonUro5?node-id=127-230) | 1440 × 3073 | `/tours/` | Header, banner, search, featured tours mosaic and Load More, newsletter, footer |
| [about](https://www.figma.com/design/GooQtKj4gnDni5dOonUro5?node-id=153-565) | 1440 × 2028 | `/about/` | Header, banner, introduction and mission, services, newsletter, footer |
| [login](https://www.figma.com/design/GooQtKj4gnDni5dOonUro5?node-id=58-709) | 1440 × 1035 | `/login/` | Auth header, split photo and login form, recovery link, social sign-in, footer |
| [register](https://www.figma.com/design/GooQtKj4gnDni5dOonUro5?node-id=92-182) | 1440 × 1035 | `/register/` | Auth header, split photo and registration form, terms copy, social sign-in, footer |

Gallery is a Home section. The five-frame inventory contains no dedicated gallery, password recovery, legal, or mobile screens.

## Shared layout and states

- Header height is 85 px. Major content starts at x=160 on the 1440 px canvas, leaving a 1120 px content area. Login and Register hide Home, About, and Tours in the header and highlight the active auth action.
- The 288 px footer has a logo/social column, Discover links, Quick Links, and Contact. Home, Tours, and About share a 364 px newsletter section.
- Tours and About use a 400 px banner. Home has a 643 px hero and a 251 px review component with four variants. Search measures 810 × 78 px and has five variants. The auth layout is 662 px high with 576 px and 544 px columns.
- Components include navigation and auth actions, destination/gallery tiles, reviews and pagination dots, newsletter input and subscribe action, social links, auth fields, hero play/pause and carousel controls, and Load More. Auth inputs are 51 px high with an 8 px radius. Header action pills are 42 px high with a 50 px radius.
- All five frames carry the same hidden stretch grid with 12 columns, 160 px side offsets, and 32 px gutters. Later responsive adaptations will collapse the header navigation, stack form and split sections, reflow mosaics and cards, and preserve legible text and touch targets. Check 375, 390, 768, 1024, 1440, and 1920 px.

## Design tokens and assets

| Token | Source |
| --- | --- |
| Primary / secondary | `#FF7E01` / `#FAA935` |
| Heading / body | `#0B2727` / `#6E7074` |
| Newsletter / search icon | `#CAE5F4` / `#EE6E6E` |
| Search elevation | `0 2px 10px rgb(0 0 0 / 15%)` |
| UI typography | Montserrat Regular 400, Medium 500, SemiBold 600 |
| Script typography | Island Moments Regular 400 |
| Footer credit typography | Jost Regular 400, Medium 500 |

Values are based on screen styles and actual screen fills. The separate `color/font` page repeats `#FAA935` on three differently named swatches, including the swatches named primary and heading. The screen styles distinguish those colors. Poppins appears on some auth text layers, whose visible text runs use Montserrat. The screen context uses additional neutral colors and radii from 5 to 50 px. Several full-width sections are 1441 px within 1440 px frames. Fit these sections to the page width when implementing them to prevent horizontal overflow.

The 72 original screen and search-variant exports are organized under `public/assets/images/` and `public/assets/icons/`. They include hero, tour and gallery photos, both logo variants, banners, review avatars, illustrations, decorative vectors, and icons. Sixteen exports labeled PNG by Figma contain JPEG data and use a `.jpg` extension in the repository. [Asset inventory](FIGMA_ASSETS.md)

The supplied frame screenshots and component sheets remain in the parent workspace's `figma-design/` folder. They are visual references. The repository ships individual assets so each screen can be implemented with semantic HTML. Montserrat and Island Moments bundle through Fontsource. The two Jost WOFF2 files come from Fontsource 5.3.0 and are served locally alongside their OFL notice.

## Interaction and verification scope

The prototype starts on Home and wires frame navigation, scroll-to actions, hover variants, timed review rotation, direct selection through review dots, auth field states, and a media playback action. Gallery scrolls to the Home gallery section in the Home prototype. Cross-page Gallery links point to Home.

Search and Load More are planned as local-data interactions. Login and Register will demonstrate validation and password visibility. Newsletter and authentication-related actions need clear demo feedback. The Home hero's middle tile uses a Figma video fill (node `2:92`). The design-context export provided a control icon but no video or poster. Obtain the original clip and a poster for that tile before implementing playback.

Phase 1 reviewed the original frame renders and created the project shell. ESLint, strict TypeScript checking, and the production build passed. The dev server returned HTTP 200 for the foundation route. The static export contains the root HTML, local assets, and bundled fonts. Browser-to-Figma comparisons start with the Home implementation.

## Phase 2 · Home

Home implements the shared header and footer, hero, search, services, featured tours, experience, gallery, reviews, and newsletter. Desktop uses the original assets, crop proportions, mosaics, and 1120 px content width. Tablet stacks the hero and condenses navigation. Mobile reflows the tour and gallery mosaics into two columns, stacks the experience and newsletter, and shows one review at a time.

- The central hero tile retains its layout and displays an unavailable state while the original video and poster are missing.
- Search filters the featured tours on Home using sample distances and group capacities. Its labels correct the source's Location spelling and kilometer notation. Reviews glide left in a continuous loop. The four dots jump to the three reviews and back to the first, following the prototype. The strip pauses on hover or through its Pause button. Reduced-motion users start with playback paused. Newsletter submission validates locally and confirms demo behavior.
- Home and Gallery navigation work as in-page links. About, Tours, Login, and Register remain visible as disabled items until their routes are implemented. The source social icons appear in the footer. Their destination URLs were unspecified.

Chromium screenshots of the production export were captured at 375, 390, 768, 1024, 1440, and 1920 px. At 1440 px, a side-by-side review against the original Home export confirmed the 4239 px page height and matching section boundaries. The comparison led to adjustments in the experience text, footer contact alignment, and section spacing. The mobile check also caught and corrected headline spacing and search field clipping.

All six widths loaded without horizontal overflow, failed requests, or browser console warnings. Browser checks covered mobile navigation and gallery links, search results and empty states, keyboard focus, carousel selection and rotation, and required and invalid newsletter emails. Lint, strict TypeScript, and the static production build passed.
