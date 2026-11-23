# Image performance audit

The 41 original raster files totalled **22,651,891 bytes**. The 118 optimized files total **9,321,453 bytes**, a **58.8% reduction** including every responsive variant. SVG icons are outside that count. A byte hash and a decoded-pixel comparison found no exact duplicates. The Dubai and Paris photos in the Home and Tours collections use similar images with distinct edits, so both exports are represented. Existing reuse of the lagoon photo, the shared auth photo and the extra tour photos uses the same file family.

| Original export | Original | Largest WebP | Smaller WebP |
| --- | ---: | ---: | ---: |
| `c98d5.png` El Nido | 1,819,876 B | 272,660 B | 52,162 B at 384 px |
| `63d00.png` Phi Phi Island | 1,068,280 B | 164,120 B | 28,798 B at 384 px |
| `0d2a3.png` Dubai | 1,022,643 B | 131,314 B | 27,232 B at 384 px |
| `ba844.png` Bali | 1,020,232 B | 148,186 B | 27,056 B at 384 px |
| `afe3c.png` Big Ben | 1,007,129 B | 98,098 B | 18,140 B at 384 px |
| `4a700.png` About banner | 886,382 B | 100,414 B | 31,012 B at 512 px |
| `57c61.png` Tours banner | 835,821 B | 74,460 B | 24,760 B at 512 px |
| `30c2a.png` Login and Register | 688,039 B | 53,480 B | 22,824 B at 384 px |

Photos use WebP at quality 88 with high-quality chroma subsampling and full alpha quality. Sydney, Paris, and two gallery photos retain their source JPEG as the largest candidate because the equivalent WebP took more bytes. Logos and larger illustrations use lossless WebP to preserve edges and transparency. The globe is a 96 px PNG shared by the Home label and favicon. The three small service PNGs and the SVG icons retain their original bytes. Variants preserve the source aspect ratio and are never upscaled during encoding. The [Figma asset inventory](FIGMA_ASSETS.md) records the original files and credits.

The old `Artwork` wrapper inherited async decoding and default lazy loading from Next Image. Explicit preloads loaded the logo and each route's primary photos. With static optimization disabled, each `img` used one source regardless of viewport or density. The new wrapper emits native `srcset` and `sizes` against the checked-in files. The first Home tile, page banners and auth photo receive high fetch priority. Other Home hero images are eager, while cards, gallery images and illustrations remain lazy. Photo-colored backgrounds paint while opaque images arrive. Existing container aspect ratios and explicit dimensions reserve the space, and the browser still decodes asynchronously.

Cloudflare's live El Nido URL returned **1,819,876 bytes** on a fresh GET. With its ETag supplied, it returned **304 with zero image bytes**. The response advertised `public, max-age=0, must-revalidate`. The Pages edge cache can serve these files, and browser revalidation may still cost a round trip. The checked-in derivatives are ordinary static files served with the existing export and cache configuration. [Cloudflare Pages serving and cache behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/)

## Browser measurements

Headless Chrome served both production exports locally with ETag revalidation. The cold runs started with a cleared browser cache, and the warm runs revisited the same route with its assets cached. The table counts the unique raster response bodies used by images in the initial viewport. It excludes fonts, SVGs, response headers and offscreen images the browser may fetch before scrolling. Across all 30 route and viewport combinations, payload savings ranged from **61% to 93%**. Warm-cache revisits revalidated the same initial images with HTTP 304 and zero raster body bytes.

| Route | 390 px before → after | 1440 px before → after |
| --- | ---: | ---: |
| Home | 1,483 → 261 kB | 1,495 → 256 kB |
| Tours | 2,986 → 225 kB | 2,928 → 232 kB |
| About | 1,447 → 322 kB | 1,447 → 307 kB |
| Login | 737 → 92 kB | 801 → 93 kB |
| Register | 737 → 92 kB | 801 → 93 kB |

The browser matrix covered 375, 390, 768, 1024, 1440 and 1920 px on all five routes. Chrome used 2× density through 768 px and 1× for the wider sizes. All 145 static image URLs resolved and their width descriptors matched the files. Scrolling found no broken images or horizontal overflow. The post-load page heights matched the baseline, and side-by-side screenshots at 390 and 1440 px showed the same framing and no visible quality loss. Navigation, the sticky header, Home and Tours search and reset, Load More, the demo forms and carousel controls passed.

With 1.6 Mbps download, 0.75 Mbps upload and 150 ms added latency, Chrome measured the following times from navigation start to the last initial-viewport raster response. Each cell is a single local observation in seconds.

| Route | 390 px cold before → after | 390 px warm before → after | 1440 px cold before → after | 1440 px warm before → after |
| --- | ---: | ---: | ---: | ---: |
| Home | 12.15 → 2.65 | 5.09 → 1.83 | 12.39 → 5.68 | 5.70 → 3.21 |
| Tours | 24.71 → 7.23 | 12.87 → 2.66 | 28.08 → 8.37 | 8.71 → 1.82 |
| About | 15.71 → 5.75 | 0.76 → 0.92 | 13.29 → 6.32 | 0.92 → 0.90 |
| Login | 8.16 → 1.51 | 0.41 → 0.76 | 8.50 → 2.50 | 0.78 → 1.09 |
| Register | 8.17 → 1.94 | 0.40 → 0.84 | 8.23 → 2.58 | 0.95 → 1.16 |

The 390 px Home LCP stayed near 0.8 s because its largest paint came before the main photos. Tours LCP fell from 16.74 s to 4.45 s in the slow cold-cache sample. Home’s first screen still shifts when its fonts arrive late, which also occurred in the baseline. CDN latency, device speed and browser lazy-load distance will vary. Cached image bodies can be reused, with revalidation and other page resources still affecting the time to render.

## Updating artwork

When updating artwork, use the original export and resize by width in sRGB with Sharp or equivalent tooling. Use `<id>-<width>.webp` for smaller candidates and `<id>.webp` for the largest unless the original is more efficient. Update the widths in `src/components/ui/artwork-variants.ts` and the consumer's `sizes` if its rendered size changes.
