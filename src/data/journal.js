// PLACEHOLDER: article titles, dates, and body copy are illustrative.
export const articles = [
  {
    slug: "designing-for-biscayne-light",
    title: "Designing for Biscayne Light",
    date: "2026-05-14",
    category: "Design Notes",
    excerpt:
      "Why every MERIDIAN floor plan starts with a sun study, not a room count -- and what that changes about how a house is laid out.",
    image: {
      src: "/images/residence-cove-house.avif",
      alt: "The Grove House exterior beneath a banyan canopy, the subject of this piece on sun-oriented design",
    },
    body: [
      "Most residential floor plans start with a program: how many bedrooms, how many bathrooms, how much garage. Ours start with a sun study.",
      "Biscayne Bay throws a particular kind of light -- flat and silver in the morning, gold and low by five o'clock. A house that ignores this ends up fighting its own windows with blackout shades. A house that's designed around it barely needs curtains at all.",
      "On The Grove House, this meant orienting the primary suite to catch the morning light through the courtyard's banyan canopy, while the main living spaces face west to make the most of the golden hour without direct glare. It's a small decision made early that shapes almost everything else about the plan.",
    ],
  },
  {
    slug: "the-case-for-fewer-residences",
    title: "The Case for Fewer Residences",
    date: "2026-03-02",
    category: "Company",
    excerpt:
      "MERIDIAN builds a fraction of what a developer our size typically would. Here's why that's the point, not a limitation.",
    image: {
      src: "/images/about/about-vision.avif",
      alt: "Modern residential tower with landscaped balconies overlooking Biscayne Bay",
    },
    body: [
      "It would be easy to build more. The demand is there, the sites are available, and scaling a residential brand usually means more units, faster.",
      "We've chosen the opposite path deliberately. Each residence gets a dedicated design phase measured in months, not weeks, and a construction team that isn't juggling four other projects at the same time.",
      "The tradeoff is obvious: fewer closings per year. What we get in exchange is a level of consistency and attention that doesn't survive at scale -- and a portfolio we're still proud to walk through a decade later.",
    ],
  },
  {
    slug: "a-week-in-coconut-grove",
    title: "A Week in Coconut Grove",
    date: "2026-01-19",
    category: "Neighborhood",
    excerpt:
      "A resident's-eye view of a typical week -- the market, the marina, the banyan-shaded streets -- for anyone considering the move.",
    image: {
      src: "/images/neighborhood-street.avif",
      alt: "Sunny coastal Miami streetscape at golden hour in Coconut Grove",
    },
    body: [
      "Monday starts at the farmers market on Grand Avenue, still small enough that the vendors know your order. By Wednesday you're at the marina, checking on the boat or just watching other people check on theirs.",
      "The Grove rewards walking more than driving. The seawall path connects most of what matters -- coffee, the park, dinner -- without ever needing the car.",
      "By Friday evening, the whole neighborhood seems to move outside: porches, docks, and the handful of restaurants that don't take reservations because they don't need to.",
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}
