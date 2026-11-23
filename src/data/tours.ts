export type CatalogTour = {
  name: string;
  region: string;
  file: string;
  capacity: number;
  distanceKm: number;
  size: "large" | "compact";
  imageFit?: "fill";
  captionSpacing?: "loose";
};

export const catalogTours: CatalogTour[] = [
  { name: "Dubai", region: "UAE", file: "0d2a3.webp", capacity: 16, distanceKm: 18, size: "large" },
  { name: "Bali", region: "INDONESIA", file: "ba844.webp", capacity: 8, distanceKm: 22, size: "large" },
  { name: "Sydney", region: "AUSTRALIA", file: "707ea.jpg", capacity: 18, distanceKm: 14, size: "compact" },
  { name: "Phetchabun", region: "INDONESIA", file: "4e06c.webp", capacity: 6, distanceKm: 34, size: "compact" },
  { name: "Wuxi", region: "CHINA", file: "a8ec3.webp", capacity: 10, distanceKm: 26, size: "compact" },
  { name: "Big Ben", region: "LONDON", file: "afe3c.webp", capacity: 12, distanceKm: 8, size: "large", captionSpacing: "loose" },
  { name: "Paris", region: "FRANCE", file: "c467e.jpg", capacity: 12, distanceKm: 10, size: "large" },
  { name: "Maatushi Island", region: "MALDIVES", file: "e0519.webp", capacity: 8, distanceKm: 11, size: "compact" },
  { name: "Phi Phi Island", region: "THAILAND", file: "63d00.webp", capacity: 14, distanceKm: 19, size: "compact" },
  { name: "El Nido", region: "PHILIPPINES", file: "c98d5.webp", capacity: 10, distanceKm: 16, size: "compact", imageFit: "fill" },
];

export const additionalTours: CatalogTour[] = [
  { name: "Sydney Harbour", region: "AUSTRALIA", file: "e9ccd.webp", capacity: 12, distanceKm: 9, size: "compact" },
  { name: "Paris at Night", region: "FRANCE", file: "70070.webp", capacity: 8, distanceKm: 13, size: "compact" },
  { name: "Bali Coast", region: "INDONESIA", file: "fdca4.webp", capacity: 10, distanceKm: 25, size: "compact" },
];
