/**
 * Kiggundu Art Studio — all site content, hardcoded.
 *
 * Primary source: the live site kiggunduartstudio.wordpress.com (read 10 Nov 2026).
 * Supplementary details (opening hours, founder bio, programme/service
 * descriptions, press items) come from the studio's own WordPress theme,
 * used only where the live site is silent — never to replace live content.
 *
 * Images: ONLY files downloaded from the live site, in /public/images/
 * (20 files: 12 first set + 8 added 10 Nov 2026). Three live images could
 * not be downloaded (their URLs return a WordPress.com error page) and are
 * not used anywhere: the "Benefits of Experiential Learning" featured image,
 * "pxl_20250405" and the "suicide flowers" image. The two "Benefits" and
 * "Changing the Narrative" articles therefore show real studio photos
 * (learning session / artists together) instead of their missing featured
 * images — the captions say so honestly.
 * Note: epeyonon-exhibition-1.jpg and epeyonon-exhibition-2.jpg are the
 * same photo (identical files on the live site); each is used once, on a
 * different page.
 *
 * Design: white background (ivory/cream = #ffffff since 10 Nov 2026).
 */

export const SITE = {
  name: "Kiggundu Art Studio",
  tagline: "Empowering Creativity: Nurturing Artistic Expression, Talent and Art Therapy.",
  description:
    "A non-profit founded in 2021. We discover, support and champion emerging artists — and empower communities through creativity.",
  location: "Ndejje Kanyanya, Wakiso — minutes from Kampala, Uganda",
  shortLocation: "Kiggundu Art Studio, Kampala, Uganda",
  phone: "+256 703 652 348",
  phoneHref: "tel:+256703652348",
  email: "kiggunduartstudio@gmail.com",
  hours: [
    { days: "Monday – Friday", time: "9am – 5pm" },
    { days: "Saturday", time: "10am – 2pm" },
    { days: "Sunday", time: "Closed" },
  ],
  instagramHandle: "@kiggunduartstudio",
  donateUrl: "https://kiggunduartstudio.org/donate/",
  wordpressUrl: "https://kiggunduartstudio.wordpress.com/",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/press" },
] as const;

export const STATS = [
  { value: "2021", label: "Founded in Ndejje Kanyanya, Wakiso" },
  { value: "30+", label: "Artists & students supported" },
  { value: "4", label: "Countries of murals" },
  { value: "11", label: "Resident artists, 2026 Residency & Wellness Program" },
] as const;

/* ---------------------------------- Home ---------------------------------- */

export const OUR_STUDIO = {
  kicker: "Our Studio",
  title: "A creative hub for emerging artists",
  text: "A safe place for emerging artists to pour heart and ideas into the work — free from the business of being an artist.",
  image: "/images/open-studio-151.jpg",
  imageAlt: "Artists at work inside Kiggundu Art Studio",
} as const;

export const OUR_STORY = {
  kicker: "Our Story",
  title: "Founded in 2021, built on purpose",
  paragraphs: [
    "Haggai Kiggundu and Doria Kimuli founded the studio in 2021. Since then, 8 artists have had their chance here — the goal is unchanged: help young artists redefine what it means to be an artist in Uganda.",
    "We help artists find purpose and get ready for success — to tell their story, define their path, shape Uganda's art future.",
  ],
  image: "/images/metamorphosis-talk-94.jpg",
  imageAlt: "Artists in conversation during a Metamorphosis artist talk",
} as const;

export const MEET_ARTISTS_INTRO =
  "We support emerging Ugandan artists with a year-long apprentice program, skill-based grants and commissions, exhibitions and events, and a professional network.";

export type Artist = {
  name: string;
  role: string;
  slug?: string;
  image?: string;
  imageAlt?: string;
  blurb: string;
};

export const CURRENT_ARTISTS: Artist[] = [
  {
    name: "Iyara Karabo",
    role: "Current Artist in Metamorphosis",
    slug: "iyara-karabo",
    image: "/images/iyara-9123.jpg",
    imageAlt: "Portrait of Iyara Karabo at Kiggundu Art Studio",
    blurb: "Artist in the year-long Metamorphosis apprentice program.",
  },
  {
    name: "Ayero Daisy",
    role: "Current Artist in Metamorphosis",
    slug: "ayero-daisy",
    image: "/images/ayero-8732.jpg",
    imageAlt: "Portrait of Ayero Daisy at Kiggundu Art Studio",
    blurb: "Artist in the year-long Metamorphosis apprentice program.",
  },
  {
    name: "Babisha Pevia",
    role: "Current Artist in Metamorphosis",
    blurb: "Artist in the year-long Metamorphosis apprentice program.",
  },
  {
    name: "Kapule Albert",
    role: "Current Artist in Metamorphosis",
    blurb: "Artist in the year-long Metamorphosis apprentice program.",
  },
];

export const PREVIOUS_ARTISTS: Artist[] = [
  {
    name: "Edwin Ntare",
    role: "Metamorphosis artist",
    blurb: "First solo show at the studio: Chronicles of Existence (2026).",
  },
  {
    name: "Noely Muwa Noely",
    role: "Metamorphosis artist",
    blurb: "Previous artist at Kiggundu Art Studio.",
  },
  {
    name: "Kabeya Ilunga",
    role: "Metamorphosis artist, 2024–2025",
    blurb: "Congolese painter in Kampala; Marketing and Communication Lead, first edition.",
  },
  {
    name: "Ruberanziza Oswald",
    role: "Metamorphosis artist",
    blurb: "Featured in The Apprentice Diary 2024.",
  },
];

export const COLLABORATORS = [
  "Makerere",
  "KEEPERS XR",
  "Arts in Medicine Fellowship",
  "Reminac Comics",
] as const;

export const GALLERY_IMAGES = [
  {
    src: "/images/metamorphosis-talk-121.jpg",
    alt: "Artist talk at the studio, portrait orientation",
    caption: "Metamorphosis artist talk",
    wide: false,
  },
  {
    src: "/images/ayero-artwork.jpg",
    alt: "Artwork by Ayero Daisy",
    caption: "Work by Ayero Daisy",
    wide: false,
  },
  {
    src: "/images/chronicles-3673.jpg",
    alt: "Chronicles of Existence exhibition at the studio",
    caption: "Chronicles of Existence",
    wide: true,
  },
  {
    src: "/images/iyara-whatsapp.jpg",
    alt: "Iyara Karabo at the studio",
    caption: "Iyara Karabo",
    wide: false,
  },
  {
    src: "/images/metamorphosis-talk-72.jpg",
    alt: "Visitors looking at a framed portrait during an artist talk",
    caption: "Visitors at the artist talk",
    wide: false,
  },
  {
    src: "/images/open-studio-7th-106.jpg",
    alt: "Four artists posing together at the open studio",
    caption: "Artists at the open studio",
    wide: false,
  },
  {
    src: "/images/pxl-135025-mp.jpg",
    alt: "Artists sharing food and conversation around a table",
    caption: "Sharing a meal at the studio",
    wide: false,
  },
  {
    src: "/images/metamorphosis-talk-94b.jpg",
    alt: "Artists seated before a portrait and a denim textile on the wall",
    caption: "Artist talk, works on the wall",
    wide: true,
  },
  {
    src: "/images/ayero-8734.jpg",
    alt: "Ayero Daisy at Kiggundu Art Studio",
    caption: "Ayero Daisy",
    wide: false,
  },
  {
    src: "/images/img-7494.jpg",
    alt: "Two artists working together on a red board",
    caption: "Artists at work",
    wide: false,
  },
  {
    src: "/images/pxl-121855-mp.jpg",
    alt: "Artists in discussion around a table with a laptop and notebooks",
    caption: "Learning together",
    wide: true,
  },
  {
    src: "/images/epeyonon-exhibition-1.jpg",
    alt: "Visitors looking at large works at the Epeyonon exhibition",
    caption: "Epeyonon exhibition opening",
    wide: true,
  },
] as const;

export const EXHIBITION = {
  title: "Chronicles of Existence",
  artist: "Edwin Ntare",
  kind: "Solo show",
  dates: "20 June 2026, 2:00pm – 25 July 2026, 6:00pm",
  venue: "Kiggundu Art Studio, Kampala, Uganda",
  description:
    "Edwin Ntare's debut solo show: new works exploring what existence means to him, through denim, leather and cotton — materials he has spent years working with.",
  poster: "/images/chronicles-poster.jpg",
  posterAlt: "Poster for Chronicles of Existence, a solo show by Edwin Ntare",
  image: "/images/chronicles-3673.jpg",
  imageAlt: "Chronicles of Existence exhibition at the studio",
  rsvpUrl:
    "https://ndweyk.wixsite.com/event-details-registration/chronicles-of-existence/form",
} as const;

export const PROGRAMS = [
  {
    name: "Apprenticeship",
    tagline: "One year from raw talent to practice",
    description:
      "A year from raw talent to working practice — grants, commissions, exhibitions, a network.",
    image: "/images/metamorphosis-talk-72.jpg",
    imageAlt: "Visitors at a Metamorphosis artist talk",
  },
  {
    name: "Workshops",
    tagline: "Art for children, schools, neighbours",
    description:
      "Hands-on workshops for children, schools and neighbours — art as a shared, everyday language.",
    image: "/images/pxl-121855-mp.jpg",
    imageAlt: "Artists learning together around a table",
  },
  {
    name: "Murals",
    tagline: "Walls painted with the community",
    description:
      "Large murals painted with the community — our public face, in four countries so far.",
    image: "/images/metamorphosis-talk-94b.jpg",
    imageAlt: "Artists seated before mural works on the wall",
  },
  {
    name: "FireSideChArts Africa",
    tagline: "Stories and conversation around the fire",
    description:
      "Stories and conversation around the fire — artists, elders and neighbours, art, memory and community.",
    image: "/images/pxl-135025-mp.jpg",
    imageAlt: "Artists sharing food and conversation around a table",
  },
] as const;

export const SERVICES = [
  {
    name: "Murals on commission",
    description: "For schools, institutions, businesses.",
    detail:
      "A wall, a story, a community — designed and painted on commission, from first sketch to finished wall.",
    image: "/images/metamorphosis-talk-94b.jpg",
    imageAlt: "Mural works on the studio wall",
  },
  {
    name: "Art workshops",
    description: "For children, schools and groups.",
    detail:
      "Practical, joyful workshops led by studio artists — classrooms, youth groups, community gatherings.",
    image: "/images/pxl-121855-mp.jpg",
    imageAlt: "A workshop in progress at the studio",
  },
  {
    name: "Mentorship",
    description: "A year of practice and research.",
    detail:
      "Metamorphosis: a full year of mentorship, practice and research for emerging artists.",
    image: "/images/metamorphosis-talk-72.jpg",
    imageAlt: "An artist talk at the studio",
  },
  {
    name: "Guided tours",
    description: "The studio, the shows, the artists.",
    detail:
      "Walk the studio with an artist — the space, the show, its makers.",
    image: "/images/epeyonon-exhibition-1.jpg",
    imageAlt: "Visitors looking at works in the gallery",
  },
] as const;

/**
 * Fundraising: the live site states the $12,000 goal and what it covers,
 * but publishes no "raised so far" figure. We do NOT invent one.
 * CAMPAIGN_RAISED_USD stays null until the studio supplies the real total.
 */
export const CAMPAIGN = {
  goalUsd: 12000,
  raisedUsd: null as number | null,
  title: "Help us raise $12,000",
  intro:
    "Together, let's build a creative space that empowers artists and strengthens Ugandan culture.",
  purpose:
    "For our new 2026 Residency & Wellness Program: stipends for 11 resident artists, materials, wellness, and more.",
  ctaLabel: "View campaign",
  ctaUrl: "https://kiggunduartstudio.org/donate/",
  image: "/images/pxl-135025-mp.jpg",
  imageAlt: "Artists sharing a meal together at the studio",
} as const;

export const DONATION_USES = [
  { name: "Apprenticeship", detail: "A year of mentorship" },
  { name: "Workshops", detail: "Materials for children" },
  { name: "Community", detail: "Art & Memory Café" },
  { name: "Exhibitions", detail: "Metamorphosis" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "I met Rodney in Bagenda zone… I am proud to be a Kiggundu artist.",
    name: "Kasanvu",
    role: "Kiggundu artist",
  },
  {
    quote:
      "All I know is that art came to me when I was a young girl and I never stopped making art…",
    name: "Nakimuli Rebecca",
    role: "Kiggundu artist",
  },
] as const;

export type Post = {
  slug: string;
  title: string;
  date: string;
  author?: string;
  authorRole?: string;
  category: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  body: string[];
  originalUrl: string;
};

export const POSTS: Post[] = [
  {
    slug: "chronicles-of-existence",
    title: "Chronicles of Existence",
    date: "June 15, 2026",
    category: "Exhibition",
    excerpt:
      "Edwin Ntare's debut solo show — new works on what existence means, through denim, leather and cotton, materials he has spent years working with.",
    image: "/images/chronicles-poster.jpg",
    imageAlt: "Poster for Chronicles of Existence, a solo show by Edwin Ntare",
    body: [
      "Edwin Ntare's debut solo show — new works on what existence means, through denim, leather and cotton, materials he has spent years working with.",
      "Exhibition: 20 June 2026, 2:00pm – 25 July 2026, 6:00pm, Kiggundu Art Studio, Kampala, Uganda.",
    ],
    originalUrl:
      "https://kiggunduartstudio.wordpress.com/2026/06/15/chronicles-of-existence/",
  },
  {
    slug: "benefits-of-experiential-learning",
    title: "Benefits of Experiential Learning to Learners/Students",
    date: "September 11, 2025",
    author: "Kabeya Ilunga",
    category: "Learning",
    excerpt:
      "Today, rote memorization and passive learning are giving way to dynamic new approaches…",
    image: "/images/pxl-121855-mp.jpg",
    imageAlt: "Artists learning together at the studio",
    body: [
      "In today's rapidly evolving educational landscape, rote memorization and passive learning are being challenged by dynamic new approaches…",
      "Photo: artists learning together at the studio.",
    ],
    originalUrl:
      "https://kiggunduartstudio.wordpress.com/2025/09/11/benefits-of-experiential-learning-to-learners-students/",
  },
  {
    slug: "changing-the-narrative-surrounding-suicide",
    title: "Changing the Narrative surrounding suicide",
    date: "September 11, 2025",
    author: "Faith Agumya Jemima",
    authorRole: "Team Lead, Kwa Imani Community — Admin, Kiggundu Art Studio",
    category: "Community",
    excerpt:
      "As the month of September, also known as the Suicide Prevention Month, comes to a close, endeavour to ask yourself. What do you know about…",
    image: "/images/pxl-135025-mp.jpg",
    imageAlt: "Artists together at the studio",
    body: [
      "As the month of September, also known as the Suicide Prevention Month, comes to a close, endeavour to ask yourself. What do you know about…",
    ],
    originalUrl:
      "https://kiggunduartstudio.wordpress.com/2025/09/11/changing-the-narrative-surrounding-suicide/",
  },
];

export const VIDEO = {
  title: "The Apprentice Diary 2024 — Ruberanziza Oswald",
  channel: "Kiggundu Art Studio",
  youtubeId: "D9Cxwv3qC7c",
  url: "https://www.youtube.com/watch?v=D9Cxwv3qC7c",
} as const;

export const INTERVIEWS = {
  title: "About the Apprentices Interviews",
  paragraphs: [
    "Testimonial videos from our apprentices: how the program shaped their skills, inspired their creativity, and supported their growth.",
    "The journey, told by those who live it — their challenges, discoveries and dreams, and how the studio nurtures talent and vision.",
  ],
  platforms: ["Podcast", "YouTube", "Apple Podcasts", "Instagram", "Facebook"],
} as const;

export const SUBSCRIBE = {
  title: "Subscribe for updates",
  text: "Join the mailing list — news on Events and blog posts. No spam, guaranteed.",
} as const;

export const FOUNDER = {
  name: "Kiggundu Rodney Erismas",
  role: "Founder",
  bio: "Visual artist, muralist and social entrepreneur. Makerere graduate — patterned, vivid painting on identity, mental health and social justice.",
  points: [
    "Senior Atlantic Fellow, Global Brain Health Institute (UCSF)",
    "Founder of FireSideChArts Africa",
    "Co-founder of Streetlights Uganda",
  ],
  caption: "Mural painting is at the heart of the studio.",
  image: "/images/metamorphosis-talk-121.jpg",
  imageAlt: "Kiggundu Rodney Erismas at the studio",
} as const;

export const ABOUT_IMAGE = {
  src: "/images/open-studio-7th-106.jpg",
  alt: "Four artists posing together at the open studio",
  caption: "Artists at the open studio",
} as const;

export const PRESS_IMAGE = {
  src: "/images/epeyonon-exhibition-2.jpg",
  alt: "Visitors looking at large works at an exhibition opening",
  caption: "Visitors at an exhibition opening",
} as const;

export const PRESS_ITEMS = [
  {
    title: "Mindscapes — Gallery 190, UCSF",
    place: "San Francisco · July 2025",
    description: "The founder's first US solo show.",
  },
  {
    title: "Global South Arts & Health Week",
    place: "Art & health",
    description: "Rodney leads the Uganda pavilion.",
  },
] as const;

export type StudioEvent = {
  title: string;
  artist: string;
  kind: string;
  dates: string;
  venue: string;
  description: string;
  image?: string;
  imageAlt?: string;
  link: string;
  linkLabel: string;
};

export const EVENTS: StudioEvent[] = [
  {
    title: "Chronicles of Existence",
    artist: "Edwin Ntare",
    kind: "Solo show",
    dates: "20 June 2026, 2:00pm – 25 July 2026, 6:00pm",
    venue: "Kiggundu Art Studio, Kampala, Uganda",
    description:
      "Debut solo show: what existence means, in denim, leather and cotton.",
    image: "/images/chronicles-poster.jpg",
    imageAlt: "Poster for Chronicles of Existence, a solo show by Edwin Ntare",
    link: "/blog/chronicles-of-existence",
    linkLabel: "Read about the show",
  },
  {
    title: "Studio Social, 2nd edition",
    artist: "Kiggundu Art Studio",
    kind: "Closing tour & artist talk",
    dates: "Sat 1 August 2026 · 2pm – 8pm",
    venue: "Kiggundu Art Studio, Kampala, Uganda",
    description:
      "Closing tour and artist talk for Chronicles of Existence — an open evening.",
    image: "/images/open-studio-7th-106.jpg",
    imageAlt: "Artists posing together at the open studio",
    link: "/blog/chronicles-of-existence",
    linkLabel: "About the exhibition",
  },
  {
    title: "The Art & Memory Café",
    artist: "Memory Mosaics Initiative",
    kind: "Regular gathering",
    dates: "Regular · Memory Mosaics",
    venue: "Kiggundu Art Studio, Kampala, Uganda",
    description:
      "Artists, elders and carers — around art, stories and brain health, together.",
    image: "/images/pxl-135025-mp.jpg",
    imageAlt: "Artists sharing food and conversation around a table",
    link: "/programs",
    linkLabel: "See our programs",
  },
] as const;
