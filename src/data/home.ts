export const featuredTours = [
  { name: "Big Ben", region: "LONDON", file: "0829b.webp", capacity: 12, distanceKm: 8, slot: "london" },
  { name: "Bali", region: "INDONESIA", file: "fdca4.webp", capacity: 8, distanceKm: 22, slot: "bali" },
  { name: "Sydney", region: "Australia", file: "e9ccd.webp", capacity: 18, distanceKm: 14, slot: "sydney" },
  { name: "Dubai", region: "UAE", file: "01efc.webp", capacity: 16, distanceKm: 18, slot: "dubai" },
  { name: "Paris", region: "FRANCE", file: "70070.webp", capacity: 12, distanceKm: 10, slot: "paris" },
  { name: "Wuxi", region: "CHINA", file: "1b8df.webp", capacity: 10, distanceKm: 26, slot: "wuxi" },
  { name: "Phetchabun", region: "THAILAND", file: "be019.webp", capacity: 6, distanceKm: 34, slot: "phetchabun" },
] as const;

export const galleryColumns = [
  [
    { file: "77f94.webp", alt: "Hiker overlooking an alpine lake", width: 267, height: 335 },
    { file: "4ae15.webp", alt: "Boats between limestone cliffs", width: 267, height: 218 },
  ],
  [
    { file: "8c219.jpg", alt: "Beach seen from above", width: 267, height: 267 },
    { file: "bd04c.webp", alt: "Overwater villas in a turquoise lagoon", width: 267, height: 267 },
  ],
  [
    { file: "6ef7d.webp", alt: "Sunlit park with a green bench", width: 267, height: 218 },
    { file: "fcc23.webp", alt: "Ornate brick towers against a blue sky", width: 267, height: 335 },
  ],
  [
    { file: "06b13.webp", alt: "Palm trees by tropical water", width: 279, height: 285 },
    { file: "3f655.jpg", alt: "Limestone islands from a boat", width: 279, height: 285 },
  ],
] as const;

export const reviewers = [
  {
    name: "John Deep",
    avatar: "11090.webp",
    quote: "Our guide knew when the old town would be quiet and where to stop for a good lunch. We saw the places we came for, had time to wander on our own, and never felt rushed from one stop to the next. It was a relaxed way to get to know the city.",
  },
  {
    name: "Ally Gomez",
    avatar: "d60b3.webp",
    quote: "Having a loose plan made our weekend much easier. We spent the morning by the coast, took a long lunch, and still made it back to the harbor for sunset. I especially liked having time between stops to explore the little streets on my own.",
  },
  {
    name: "Alex Bugg",
    avatar: "ab710.webp",
    quote: "We chose a small-group trip for our first visit. The walks were manageable, our guide shared stories along the way, and we always knew where to meet after a break. We came home with a list of small museums and cafés to revisit next time.",
  },
] as const;
