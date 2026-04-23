export interface Section {
  heading?: string
  body: string[]
}

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readTime: string
  image: string
  sections: Section[]
}

export const posts: Post[] = [
  {
    slug: 'drone-photos-sell-denver-homes-faster',
    title: 'How Drone Photography Helps Denver Homes Sell Faster',
    description: 'Listings with aerial photography sell quicker and for more money. Here\'s what the data says — and why Denver real estate agents are adding drone shots to every listing.',
    date: 'April 10, 2026',
    category: 'Real Estate',
    readTime: '5 min read',
    image: '/images/real-estate/p1.jpg',
    sections: [
      {
        body: [
          'In a competitive Denver market, the difference between a listing that sits and one that gets multiple offers often comes down to the very first photo. Buyers scroll fast — and aerial photography stops the scroll.',
          'Listings with professional drone photography consistently outperform those without. Here\'s why it works, and what it means for sellers and agents in Colorado.',
        ],
      },
      {
        heading: 'Aerial Photos Show What Ground-Level Shots Can\'t',
        body: [
          'Ground-level photography — even professional interior shots — can\'t show a buyer how close the property is to the Rockies, how large the lot is relative to neighbors, or how the neighborhood is laid out. Drone photography answers all of those questions in a single frame.',
          'For Denver properties near parks, open space, or mountain views, aerial shots are especially powerful. A well-framed drone photo of a Cherry Creek home with the mountains in the background communicates luxury and location instantly.',
        ],
      },
      {
        heading: 'The Numbers Behind Aerial Listings',
        body: [
          'Studies from major real estate platforms show that listings with aerial photography sell up to 68% faster than those without. In the Denver metro — where inventory moves quickly — being among the first listings buyers click on matters enormously.',
          'Agents who consistently use drone photography also report higher perceived listing value. Even when the property is identical to comparable listings, aerial coverage signals professionalism and attention to detail — which buyers associate with a well-maintained home.',
        ],
      },
      {
        heading: 'What a ColoDrone Real Estate Shoot Includes',
        body: [
          'Every real estate shoot includes exterior walkarounds, neighborhood context shots, lot overviews, and — on Standard and Premium packages — twilight photography. All content is delivered in both horizontal (16:9) for MLS and vertical (9:16) for Instagram Reels and social media.',
          'Most Denver metro shoots can be scheduled within the same week, with edited files delivered in 2–5 business days via a private gallery link.',
        ],
      },
      {
        heading: 'Ready to Add Aerials to Your Next Listing?',
        body: [
          'Whether you\'re listing a downtown studio or a 10-acre mountain estate, drone photography is one of the highest-ROI investments you can make per listing. Get in touch for a free quote — we respond within 24 hours.',
        ],
      },
    ],
  },
  {
    slug: 'why-your-colorado-airbnb-needs-aerial-photos',
    title: 'Why Your Colorado Airbnb Needs Aerial Photos',
    description: 'Most short-term rental listings use the same phone photos. Aerial photography immediately signals a premium experience — and helps your Airbnb rank higher and book faster.',
    date: 'April 3, 2026',
    category: 'Airbnb & Rentals',
    readTime: '4 min read',
    image: '/images/airbnb/p1.jpg',
    sections: [
      {
        body: [
          'Walk through any major Colorado ski town on Airbnb and you\'ll notice something: most listings look identical. Phone photos of a living room, a bed, a kitchen. The ones that stand out — and charge 30% more — almost always have aerial photography.',
          'If you own a short-term rental in Denver, Breckenridge, Vail, or anywhere in between, aerial photos might be the single best investment you can make in your listing.',
        ],
      },
      {
        heading: 'Location Is Your Strongest Selling Point',
        body: [
          'Guests booking a Colorado vacation rental aren\'t just renting a property — they\'re renting a location. Proximity to ski lifts, mountain views, hiking trails, downtown restaurants. Aerial photography communicates location context in a way no interior shot can.',
          'A drone photo showing your Breckenridge cabin with the ski slopes visible in the background, or your Denver rental with the city skyline nearby, immediately justifies a premium nightly rate and filters for guests who specifically want what you offer.',
        ],
      },
      {
        heading: 'Stand Out in Search Results',
        body: [
          'Airbnb and VRBO both surface listings with higher engagement — and cover photos drive most of that engagement. A striking aerial shot as your cover photo generates significantly more clicks than a standard interior photo.',
          'More clicks lead to more bookings. More bookings lead to more reviews. More reviews push your listing higher in search results. Aerial photography is an investment that compounds over time.',
        ],
      },
      {
        heading: 'Vertical Reels for Social Media',
        body: [
          'Beyond the listing itself, short-form video content on Instagram and TikTok is one of the most cost-effective ways to market a rental property. Every ColoDrone shoot includes vertical 9:16 video content ready for Reels — no editing required.',
          'Hosts who share aerial reels of their properties regularly report a meaningful uptick in direct bookings, cutting out the platform fees entirely.',
        ],
      },
      {
        heading: 'Pricing for Airbnb Hosts',
        body: [
          'ColoDrone\'s Airbnb packages start at $249 for the Denver metro — typically recovered in one or two additional nights of bookings. Shoots outside Denver are available with a mileage-based travel fee.',
          'Get a free quote and we\'ll have availability back to you within 24 hours.',
        ],
      },
    ],
  },
  {
    slug: 'faa-part-107-what-it-means-for-your-drone-shoot',
    title: 'FAA Part 107: What It Means for Your Colorado Drone Shoot',
    description: 'Not every drone operator is legally allowed to fly for hire in Colorado. Here\'s what FAA Part 107 certification means, why it matters, and what to ask before you book.',
    date: 'March 27, 2026',
    category: 'Education',
    readTime: '4 min read',
    image: '/images/real-estate/p2.jpg',
    sections: [
      {
        body: [
          'If you\'ve looked into hiring a drone operator in Colorado, you\'ve probably seen "FAA Part 107 Certified" listed as a credential. But what does it actually mean — and why should you care?',
          'The short answer: Part 107 is the FAA\'s certification for commercial drone pilots. Any drone operator flying for compensation — including for real estate photos, wedding videos, or construction documentation — is legally required to hold it.',
        ],
      },
      {
        heading: 'What Part 107 Requires',
        body: [
          'To earn a Part 107 Remote Pilot Certificate, pilots must pass a comprehensive FAA knowledge test covering airspace classifications, weather effects on drone performance, emergency procedures, and aviation regulations. The test must be taken at an FAA-approved testing center and renewed every 24 months.',
          'Certified pilots are also required to follow strict operating rules: flying below 400 feet AGL, maintaining visual line of sight, avoiding restricted airspace without authorization, and more.',
        ],
      },
      {
        heading: 'Why It Matters in Colorado',
        body: [
          'Colorado has some of the most complex airspace in the country. Denver International Airport sits northeast of the city, and several military operations areas and class D airports are scattered across the Front Range. Flying commercially near any of these without proper authorization is illegal and dangerous.',
          'Part 107 pilots use the FAA\'s LAANC system (Low Altitude Authorization and Notification Capability) to request real-time airspace authorization. This means shoots near DIA, Centennial Airport, or Buckley Space Force Base can still happen — legally — when the right authorizations are in place.',
        ],
      },
      {
        heading: 'What to Ask Before You Book Any Drone Operator',
        body: [
          'Before hiring anyone to fly a drone for commercial purposes in Colorado, ask these three questions: Are you FAA Part 107 certified? Can you provide your certificate number? Do you carry liability insurance?',
          'A legitimate operator will answer yes to all three without hesitation. If a pilot offers suspiciously low rates and can\'t answer those questions, you\'re assuming legal and financial liability for an unauthorized flight.',
        ],
      },
      {
        heading: 'ColoDrone\'s Credentials',
        body: [
          'ColoDrone is FAA Part 107 certified and fully insured for every flight. We handle all LAANC airspace authorizations before any shoot, and can provide a certificate of insurance to venues, HOAs, or clients who require it.',
          'If you have questions about whether a specific location in Colorado is flyable, reach out — we\'ll check airspace and give you a straight answer.',
        ],
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}
