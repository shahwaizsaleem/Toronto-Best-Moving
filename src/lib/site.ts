/**
 * Central company configuration.
 * PLACEHOLDERS: replace the values marked TODO with the real company details.
 */
export const site = {
  name: "Toronto Best Moving",
  legalName: "Toronto Best Moving",
  tagline: "Moving made simple. Relocation done right.",
  // TODO: replace with the real business phone number
  phone: "(437) 423-19907",
  phoneHref: "tel:+143742319907", 
  // TODO: replace with the real business email
  email: "info@torontobestmoving.ca",
  // TODO: replace with the real business address
  address: {
    street: "Address to be confirmed",
    city: "Toronto",
    region: "ON",
    country: "CA",
  },
  hours: "Monday to Sunday — hours to be confirmed",
  // Set to a full wa.me link once the company provides a WhatsApp number
  whatsapp: null as string | null,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "residential-moving",
    title: "Residential Moving",
    short: "Houses, townhomes and family relocations across the GTA.",
    description:
      "Full-service house moves handled room by room, from disassembling bed frames to protecting hardwood floors and reassembling everything in your new home.",
    points: [
      "Floor and doorway protection at both addresses",
      "Furniture disassembly and reassembly",
      "Blanket wrapping for case goods and upholstery",
      "Room-by-room labelling so unpacking stays organised",
    ],
  },
  {
    slug: "commercial-moving",
    title: "Commercial Moving",
    short: "Offices, retail units and warehouse relocations.",
    description:
      "Business relocations planned around your operating hours, with evening and weekend scheduling so your team returns to a workspace that is ready to use.",
    points: [
      "After-hours and weekend scheduling",
      "Workstation, server and IT equipment handling",
      "Filing, archive and inventory transfers",
      "Freight elevator and loading dock coordination",
    ],
  },
  {
    slug: "apartment-condo-moving",
    title: "Apartment & Condo Moving",
    short: "High-rise moves with elevator and building rules handled.",
    description:
      "Condo and apartment moves that respect building move-in windows, certificate of insurance requirements and tight elevator lobbies.",
    points: [
      "Elevator booking guidance and COI paperwork",
      "Protective padding for lobbies and corridors",
      "Compact equipment for narrow hallways",
      "Efficient crews to stay inside booked time slots",
    ],
  },
  {
    slug: "packing-unpacking",
    title: "Packing & Unpacking",
    short: "Professional materials and methodical packing.",
    description:
      "Full or partial packing using quality cartons, dish barrels, wardrobe boxes and cushioning — plus unpacking and debris removal at the other end.",
    points: [
      "Full-home or kitchen-only packing",
      "Fragile, artwork and mirror specialty packing",
      "Wardrobe boxes so clothing stays on hangers",
      "Unpacking and carton removal",
    ],
  },
  {
    slug: "loading-unloading",
    title: "Loading & Unloading",
    short: "Labour-only help for rentals and containers.",
    description:
      "Already have a truck, trailer or portable container? Our crews provide the muscle and the load plan so nothing shifts in transit.",
    points: [
      "Rental truck and portable container loading",
      "Strategic load planning and tie-downs",
      "Storage unit loading and unloading",
      "Heavy item and appliance handling",
    ],
  },
  {
    slug: "local-moving",
    title: "Local Moving",
    short: "Same-day moves within Toronto and the GTA.",
    description:
      "Short-distance moves between neighbourhoods and nearby municipalities, usually completed in a single day with a crew sized to the job.",
    points: [
      "Crew and truck sized to your home",
      "Routes planned around GTA traffic windows",
      "Transparent hourly structure explained upfront",
      "Single-day completion for most homes",
    ],
  },
  {
    slug: "long-distance-moving",
    title: "Long-Distance Moving",
    short: "Moves beyond the GTA, across Ontario and further.",
    description:
      "Longer relocations coordinated with a clear timeline, inventory list and a single point of contact from load day to delivery day.",
    points: [
      "Written inventory before departure",
      "Agreed delivery windows",
      "Extra protective packing for long hauls",
      "One coordinator from start to finish",
    ],
  },
];

export const processSteps = [
  {
    title: "Tell us about your move",
    body: "Share your addresses, dates and home size through the quote form. It takes about two minutes.",
  },
  {
    title: "Receive a clear estimate",
    body: "We review the details, ask anything we need to and send back a straightforward written estimate.",
  },
  {
    title: "Plan the day together",
    body: "We confirm crew size, truck size, elevator bookings and parking so nothing is improvised on move day.",
  },
  {
    title: "Move day, handled",
    body: "Your crew arrives on schedule, protects the property, loads carefully and sets everything up at the destination.",
  },
];
