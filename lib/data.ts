/**
 * Kiggundu Art Studio — all site content, hardcoded.
 *
 * Primary source: the live site kiggunduartstudio.wordpress.com (read 10 Nov 2026).
 * Supplementary details (opening hours, founder bio, programme/service
 * descriptions, press items) come from the studio's own WordPress theme,
 * used only where the live site is silent — never to replace live content.
 *
 * Images: ONLY files downloaded from the live site, in /public/images/.
 * Three live images could not be downloaded (their URLs return a
 * WordPress.com error page) and are not used anywhere:
 * the "Benefits of Experiential Learning" featured image,
 * "pxl_20250405" and the "suicide flowers" image.
 */

export const SITE = {
  name: "Kiggundu Art Studio",
  tagline: "Empowering Creativity: Nurturing Artistic Expression, Talent and Art Therapy.",
  description:
    "Kiggundu Art Studio is a non-profit organization founded in 2021 whose role is to support the development of artistic talent & expression through Art by discovering, supporting and championing the growth of emerging artists; thus empowering communities through creativity.",
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
  { value: "11", label: "Resident artists in the 2026 Residency & Wellness Program" },
] as const;

/* ---------------------------------- Home ---------------------------------- */

export const OUR_STUDIO = {
  kicker: "Our Studio",
  title: "A vibrant creative hub for emerging artists in Uganda",
  text: "We are a vibrant creative hub for emerging artists in Uganda. Our studio is a safe place where artists can pour their hearts and ideas into their work without worrying about the nuts and bolts of being an artist.",
  image: "/images/open-studio-151.jpg",
  imageAlt: "Artists at work inside Kiggundu Art Studio",
} as const;

export const OUR_STORY = {
  kicker: "Our Story",
  title: "Founded in 2021, built on purpose",
  paragraphs: [
    "In 2021, Haggai Kiggundu and Doria Kimuli founded the studio. Since then, we have been able to give 8 artists a chance — and our goal remains the same: to help young artists to redefine what it means to be an Artist in Uganda.",
    "We guide artists to discover purpose and build readiness for success, so that artists can tell a story, define their path and shape the future of Uganda's art industry.",
  ],
  image: "/images/metamorphosis-talk-94.jpg",
  imageAlt: "Artists in conversation during a Metamorphosis artist talk",
} as const;

export const MEET_ARTISTS_INTRO =
  "We are committed to supporting the talent and professional growth of emerging Ugandan artists by taking them through a year-long apprentice program, offering skill-based grants and commissions, facilitating their involvement in exhibitions and events, and building professional networks for artists.";

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
    blurb: "Congolese painter based in Kampala; Marketing and Communication Lead of the first edition.",
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
    src: "/images/hero-open-studio.jpg",
    alt: "Artists in discussion inside the studio, beneath a textile portrait",
    caption: "Inside the studio",
    wide: true,
  },
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
    src: "/images/open-studio-151.jpg",
    alt: "Open studio day at Kiggundu Art Studio",
    caption: "Open studio",
    wide: false,
  },
  {
    src: "/images/iyara-whatsapp.jpg",
    alt: "Iyara Karabo at the studio",
    caption: "Iyara Karabo",
    wide: false,
  },
  {
    src: "/images/chronicles-3673.jpg",
    alt: "Chronicles of Existence exhibition at the studio",
    caption: "Chronicles of Existence",
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
    "Edwin Ntare's debut solo exhibition at Kiggundu Art Studio, featuring a series of works off his new art collection exploring what existence means to him through the lens of denim, leather, cotton — a material culture he has invested his time nurturing.",
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
      "A year-long apprentice program that takes emerging artists from raw talent to a working practice — skill-based grants, commissions, exhibitions and a professional network.",
    image: "/images/metamorphosis-talk-121.jpg",
    imageAlt: "Artist talk during the Metamorphosis apprenticeship",
  },
  {
    name: "Workshops",
    tagline: "Art for children, schools, neighbours",
    description:
      "Hands-on workshops that open the studio to children, schools and neighbours — art as a shared, everyday language.",
    image: "/images/open-studio-151.jpg",
    imageAlt: "Workshop day at the open studio",
  },
  {
    name: "Murals",
    tagline: "Walls painted with the community",
    description:
      "Large-scale murals painted with the community — the studio's public face, in four countries so far.",
    image: "/images/metamorphosis-talk-94.jpg",
    imageAlt: "Artists discussing a mural project",
  },
  {
    name: "FireSideChArts Africa",
    tagline: "Stories and conversation around the fire",
    description:
      "Stories and conversation around the fire — an evening space where artists, elders and neighbours meet art, memory and community.",
    image: "/images/hero-open-studio.jpg",
    imageAlt: "Artists gathered in conversation at the studio",
  },
] as const;

export const SERVICES = [
  {
    name: "Murals on commission",
    description: "For schools, institutions, businesses.",
    detail:
      "A wall, a story, a community. The studio designs and paints murals on commission, from first sketch to the finished wall.",
  },
  {
    name: "Art workshops",
    description: "For children, schools and groups.",
    detail:
      "Practical, joyful workshops led by studio artists — for classrooms, youth groups and community gatherings.",
  },
  {
    name: "Mentorship",
    description: "A year of practice and research.",
    detail:
      "The Metamorphosis apprenticeship: a full year of mentorship, practice and research for emerging artists.",
  },
  {
    name: "Guided tours",
    description: "The studio, the shows, the artists.",
    detail:
      "Walk the studio with an artist: the space, the current show and the people making the work.",
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
    "Together, we can build a creative space that empowers artists and strengthens the heartbeat of Ugandan culture.",
  purpose:
    "We are raising funds for our newly opened 2026 Residency & Wellness Program to cover stipends for all our 11 resident artists, art materials, wellness activities, and more.",
  ctaLabel: "View campaign",
  ctaUrl: "https://kiggunduartstudio.org/donate/",
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
      "A solo show by Edwin Ntare — Sat, 20 Jun | Kiggundu Art Studio. Edwin Ntare's debut solo exhibition at Kiggundu Art Studio, featuring a series of works off his new art collection exploring what existence means to him through the lens of denim, leather, cotton, a material culture he has invested his time nurturing.",
    image: "/images/chronicles-poster.jpg",
    imageAlt: "Poster for Chronicles of Existence, a solo show by Edwin Ntare",
    body: [
      "A solo show by Edwin Ntare — Sat, 20 Jun | Kiggundu Art Studio. Edwin Ntare's debut solo exhibition at Kiggundu Art Studio, featuring a series of works off his new art collection exploring what existence means to him through the lens of denim, leather, cotton, a material culture he has invested his time nurturing.",
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
      "In today's rapidly evolving educational landscape, the traditional model of rote memorization and passive learning is being challenged by quite many interesting and dynamic approaches…",
    body: [
      "In today's rapidly evolving educational landscape, the traditional model of rote memorization and passive learning is being challenged by quite many interesting and dynamic approaches…",
      "Photo: Kiggundu Rodney speaking to the students from Bankhill College Ndejje.",
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
    "These testimonial videos highlight the voices of our apprentices at Kiggundu Art Studio. Through their experiences, they share how the program has shaped their skills, inspired their creativity, and supported their growth as emerging artists.",
    "The apprenticeship journey is best told by those who live it. In these videos, our apprentices open up about their challenges, discoveries, and dreams, showing how Kiggundu Art Studio has become a place where talent is nurtured and visions take shape.",
  ],
  platforms: ["Podcast", "YouTube", "Apple Podcasts", "Instagram", "Facebook"],
} as const;

export const SUBSCRIBE = {
  title: "Subscribe for updates",
  text: "Join our mailing list and get notified when we release new Events and blog posts. No spam, we guarantee.",
} as const;

export const FOUNDER = {
  name: "Kiggundu Rodney Erismas",
  role: "Founder",
  bio: "Visual artist, muralist and social entrepreneur. Makerere graduate whose patterned, vivid painting explores identity, mental health and social justice.",
  points: [
    "Senior Atlantic Fellow, Global Brain Health Institute (UCSF)",
    "Founder of FireSideChArts Africa",
    "Co-founder of Streetlights Uganda",
  ],
  caption: "Mural painting is at the heart of the studio.",
  image: "/images/metamorphosis-talk-121.jpg",
  imageAlt: "Kiggundu Rodney Erismas at the studio",
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
      "Edwin Ntare's debut solo exhibition, exploring what existence means through denim, leather and cotton.",
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
      "A closing tour and artist talk to round off Chronicles of Existence — an open evening at the studio.",
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
    link: "/programs",
    linkLabel: "See our programs",
  },
] as const;
