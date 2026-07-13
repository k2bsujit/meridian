// PLACEHOLDER: property names, locations, specs, and copy are illustrative.
// Images marked "photo" are temporary free stock photos (Unsplash License) --
// swap for commissioned/final photography. Slots marked "placeholder" render
// via <PlaceholderImage /> per CLAUDE.md §5.3 (no image-gen tool available
// this session for additional gallery angles).
export const residences = [
  {
    slug: "the-grove-house",
    name: "The Grove House",
    neighborhood: "Coconut Grove, Miami",
    status: "By Private Offering",
    blurb:
      "Four bedrooms arranged around a banyan-shaded courtyard, oriented to the afternoon light.",
    description: [
      "The Grove House sits back from the street behind a canopy of mature banyan, its concrete-and-glass massing arranged around a central courtyard rather than facing outward. The plan rewards a slower approach: a limestone breezeway, a reflecting pool, then the house itself.",
      "Interiors favor warm oak, honed stone, and a restrained material palette that lets the courtyard light do most of the work. The primary suite occupies its own wing, separated from the remaining three bedrooms by a covered walkway.",
    ],
    specs: { beds: 4, baths: "4.5", sqft: "5,200", lot: "0.4 acre" },
    heroImage: {
      type: "photo",
      src: "/images/residence-cove-house.avif",
      alt: "The Grove House exterior, modern concrete and glass architecture beneath a banyan canopy",
    },
    gallery: [
      { type: "placeholder", label: "Courtyard reflecting pool, dusk", ratio: "4/3" },
      { type: "placeholder", label: "Primary suite, oak and honed stone", ratio: "4/3" },
      { type: "placeholder", label: "Kitchen, book-matched stone island", ratio: "4/3" },
      { type: "placeholder", label: "Covered breezeway toward guest wing", ratio: "4/3" },
    ],
  },
  {
    slug: "bay-harbor-residence",
    name: "Bay Harbor Residence",
    neighborhood: "Bay Harbor Islands, Miami",
    status: "By Private Offering",
    blurb:
      "A single-story pavilion set at the water's edge, walled in glass on its bay-facing side.",
    description: [
      "A single-story pavilion set directly at the water's edge, Bay Harbor Residence trades vertical drama for horizontal calm. The bay-facing wall is glass from slab to soffit, sliding away completely to open the living space onto a covered terrace and dock beyond.",
      "Three bedrooms sit along a quieter, street-facing spine, buffered from the entertaining wing by a library and wine room finished in blackened steel and walnut.",
    ],
    specs: { beds: 3, baths: "3.5", sqft: "4,100", lot: "0.3 acre" },
    heroImage: {
      type: "photo",
      src: "/images/residence-ridgeline.avif",
      alt: "Bay Harbor Residence exterior, single-story glass pavilion at the water's edge",
    },
    gallery: [
      { type: "placeholder", label: "Terrace and private dock at sunset", ratio: "4/3" },
      { type: "placeholder", label: "Living room, full-height glass wall", ratio: "4/3" },
      { type: "placeholder", label: "Library and wine room, blackened steel", ratio: "4/3" },
      { type: "placeholder", label: "Primary bedroom, water views", ratio: "4/3" },
    ],
  },
  {
    slug: "sunset-harbour-row-no-4",
    name: "Sunset Harbour Row No. 4",
    neighborhood: "Sunset Harbour, Miami Beach",
    status: "By Private Offering",
    blurb: "One of six townhomes facing the marina, with a private roof terrace.",
    description: [
      "One of six townhomes facing the marina, Row No. 4 occupies the quietest corner of the block. Three levels connect by open stair, culminating in a roof terrace built for the sunset side of the evening rather than the sunrise side.",
      "The ground floor opens almost entirely to a private garden and plunge pool, while the upper two levels hold two bedrooms each — one arrangement suited equally to a full-time residence or a considered pied-à-terre.",
    ],
    specs: { beds: 4, baths: "4", sqft: "3,400", lot: "Townhome" },
    heroImage: {
      type: "photo",
      src: "/images/residence-harbor-row.avif",
      alt: "Sunset Harbour Row No. 4 exterior, modern townhome facing the marina",
    },
    gallery: [
      { type: "placeholder", label: "Roof terrace, marina sunset view", ratio: "4/3" },
      { type: "placeholder", label: "Ground floor garden and plunge pool", ratio: "4/3" },
      { type: "placeholder", label: "Open stair connecting three levels", ratio: "4/3" },
      { type: "placeholder", label: "Second bedroom, marina-facing", ratio: "4/3" },
    ],
  },
  {
    slug: "the-belle-meade-house",
    name: "The Belle Meade House",
    neighborhood: "Belle Meade, Miami",
    status: "By Private Offering",
    blurb:
      "A bayfront estate framed by a century-old banyan, its glass walls opening straight onto Biscayne Bay.",
    description: [
      "Set on a quiet, tree-lined street in Belle Meade, this estate takes full advantage of a rare direct-bay lot -- a heated infinity pool steps down toward the water, with the Miami skyline framed across the bay rather than crowding the view.",
      "The main volume is almost entirely glass on its water-facing side, opening onto a covered terrace built for evenings rather than afternoons. Five bedrooms are split across two wings, connected by a great room that reads as an extension of the pool deck as much as the house itself.",
    ],
    specs: { beds: 5, baths: "5.5", sqft: "6,100", lot: "0.5 acre" },
    heroImage: {
      type: "photo",
      src: "/images/hero-exterior.avif",
      alt: "The Belle Meade House exterior at dusk, infinity pool and banyan tree overlooking the Miami skyline across Biscayne Bay",
    },
    gallery: [
      { type: "placeholder", label: "Great room, full-height glass wall", ratio: "4/3" },
      { type: "placeholder", label: "Primary suite, bay views", ratio: "4/3" },
      { type: "placeholder", label: "Kitchen, book-matched stone island", ratio: "4/3" },
      { type: "placeholder", label: "Pool deck at dusk", ratio: "4/3" },
    ],
  },
];

export function getResidenceBySlug(slug) {
  return residences.find((r) => r.slug === slug);
}
