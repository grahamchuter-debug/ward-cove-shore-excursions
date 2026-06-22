export type FitnessLevel = "Easy" | "Moderate" | "Difficult";
export type ReturnConfidence = "High" | "Moderate" | "Tight";

export type Excursion = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  fitness: FitnessLevel;
  distanceFromWardCove: string;
  transferRequired: boolean;
  transferNote: string;
  bestFor: string[];
  returnConfidence: ReturnConfidence;
  returnNote: string;
  cruiseSnapshot: string;
  description: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
};

export const excursions: Excursion[] = [
  {
    slug: "misty-fjords",
    title: "Misty Fjords National Monument from Ward Cove",
    shortTitle: "Misty Fjords",
    summary:
      "Floatplane or boat expedition into granite cliffs, waterfalls, and mirror-still fjord waters — Alaska's signature scenic day.",
    duration: "3.5–6 hours (flight or boat option)",
    fitness: "Easy",
    distanceFromWardCove:
      "Tours depart from Ward Cove or nearby Ketchikan harbours; no downtown walk required.",
    transferRequired: false,
    transferNote:
      "Most operators collect at the Ward Cove cruise terminal or a short shuttle meeting point.",
    bestFor: [
      "First-time Alaska visitors wanting iconic scenery",
      "Photographers and nature lovers",
      "Passengers with 5+ hours in port",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Full Monument flights often need 5–6 hours. Shorter flightseeing works on tighter schedules if weather cooperates. Build a 60-minute buffer after advertised return.",
    cruiseSnapshot:
      "Ward Cove is well placed for Misty Fjords departures — you skip downtown traffic and start your wilderness time sooner than ships at town berths.",
    description: [
      "Misty Fjords National Monument covers more than two million acres of sheer cliffs, hanging valleys, and fjords draped in coastal rainforest. From Ward Cove, you can reach this landscape by seaplane or longer boat routes that trace the Inside Passage before turning into Rudyerd Bay or similar anchorages.",
      "Flightseeing offers the classic Alaska moment: lifting off from salt water, banking over Tongass canopy, then dropping into a fjord where waterfalls ribbon down thousand-foot walls. Boat options trade altitude for pace — more time on deck, more chance to spot marine life en route.",
      "Weather is the variable that matters most. Low cloud can delay or shorten flights; boat tours are somewhat more flexible but take longer. Ward Cove passengers should confirm departure point and total elapsed time when enquiring — not all listings distinguish terminal pickup from downtown-only meeting points.",
    ],
    highlights: [
      "Granite fjord walls and hanging waterfalls",
      "Seaplane or wildlife-rich boat routing",
      "Ward Cove terminal pickup on many departures",
      "Unforgettable photo opportunities in calm conditions",
    ],
    faqs: [
      {
        question: "Can I do Misty Fjords on a short Ward Cove port day?",
        answer:
          "Only shorter flightseeing fits under about five hours total. Full Rudyerd Bay boat trips usually need most of a day. Use our cruise planner to match your ship's schedule.",
      },
      {
        question: "Is a transfer from Ward Cove required?",
        answer:
          "Often no — many operators meet at the Ward Cove terminal or nearby. Always confirm pickup location when you enquire.",
      },
      {
        question: "What if weather cancels my flight?",
        answer:
          "Operators typically rebook, substitute a boat tour, or refund depending on policy. Ask about weather protocols at booking.",
      },
    ],
    relatedSlugs: [
      "ketchikan-wildlife-tour",
      "rainforest-walk",
      "fishing",
    ],
  },
  {
    slug: "totem-bight",
    title: "Totem Bight State Historical Park from Ward Cove",
    shortTitle: "Totem Bight",
    summary:
      "Coastal clan house, restored totem poles, and rainforest paths at one of Southeast Alaska's finest cultural parks.",
    duration: "2–3 hours (with transfer)",
    fitness: "Easy",
    distanceFromWardCove:
      "Roughly 8 miles north of Ward Cove; about 20–25 minutes by road from the terminal.",
    transferRequired: true,
    transferNote:
      "Included on most organised tours; independent visitors need shuttle, taxi, or cruise-line transport to North Tongass Highway.",
    bestFor: [
      "Culture and history enthusiasts",
      "Easy walking and photography",
      "Families and multigenerational groups",
    ],
    returnConfidence: "High",
    returnNote:
      "Half-day tours with built-in transfers routinely return with comfortable margin on standard cruise days.",
    cruiseSnapshot:
      "Totem Bight pairs naturally with a rainforest walk or Saxman visit — ideal when you want culture without a full-day commitment from Ward Cove.",
    description: [
      "Totem Bight State Historical Park preserves Tlingit and Haida totem traditions along a sheltered Pacific shoreline. A hand-adzed clan house and collection of restored poles tell stories of clans, crest animals, and Northwest Coast artistry.",
      "Paths wind through old-growth spruce and hemlock with glimpses of the water. The setting is quiet compared with downtown — you hear ravens and surf more than tour buses when timing is right.",
      "From Ward Cove, Totem Bight is never a walk from the gangway. Plan for road transfer time both ways. Many shore excursions bundle the park with Saxman Village or a Tongass trail to make efficient use of your port hours.",
    ],
    highlights: [
      "Iconic clan house and totem collection",
      "Easy forest trails with ocean views",
      "Strong cultural interpretation",
      "Fits well in a half-day from Ward Cove",
    ],
    faqs: [
      {
        question: "How far is Totem Bight from the Ward Cove cruise terminal?",
        answer:
          "About 8 road miles north, typically 20–25 minutes depending on traffic and shuttle routing.",
      },
      {
        question: "Can I visit Totem Bight without a tour?",
        answer:
          "Yes, but you need independent transport from Ward Cove. Entry fees are modest; check current park information before you go.",
      },
      {
        question: "Does Totem Bight combine with other stops?",
        answer:
          "Yes — Saxman Village and rainforest walks are common pairings on organised tours from Ward Cove.",
      },
    ],
    relatedSlugs: [
      "saxman-native-village",
      "rainforest-walk",
      "creek-street-downtown-ketchikan",
    ],
  },
  {
    slug: "saxman-native-village",
    title: "Saxman Native Village from Ward Cove",
    shortTitle: "Saxman Native Village",
    summary:
      "Living Tlingit heritage site south of Ketchikan with totem poles, carving traditions, and dance performances on select tours.",
    duration: "2–3 hours",
    fitness: "Easy",
    distanceFromWardCove:
      "About 7 miles south of downtown Ketchikan; roughly 25–30 minutes from Ward Cove including transfer.",
    transferRequired: true,
    transferNote:
      "Shore excursions include round-trip transport from Ward Cove. Not reachable on foot from the cruise terminal.",
    bestFor: [
      "First-time visitors to Alaska Native culture",
      "Totem and carving enthusiasts",
      "Easy, educational half-day outings",
    ],
    returnConfidence: "High",
    returnNote:
      "Standard Saxman city tours are among the most schedule-friendly options from Ward Cove.",
    cruiseSnapshot:
      "Saxman is the cultural anchor many Ward Cove passengers choose when they want totems, stories, and local history in one efficient half-day.",
    description: [
      "Saxman Native Village sits near Saxman Creek south of Ketchikan, where Tlingit traditions continue through carving, storytelling, and community life. The totem park holds poles both historic and newly raised, each with layered meaning for clan identity.",
      "Depending on the tour you choose, you may see master carvers at work, hear about potlatch traditions, and watch dance performances that bring legends to life. Guides connect the artwork to living culture rather than treating poles as museum pieces alone.",
      "Ward Cove arrivals should budget transfer time in both directions. Saxman pairs well with the lumberjack show or a condensed downtown drive-by when operators offer combination packages.",
    ],
    highlights: [
      "One of Alaska's premier totem collections",
      "Tlingit cultural interpretation",
      "Optional dance and carving demonstrations",
      "Reliable half-day timing from Ward Cove",
    ],
    faqs: [
      {
        question: "Is Saxman the same as Totem Bight?",
        answer:
          "No — they are separate sites with different histories. Many passengers visit one or both on combined tours.",
      },
      {
        question: "Are performances guaranteed?",
        answer:
          "Performance schedules vary by season and tour operator. Ask when you enquire if dance is included on your date.",
      },
      {
        question: "Is this suitable for mobility-limited guests?",
        answer:
          "Grounds are generally accessible with some uneven paths. Mention mobility needs when booking so operators can advise.",
      },
    ],
    relatedSlugs: [
      "totem-bight",
      "lumberjack-show",
      "creek-street-downtown-ketchikan",
    ],
  },
  {
    slug: "lumberjack-show",
    title: "Great Alaskan Lumberjack Show from Ward Cove",
    shortTitle: "Lumberjack Show",
    summary:
      "High-energy timber sports, comedy, and Alaska logging heritage — easy seating and broad family appeal.",
    duration: "1.5–4 hours (show only vs combo tours)",
    fitness: "Easy",
    distanceFromWardCove:
      "Show venue is near downtown Ketchikan; about 20 minutes by road from Ward Cove.",
    transferRequired: true,
    transferNote:
      "Transfers are included on shore excursions. The show itself is seated; travel time dominates logistics.",
    bestFor: [
      "Families with children",
      "Rainy-day backup plans",
      "Passengers wanting lighthearted entertainment",
    ],
    returnConfidence: "High",
    returnNote:
      "The show runs on a fixed schedule; combo tours build return buffers around that slot. Show-only bookings are easiest to schedule.",
    cruiseSnapshot:
      "A reliable rainy-day winner from Ward Cove — seated, timed, and easy to pair with Saxman or a quick downtown stop on combination tours.",
    description: [
      "The Great Alaskan Lumberjack Show pits teams in axe throwing, log rolling, chainsaw events, and climbing challenges — all delivered with humour and crowd participation. It celebrates Southeast Alaska's logging era without taking itself too seriously.",
      "The venue is close to Ketchikan's cruise infrastructure but not to Ward Cove. Nearly every passenger books transport as part of a shore excursion rather than trying to coordinate taxis for a 90-minute window.",
      "Combination tours that add Saxman Native Village or city highlights deliver better value for Ward Cove travellers who want culture plus entertainment in one transfer cycle.",
    ],
    highlights: [
      "Seated, weather-proof entertainment",
      "Family-friendly pacing",
      "Pairs with Saxman and city tours",
      "Predictable showtimes aid return-to-ship planning",
    ],
    faqs: [
      {
        question: "How long is the actual show?",
        answer:
          "About 90 minutes. Total excursion time includes Ward Cove transfers on organised tours.",
      },
      {
        question: "Is the lumberjack show good in bad weather?",
        answer:
          "Yes — it is indoors or under cover, making it a strong option on wet port days.",
      },
      {
        question: "Can I combine the show with downtown shopping?",
        answer:
          "Some combo tours include brief downtown time. Confirm itinerary details when you enquire.",
      },
    ],
    relatedSlugs: [
      "saxman-native-village",
      "creek-street-downtown-ketchikan",
      "rainforest-walk",
    ],
  },
  {
    slug: "ketchikan-wildlife-tour",
    title: "Ketchikan Wildlife Tour from Ward Cove",
    shortTitle: "Wildlife Tour",
    summary:
      "Boat-based search for whales, porpoises, eagles, seals, and seasonal salmon runs along Revillagigedo Channel.",
    duration: "2.5–3 hours",
    fitness: "Easy",
    distanceFromWardCove:
      "Boats often board near Ward Cove or Ketchikan harbours — confirm pier at enquiry.",
    transferRequired: false,
    transferNote:
      "Many wildlife cruises offer Ward Cove pier pickup, avoiding an extra downtown leg.",
    bestFor: [
      "Wildlife photographers",
      "Passengers preferring boats to buses",
      "Whale season visitors (typically May–September)",
    ],
    returnConfidence: "High",
    returnNote:
      "Standard wildlife cruises are timed for half-day port calls with operator return guarantees on organised tours.",
    cruiseSnapshot:
      "Ward Cove sits on productive waterways — wildlife boats can start searching minutes after departure rather than after a long bus ride downtown.",
    description: [
      "Southeast Alaska's food-rich waters attract humpback whales, orcas, Steller sea lions, harbour seals, and bald eagles in numbers that surprise first-time visitors. Wildlife tours use stable charter vessels with outdoor decks and heated cabins for changing weather.",
      "Guides read tide, season, and recent sightings to route toward active feeding areas. Summer months offer the best whale odds; spring and fall bring different species patterns and eagle concentrations.",
      "From Ward Cove, ask explicitly whether your tour boards at the cruise terminal pier or requires a transfer to another harbour. Pickup location changes total elapsed time by 30–45 minutes.",
    ],
    highlights: [
      "Whales, eagles, and marine mammals",
      "Outdoor decks plus sheltered cabin space",
      "Often compatible with Ward Cove pier pickup",
      "Naturalist commentary throughout",
    ],
    faqs: [
      {
        question: "When is whale season near Ward Cove?",
        answer:
          "Humpbacks are commonly seen May through September, with peak activity in mid-summer. Wildlife is never guaranteed.",
      },
      {
        question: "What should I bring?",
        answer:
          "Layers, rain jacket, binoculars, and a camera with zoom. Gloves help on breezy decks.",
      },
      {
        question: "Is seasickness a concern?",
        answer:
          "Channels are often calm but can chop up in wind. Take medication early if you are prone to motion sickness.",
      },
    ],
    relatedSlugs: ["misty-fjords", "fishing", "rainforest-walk"],
  },
  {
    slug: "rainforest-walk",
    title: "Tongass Rainforest Walk from Ward Cove",
    shortTitle: "Rainforest Walk",
    summary:
      "Guided trails through old-growth hemlock and spruce with ferns, muskeg, and creek crossings in the world's largest temperate rainforest.",
    duration: "2–3 hours",
    fitness: "Moderate",
    distanceFromWardCove:
      "Trailheads within 15–30 minutes by road; some tours start near Ward Cove.",
    transferRequired: true,
    transferNote:
      "Most walks require short bus or van transfer; a few operators use trails closest to the Ward Cove area.",
    bestFor: [
      "Nature lovers wanting active time on foot",
      "Families with school-age children",
      "Combining with totem or wildlife stops",
    ],
    returnConfidence: "High",
    returnNote:
      "Two- to three-hour formats leave solid return margins on typical six- to eight-hour port days.",
    cruiseSnapshot:
      "The Tongass begins minutes from Ward Cove — rainforest walks are among the most efficient ways to experience Alaska's ecosystem without a full-day commitment.",
    description: [
      "The Tongass National Forest wraps Revillagigedo Island in cedar-scented air, thick moss, and trails that feel a world away from the cruise terminal. Guides explain salmon cycles, nurse logs, and the symbiosis between forest and sea.",
      "Routes range from gentle boardwalks to rooty paths with moderate elevation. Wear waterproof footwear — Ketchikan's reputation for rain is earned, and trails stay damp even on clearer days.",
      "Popular combinations pair a rainforest segment with Totem Bight or Saxman so you balance walking time with cultural stops in one transfer from Ward Cove.",
    ],
    highlights: [
      "Old-growth temperate rainforest",
      "Naturalist-led interpretation",
      "Flexible 2- or 3-hour formats",
      "Pairs with totem park visits",
    ],
    faqs: [
      {
        question: "How strenuous is the rainforest walk?",
        answer:
          "Most tours are moderate — uneven ground and short climbs. Easy boardwalk options exist; specify fitness level when enquiring.",
      },
      {
        question: "Will rain cancel the walk?",
        answer:
          "Tours usually run in rain — bring layers. Extreme weather or trail conditions may cause changes.",
      },
      {
        question: "Are trails wheelchair accessible?",
        answer:
          "Some boardwalk sections are accessible; full trail routes often are not. Ask operators about accessible options.",
      },
    ],
    relatedSlugs: ["totem-bight", "saxman-native-village", "misty-fjords"],
  },
  {
    slug: "creek-street-downtown-ketchikan",
    title: "Creek Street & Downtown Ketchikan from Ward Cove",
    shortTitle: "Creek Street & Downtown",
    summary:
      "Historic boardwalks over Ketchikan Creek, salmon ladders, galleries, and waterfront shopping — classic Southeast Alaska town time.",
    duration: "2.5–4 hours",
    fitness: "Easy",
    distanceFromWardCove:
      "Downtown is roughly 7 road miles south; not walkable from Ward Cove.",
    transferRequired: true,
    transferNote:
      "Essential — allow 40–50 minutes round-trip transfer time in addition to your downtown visit.",
    bestFor: [
      "Independent shopping and dining",
      "Photography on Creek Street",
      "Passengers who want town atmosphere",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Build extra buffer on combo tours that add Saxman or rainforest stops. Self-guided downtown time needs disciplined turnaround.",
    cruiseSnapshot:
      "Ward Cove passengers must plan transfers — downtown Ketchikan is not beside your ship. Organised tours maximise Creek Street time per hour ashore.",
    description: [
      "Creek Street — once Ketchikan's red-boardwalk waterfront district — now houses galleries, native art shops, and views of salmon pushing upstream in season. The creek ladder and Married Man's Trail connect waterfront to hillside neighbourhoods with classic Alaska character.",
      "Downtown also holds the Tongass Historical Museum area, harbour views, and local cafés. It is the social heart of Ketchikan even as cruise berths spread to Ward Cove and other sites.",
      "From Ward Cove, treat downtown as a destination that costs transfer time. Highlights tours hit Creek Street, salmon viewing, and key photo stops efficiently; independent travellers should confirm shuttle schedules back to the terminal.",
    ],
    highlights: [
      "Iconic Creek Street boardwalks",
      "Seasonal salmon viewing",
      "Art, gifts, and local food",
      "Efficient on guided highlights tours",
    ],
    faqs: [
      {
        question: "Can I walk from Ward Cove to Creek Street?",
        answer:
          "No — it is several miles via road with no safe pedestrian route from the terminal.",
      },
      {
        question: "How much downtown time should I allow?",
        answer:
          "At least two hours on the ground plus transfers. Combo tours often provide 60–90 minutes focused downtown.",
      },
      {
        question: "What is the best shuttle option?",
        answer:
          "See our Ward Cove shuttle guide. Organised excursions bundle transport; cruise-ship shuttles vary by line.",
      },
    ],
    relatedSlugs: [
      "saxman-native-village",
      "lumberjack-show",
      "totem-bight",
    ],
  },
  {
    slug: "fishing",
    title: "Fishing Excursions from Ward Cove",
    shortTitle: "Fishing",
    summary:
      "Salmon and halibut charters, skiff adventures, and catch-focused wilderness experiences on Southeast Alaska waters.",
    duration: "4–6 hours",
    fitness: "Easy",
    distanceFromWardCove:
      "Charters depart from Ward Cove, Berth III area, or Ketchikan harbours depending on operator.",
    transferRequired: false,
    transferNote:
      "Many fishing outfits meet at or near the Ward Cove terminal; confirm pier and gear inclusion.",
    bestFor: [
      "Anglers wanting Alaska catch experiences",
      "Small groups and families fishing together",
      "Passengers with longer port days",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Half-day charters fit many schedules; full-day or catch-and-cook experiences need extended port time and strict turnaround planning.",
    cruiseSnapshot:
      "Ward Cove's working waterfront heritage suits fishing departures — you can be on the water quickly without crossing town first.",
    description: [
      "Southeast Alaska offers world-class salmon fishing by season — kings, silvers, pinks, and chums each have their window — plus halibut and rockfish on longer charters. Skiff trips feel intimate; larger party boats suit groups wanting shared atmosphere.",
      "Some operators add wilderness dining with your catch as the centrepiece — a premium experience that demands five or more hours ashore. Licenses, gear, and processing policies vary; clarify what is included when you enquire.",
      "Ward Cove passengers should confirm meeting point, cleaning/shipping options for fish, and whether the charter guarantees return before all-aboard. Fishing runs on fish and tide, not cruise schedules — choose operators experienced with port-day timing.",
    ],
    highlights: [
      "Salmon and halibut opportunities by season",
      "Small skiff and group charter options",
      "Ward Cove harbour departures available",
      "Optional catch-and-cook wilderness meals",
    ],
    faqs: [
      {
        question: "Do I need an Alaska fishing license?",
        answer:
          "Yes for most sport fishing. Many charters help arrange short-term licenses — confirm when booking.",
      },
      {
        question: "Can I ship my catch home?",
        answer:
          "Processing and shipping are often available for an additional fee. Allow time after the charter ends.",
      },
      {
        question: "Is fishing realistic on a five-hour port call?",
        answer:
          "Half-day trips can work with tight planning. Full experiences with dining need longer in port.",
      },
    ],
    relatedSlugs: ["misty-fjords", "ketchikan-wildlife-tour", "rainforest-walk"],
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getRelatedExcursions(slug: string): Excursion[] {
  const excursion = getExcursion(slug);
  if (!excursion) return [];
  return excursion.relatedSlugs
    .map((s) => getExcursion(s))
    .filter((e): e is Excursion => e !== undefined);
}
