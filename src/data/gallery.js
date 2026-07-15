// PLACEHOLDER: gallery images. Items marked "photo" reuse existing stock
// photography already licensed/supplied for this project; "placeholder"
// slots (no matching real photo available yet) render via
// <PlaceholderImage /> per CLAUDE.md §5.3.
export const galleryGroups = [
  {
    label: "Exteriors",
    items: [
      { type: "photo", src: "/images/hero-exterior.avif", alt: "Waterfront residence exterior at sunset, Biscayne Bay", ratio: "3/2" },
      { type: "photo", src: "/images/residence-cove-house.avif", alt: "The Grove House exterior beneath a banyan canopy", ratio: "4/5" },
      { type: "photo", src: "/images/residence-ridgeline.avif", alt: "Bay Harbor Residence, glass pavilion at the water's edge", ratio: "4/3" },
      { type: "photo", src: "/images/residence-harbor-row.avif", alt: "Sunset Harbour Row No. 4 exterior facing the marina", ratio: "4/5" },
    ],
  },
  {
    label: "Interiors",
    items: [
      { type: "photo", src: "/images/bay-harbor/living-room.avif", alt: "Bay Harbor Residence living room, full-height glass wall overlooking Biscayne Bay", ratio: "4/3" },
      { type: "photo", src: "/images/belle-meade/kitchen.avif", alt: "The Belle Meade House kitchen, book-matched stone island", ratio: "4/5" },
      { type: "photo", src: "/images/experience/wellness-studio.avif", alt: "Sunlit wellness studio with yoga mats, plants, and warm wood floors", ratio: "4/3" },
      { type: "photo", src: "/images/experience-lounge.avif", alt: "Resident lounge interior, warm minimal materials", ratio: "4/5" },
    ],
  },
  {
    label: "Lifestyle & Amenities",
    items: [
      { type: "photo", src: "/images/experience/rooftop-pool.avif", alt: "Rooftop infinity pool at dusk overlooking Biscayne Bay and the Miami skyline", ratio: "3/2" },
      { type: "photo", src: "/images/neighborhood-street.avif", alt: "Sunny coastal Miami streetscape at golden hour", ratio: "4/5" },
      { type: "photo", src: "/images/experience/private-dock.avif", alt: "Private dock at golden hour with a yacht moored and lounge seating overlooking the bay", ratio: "4/3" },
      { type: "photo", src: "/images/experience/hero-experience.avif", alt: "Rooftop pool lounge at dusk with the Miami skyline across the bay", ratio: "4/5" },
    ],
  },
];
