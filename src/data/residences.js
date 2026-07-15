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
      { type: "photo", src: "/images/grove-house/courtyard-pool.avif", alt: "The Grove House courtyard reflecting pool at dusk", ratio: "4/3" },
      { type: "photo", src: "/images/grove-house/primary-suite.avif", alt: "The Grove House primary suite, oak and honed stone", ratio: "4/3" },
      { type: "photo", src: "/images/grove-house/kitchen-stone-island.avif", alt: "The Grove House kitchen, book-matched stone island", ratio: "4/3" },
      { type: "photo", src: "/images/grove-house/breezeway.avif", alt: "The Grove House covered breezeway toward the guest wing", ratio: "4/3" },
    ],
    // PLACEHOLDER: generic floor plan shared across all residences pending
    // client approval -- swap for a plan matching this property's actual
    // layout and square footage once approved.
    floorPlan: { src: "/images/grove-house/floor-plan.avif", alt: "The Grove House floor plan (illustrative, pending final plan)" },
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
      { type: "photo", src: "/images/bay-harbor/terrace-dock.avif", alt: "Bay Harbor Residence terrace and private dock at sunset", ratio: "4/3" },
      { type: "photo", src: "/images/bay-harbor/living-room.avif", alt: "Bay Harbor Residence living room, full-height glass wall", ratio: "4/3" },
      { type: "photo", src: "/images/bay-harbor/library-wine-room.avif", alt: "Bay Harbor Residence library and wine room, blackened steel", ratio: "4/3" },
      { type: "photo", src: "/images/bay-harbor/primary-bedroom.avif", alt: "Bay Harbor Residence primary bedroom with water views", ratio: "4/3" },
    ],
    // PLACEHOLDER: generic floor plan shared across all residences pending
    // client approval -- swap for a plan matching this property's actual
    // layout and square footage once approved.
    floorPlan: { src: "/images/bay-harbor/floor-plan.avif", alt: "Bay Harbor Residence floor plan (illustrative, pending final plan)" },
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
      { type: "photo", src: "/images/sunset-harbour/roof-terrace.avif", alt: "Sunset Harbour Row No. 4 roof terrace, marina sunset view", ratio: "4/3" },
      { type: "photo", src: "/images/sunset-harbour/garden-plunge-pool.avif", alt: "Sunset Harbour Row No. 4 ground floor garden and plunge pool", ratio: "4/3" },
      { type: "photo", src: "/images/sunset-harbour/open-stair.avif", alt: "Sunset Harbour Row No. 4 open stair connecting three levels", ratio: "4/3" },
      { type: "photo", src: "/images/sunset-harbour/second-bedroom.avif", alt: "Sunset Harbour Row No. 4 second bedroom, marina-facing", ratio: "4/3" },
    ],
    // PLACEHOLDER: generic floor plan shared across all residences pending
    // client approval -- swap for a plan matching this property's actual
    // layout and square footage once approved.
    floorPlan: { src: "/images/sunset-harbour/floor-plan.avif", alt: "Sunset Harbour Row No. 4 floor plan (illustrative, pending final plan)" },
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
      { type: "photo", src: "/images/belle-meade/great-room.avif", alt: "The Belle Meade House great room, full-height glass wall", ratio: "4/3" },
      { type: "photo", src: "/images/belle-meade/primary-suite.avif", alt: "The Belle Meade House primary suite with bay views", ratio: "4/3" },
      { type: "photo", src: "/images/belle-meade/kitchen.avif", alt: "The Belle Meade House kitchen, book-matched stone island", ratio: "4/3" },
      { type: "photo", src: "/images/belle-meade/pool-deck-dusk.avif", alt: "The Belle Meade House pool deck at dusk", ratio: "4/3" },
    ],
    // PLACEHOLDER: generic floor plan shared across all residences pending
    // client approval -- swap for a plan matching this property's actual
    // layout and square footage once approved.
    floorPlan: { src: "/images/belle-meade/floor-plan.avif", alt: "The Belle Meade House floor plan (illustrative, pending final plan)" },
  },
];

export function getResidenceBySlug(slug) {
  return residences.find((r) => r.slug === slug);
}
