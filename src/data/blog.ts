export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "moving-checklist-toronto-residents",
    title: "A Practical Moving Checklist for Toronto Residents",
    description:
      "A week-by-week moving checklist built around Toronto realities: elevator bookings, street parking permits, utility transfers and packing order.",
    date: "2026-05-12",
    readTime: "7 min read",
    category: "Planning",
    intro:
      "Most stressful moves are not caused by heavy furniture. They are caused by small administrative details discovered on the morning of the move. This checklist works backwards from move day so nothing lands on you at the last minute.",
    sections: [
      {
        heading: "Six to eight weeks out",
        body: [
          "Confirm your possession or lease start date in writing, then request quotes while your preferred dates are still open. Summer weekends and the last two business days of any month are the first slots to disappear across the GTA.",
          "If either address is a condo or apartment, contact property management now and ask three questions: when can the service elevator be booked, what does the certificate of insurance need to say, and where does the truck park.",
        ],
      },
      {
        heading: "Three to four weeks out",
        body: [
          "Start with rooms you barely touch — storage closets, the basement, seasonal clothing. Label every carton with the destination room rather than a list of contents, because the crew reads labels while walking, not while standing still.",
          "Book utility transfers for hydro, internet and any rental water heater. Internet installation is the appointment that most often slips, so schedule it before your moving date rather than after.",
        ],
      },
      {
        heading: "The final week",
        body: [
          "If you are moving to or from a street without a driveway, check whether the City of Toronto requires a temporary parking permit for a moving truck on that block. A truck that has to park two houses away adds real time to the job.",
          "Pack an essentials box that travels with you: chargers, medication, tools, a change of clothes, toilet paper, coffee. It should be the last item loaded or the first item you carry.",
        ],
      },
      {
        heading: "Move day",
        body: [
          "Walk the crew through the home before anything is lifted and point out fragile items, anything staying behind and anything that must load last because it comes off first.",
          "Do a final sweep of closets, the dishwasher, the medicine cabinet and behind doors before the truck leaves. Those four places account for most forgotten items.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-for-moving-day",
    title: "How to Prepare for Moving Day So the Crew Never Waits",
    description:
      "Hourly moves reward preparation. Here is exactly what to do the night before and the morning of your move so the crew can work at full speed.",
    date: "2026-05-02",
    readTime: "5 min read",
    category: "Move Day",
    intro:
      "When a move runs long, the cause is almost always waiting — for boxes to be sealed, for a parking spot, for someone to decide whether the bookshelf is coming. Preparation is the cheapest way to shorten a move.",
    sections: [
      {
        heading: "Finish packing before the truck arrives",
        body: [
          "Every open carton is a pause. Anything not going in the truck loose — lamps, cables, pantry items, bathroom shelves — should be boxed and taped shut before the crew walks in.",
          "Leave furniture assembled. Crews carry the right tools and disassemble faster than most people expect, and partially dismantled beds with missing hardware slow things down more than intact ones.",
        ],
      },
      {
        heading: "Clear the path",
        body: [
          "The route from the furthest room to the truck should be free of rugs, plants, pet bowls and shoes. Prop open interior doors that swing shut.",
          "Reserve the closest legal parking to the entrance. Every extra metre is repeated dozens of times over the course of the day.",
        ],
      },
      {
        heading: "Separate what is not moving",
        body: [
          "Group items staying behind in one room and tape a clear note on the door. Ambiguity is expensive: a crew that has to ask about each item loses minutes repeatedly.",
          "Set aside items you will transport yourself — documents, jewellery, laptops, keys — in your vehicle before the crew arrives.",
        ],
      },
      {
        heading: "Be reachable and decisive",
        body: [
          "Someone who can make decisions should be present at both addresses. If that is not possible, tell the crew in advance who to call.",
          "Confirm elevator time slots the morning of, especially at the destination building. A missed window can stall an otherwise smooth day.",
        ],
      },
    ],
  },
  {
    slug: "condo-moving-tips-toronto",
    title: "Condo Moving Tips for Toronto High-Rises",
    description:
      "Elevator bookings, insurance certificates, loading docks and narrow corridors — what a downtown Toronto condo move actually requires.",
    date: "2026-04-21",
    readTime: "6 min read",
    category: "Condos",
    intro:
      "A condo move is less about distance and more about logistics. The physical carry may be short, but the building sets the rules and those rules decide how long the day takes.",
    sections: [
      {
        heading: "The elevator is the schedule",
        body: [
          "Most Toronto buildings allocate the service elevator in three or four hour blocks and rarely allow overlap between residents. Book as early as management permits and ask what happens if you run over.",
          "If both addresses are condos, sequence the bookings with a realistic travel buffer. Downtown to midtown at 4pm is not the same trip as at 10am.",
        ],
      },
      {
        heading: "Certificate of insurance",
        body: [
          "Buildings usually require a certificate naming the corporation and stating minimum liability coverage. Send us the building's requirements as soon as you have them so the paperwork is filed before move day rather than negotiated at the concierge desk.",
        ],
      },
      {
        heading: "Measure before you commit",
        body: [
          "Sectional sofas and king box springs are the two items most often defeated by a condo doorway or elevator diagonal. Measure the elevator interior, the unit door and any tight corner in the corridor.",
          "If a piece will not fit, knowing a week early gives you options. Knowing on move day gives you a problem.",
        ],
      },
      {
        heading: "Protect the shared spaces",
        body: [
          "Damage to a lobby or corridor is charged to the resident, not the visitor. Crews should pad elevator walls, lay floor runners and use corner guards as a matter of routine.",
        ],
      },
    ],
  },
  {
    slug: "how-to-pack-fragile-items",
    title: "How to Pack Fragile Items So They Arrive Intact",
    description:
      "Glassware, plates, artwork, mirrors and electronics each need a different packing method. Here is how professionals handle them.",
    date: "2026-04-08",
    readTime: "6 min read",
    category: "Packing",
    intro:
      "Breakage rarely happens from a dropped box. It happens from movement inside a box that was underfilled, or pressure from a box stacked above it. Good packing removes both.",
    sections: [
      {
        heading: "Plates travel on their edge",
        body: [
          "Wrap each plate individually, then stack them vertically like records in a dish barrel. Flat-stacked plates concentrate the weight of the whole stack on the bottom piece.",
          "Fill every void with crumpled paper until nothing shifts when you tilt the carton. If it rattles, it will break.",
        ],
      },
      {
        heading: "Glassware needs a cell divider",
        body: [
          "Stemware benefits from cardboard cell dividers, which stop glasses knocking together. Wrap each piece, place it upright, and never lay a wine glass on its side.",
        ],
      },
      {
        heading: "Artwork, mirrors and TVs",
        body: [
          "Tape a large X across mirror and glass surfaces to hold the pane together if it cracks, then corner-protect and use a mirror carton. Framed art travels upright, never flat.",
          "Televisions ideally travel in their original carton. Without it, use a purpose-made TV box, screen facing outward, and never place anything on top.",
        ],
      },
      {
        heading: "Label what matters",
        body: [
          "Mark fragile cartons on the top and at least two sides, and note which way is up. A label only visible on a face that ends up against the truck wall does nothing.",
        ],
      },
    ],
  },
  {
    slug: "how-early-should-you-book-movers",
    title: "How Early Should You Book Movers in the GTA?",
    description:
      "Booking windows vary by season and day of the month. Here is how far ahead to reserve a crew in Toronto and the surrounding region.",
    date: "2026-03-27",
    readTime: "4 min read",
    category: "Planning",
    intro:
      "The honest answer is: earlier than most people think, and much earlier if your date is a summer weekend or the last day of the month.",
    sections: [
      {
        heading: "Peak season: May through September",
        body: [
          "Lease turnovers, closings and school calendars concentrate demand in these months. Four to six weeks of notice is a reasonable target, and Fridays and Saturdays fill first.",
        ],
      },
      {
        heading: "Month-end is its own peak",
        body: [
          "The 29th, 30th and 31st are the busiest dates in any month because most leases and many closings land there. If your date is flexible by even two days, mid-month is easier to book and easier to schedule around.",
        ],
      },
      {
        heading: "Off-season: November through March",
        body: [
          "Winter moves are more available on shorter notice — often two to three weeks. Build in weather contingency: salted walkways, floor protection and a slightly longer schedule.",
        ],
      },
      {
        heading: "What to have ready when you book",
        body: [
          "Both addresses, the date, the home size, whether either end has stairs or an elevator, and any oversized items. That is enough for a meaningful estimate rather than a guess.",
        ],
      },
    ],
  },
  {
    slug: "residential-vs-commercial-moving",
    title: "Residential vs Commercial Moving: What Actually Differs",
    description:
      "Both involve trucks and boxes, but the planning, timing and risks are different. Here is what changes when you move a business.",
    date: "2026-03-14",
    readTime: "5 min read",
    category: "Business",
    intro:
      "A home move is measured in comfort. A business move is measured in downtime. That single difference shapes almost every decision.",
    sections: [
      {
        heading: "Scheduling runs in reverse",
        body: [
          "Homes move during the day. Offices usually move on a Friday evening or across a weekend so staff return to a working space on Monday.",
        ],
      },
      {
        heading: "Inventory discipline",
        body: [
          "Commercial moves rely on labelling systems tied to a floor plan — each crate and workstation mapped to a destination desk. Homes tolerate improvisation; offices do not.",
        ],
      },
      {
        heading: "Technology and records",
        body: [
          "Servers, network hardware and confidential files need coordinated handling with the IT provider and a documented chain of custody.",
        ],
      },
      {
        heading: "Building access",
        body: [
          "Commercial buildings often require dock booking, after-hours security clearance and proof of insurance filed in advance. These are gating requirements, not formalities.",
        ],
      },
    ],
  },
  {
    slug: "moving-tips-for-families",
    title: "Moving Tips for Families With Young Children",
    description:
      "How to keep a family move calm: routines, packing order, childcare on move day and settling kids into a new home.",
    date: "2026-02-25",
    readTime: "5 min read",
    category: "Families",
    intro:
      "Children experience a move as the disappearance of everything familiar, in order, over several days. Managing that sequence matters as much as managing the boxes.",
    sections: [
      {
        heading: "Pack children's rooms last, unpack them first",
        body: [
          "Keeping a bedroom intact until the final day shortens the period of disruption. Setting it up first at the new home gives an immediate anchor.",
        ],
      },
      {
        heading: "Arrange care for move day",
        body: [
          "A home with open doors, dollies and stacked cartons is not a safe place for small children or pets. Care elsewhere is safer and lets the crew work at pace.",
        ],
      },
      {
        heading: "Give each child a job",
        body: [
          "Decorating their own carton, choosing which toys travel in the car, or being in charge of a small bag turns a passive experience into a participatory one.",
        ],
      },
      {
        heading: "Rebuild routine quickly",
        body: [
          "Bedtime, meals and school-run timing should return to normal within the first few days, even if the living room is still in boxes.",
        ],
      },
    ],
  },
  {
    slug: "preparing-for-a-local-gta-move",
    title: "Preparing for a Local GTA Move",
    description:
      "Short-distance moves within the Greater Toronto Area have their own quirks: traffic windows, permits, parking and same-day timing.",
    date: "2026-02-10",
    readTime: "5 min read",
    category: "Local",
    intro:
      "A move from Etobicoke to Mississauga is a short drive and a full day of work. Local moves are won or lost on access and timing, not distance.",
    sections: [
      {
        heading: "Plan around traffic, not distance",
        body: [
          "Crossing the 401, the DVP or the QEW at the wrong hour can add more time than twenty extra kilometres. Early starts are almost always worth it.",
        ],
      },
      {
        heading: "Confirm parking at both ends",
        body: [
          "Narrow older streets, permit-only zones and townhouse complexes with visitor-only parking all need checking in advance. Municipal rules differ across the GTA.",
        ],
      },
      {
        heading: "Same-day is realistic for most homes",
        body: [
          "Condos and two- to three-bedroom homes typically complete in one day with an appropriately sized crew. Larger homes with packing may need a two-day plan.",
        ],
      },
      {
        heading: "Do not over-consolidate",
        body: [
          "Because the distance is short, people tend to overload cartons. Weight limits still apply — a box too heavy to lift safely is a box that will fail.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
