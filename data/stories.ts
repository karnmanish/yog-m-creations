import { Story } from "@/types";

// Structured content for Bhavatu Sarvam and StoryKahani.
// Add new entries here — the brand pages, homepage sections and
// individual [slug] pages all render from this array, nothing is
// hard-coded into the components themselves.
//
// youtube / instagram / facebook / tiktok are per-piece links (e.g.
// the direct video URL, or the specific reel). Leave any of them as
// "" until that piece is actually live on that platform — cards and
// detail pages automatically show it as "coming soon" rather than a
// dead link.

export const stories: Story[] = [
  // ───────────────────────── Bhavatu Sarvam ─────────────────────────
  {
    slug: "the-flute-that-called-the-river",
    brand: "bhavatu-sarvam",
    title: "The Flute That Called the River",
    category: "Krishna Leela",
    description:
      "A retelling of the evening Krishna's flute drew the Yamuna itself to stop and listen.",
    essence: "Even a river will pause for the right song.",
    thumbnail: "/images/bhavatu/flute-river.jpg",
    content:
      "In the hour when the light turns gold over Vrindavan, Krishna would lift his flute to his lips, and the cowherds say even the river forgot to flow.\n\nThis is a retelling of that evening — not as a miracle to be marvelled at, but as an invitation: what in your life stops when it hears something true?\n\nThe full narrated telling, with music and visuals, is available on video. A written version is here for anyone who prefers to sit with the words alone.",
    type: "video",
    duration: "7:52",
    date: "2025-01-10",
    featured: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "why-jagannath-has-no-hands",
    brand: "bhavatu-sarvam",
    title: "Why Jagannath Has No Hands",
    category: "Lord Jagannath",
    description:
      "The story behind the unfinished form of Lord Jagannath, and what incompleteness is asked to teach us.",
    essence: "What looks unfinished may already be whole.",
    thumbnail: "/images/bhavatu/jagannath-no-hands.jpg",
    content:
      "Every telling of Jagannath's form begins the same way: a king, a promise, a craftsman who asked not to be disturbed, and a curiosity that couldn't wait.\n\nWhat's left behind is a deity without fully carved hands — and centuries of devotion that never asked for the carving to be finished.\n\nThis retelling sits with that unfinished form as its own kind of teaching, rather than rushing to explain it away.",
    type: "story",
    duration: "6 min read",
    date: "2025-01-22",
    featured: true,
    readable: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "vitthal-standing-on-a-brick",
    brand: "bhavatu-sarvam",
    title: "Vitthal, Standing on a Brick",
    category: "Lord Vitthal",
    description:
      "The story of Pundalik, the brick, and why Vitthal has been content to simply wait ever since.",
    essence: "The devoted don't need to be rushed.",
    thumbnail: "/images/bhavatu/vitthal-brick.jpg",
    content:
      "Pundalik was tending to his parents when he heard a knock. Without looking up, he threw a brick toward the door and said, 'stand on this until I'm done.'\n\nIt is said Vitthal has been standing there ever since — patient, unhurried, waiting on devotion rather than demanding it.\n\nA short animated telling of the story, made for anyone who has ever had to ask someone to wait a little longer.",
    type: "animation",
    duration: "3:15",
    date: "2025-02-04",
    featured: false,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "the-colour-radha-gave-the-world",
    brand: "bhavatu-sarvam",
    title: "The Colour Radha Gave the World",
    category: "Radha Raman",
    description:
      "A gentle telling of Radha and Krishna's play with colour, and how Holi carries that story forward.",
    essence: "Some festivals are really just old love stories.",
    thumbnail: "/images/bhavatu/radha-colour.jpg",
    content:
      "Long before Holi became a festival of streets and strangers, it is remembered as a private game — Radha and Krishna, colour, and the particular joy of being playfully caught.\n\nThis telling follows that thread quietly, without rushing to the festival we know today, letting the intimacy of the original story stay intact.",
    type: "story",
    duration: "5 min read",
    date: "2025-02-14",
    featured: false,
    readable: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "radha-rani-and-the-unfinished-song",
    brand: "bhavatu-sarvam",
    title: "Radha Rani and the Unfinished Song",
    category: "Radha Rani",
    description:
      "A devotional retelling built around a song Radha never finished singing — and why that felt right.",
    essence: "Not every longing needs an ending.",
    thumbnail: "/images/bhavatu/radha-rani-song.jpg",
    content:
      "There's a version of this story told in Vraj where Radha begins a song and simply lets it trail off, unfinished, into the evening air.\n\nThis retelling treats that incompleteness as devotion itself — the reaching, not the arriving, being the whole point.",
    type: "video",
    duration: "6:40",
    date: "2025-03-01",
    featured: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "the-devotee-and-the-river",
    brand: "bhavatu-sarvam",
    title: "The Devotee and the River",
    category: "Devotional Stories",
    description:
      "An old story of surrender, told through the quiet banks of a river that asks for nothing and gives everything.",
    essence: "Surrender looks a lot like a river, if you watch it long enough.",
    thumbnail: "/images/bhavatu/river-devotee.jpg",
    content:
      "There's an old teaching that says the river never asks where it's going — it simply continues, and the going becomes the arriving.\n\nThis story follows a devotee who spent a lifetime trying to control the outcome of their devotion, and the single afternoon by a river that finally let that go.",
    type: "video",
    duration: "8:24",
    date: "2025-01-14",
    featured: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "why-the-lamp-is-lit-first",
    brand: "bhavatu-sarvam",
    title: "Why the Lamp Is Lit First",
    category: "Spiritual Wisdom",
    description:
      "A short retelling of why light comes before word in so many traditions — and what it asks of us.",
    essence: "Light the lamp before you say a word.",
    thumbnail: "/images/bhavatu/lamp-first.jpg",
    content:
      "Before the first word of most rituals, there is a flame. Not decoration — an ordering: see clearly first, speak second.\n\nThis piece is a short meditation on that ordering, and on what changes when we try to live it the other way around, speaking before we've let anything become clear.",
    type: "story",
    duration: "5 min read",
    date: "2025-02-02",
    featured: true,
    readable: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "the-sage-who-kept-walking",
    brand: "bhavatu-sarvam",
    title: "The Sage Who Kept Walking",
    category: "Spiritual Wisdom",
    description:
      "A wandering teacher, a question with no answer, and the peace of simply continuing.",
    essence: "Some questions are meant to be walked with, not solved.",
    thumbnail: "/images/bhavatu/sage-walking.jpg",
    content:
      "A young seeker once followed a wandering teacher for three days, asking the same unanswerable question each morning. On the third evening, the teacher finally spoke — not an answer, but an observation about the walking itself.\n\nThis retelling sits inside that walk rather than rushing toward a resolution the original story never offered.",
    type: "video",
    duration: "11:05",
    date: "2025-03-10",
    featured: false,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "the-cowherd-who-carried-the-mountain",
    brand: "bhavatu-sarvam",
    title: "The Cowherd Who Carried the Mountain",
    category: "Animated Stories",
    description:
      "An animated telling of Govardhan being lifted — less about the mountain, more about what it means to shelter others.",
    essence: "Protection doesn't have to look like strength.",
    thumbnail: "/images/bhavatu/govardhan.jpg",
    content:
      "The story of Govardhan is usually told as a feat — a mountain, a finger, a storm outlasted. This animated version lingers instead on what it felt like to stand underneath, sheltered by something larger than the storm.\n\nMade for anyone who has ever needed shelter, or been asked to provide it.",
    type: "animation",
    duration: "4:08",
    date: "2025-03-18",
    featured: false,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "a-single-leaf-offering",
    brand: "bhavatu-sarvam",
    title: "A Single Leaf Offering",
    category: "Short Stories",
    description:
      "A very short retelling on the idea that devotion was never about the size of the offering.",
    essence: "One leaf, given fully, is enough.",
    thumbnail: "/images/bhavatu/leaf-offering.jpg",
    content:
      "A verse often repeated says that even a leaf, a flower, a fruit or water, offered with love, is received in full. This short piece sits with that idea for exactly as long as it takes to read it — no longer.",
    type: "story",
    duration: "2 min read",
    date: "2025-03-25",
    featured: false,
    readable: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  // ───────────────────────── StoryKahani ─────────────────────────
  {
    slug: "the-monk-who-counted-slowly",
    brand: "storykahani",
    title: "The Monk Who Counted Slowly",
    category: "Tiny Monk Tales",
    description:
      "A tiny tale about a monk who counted his steps on purpose — and what the counting was actually for.",
    essence: "Slow is a decision, not a limitation.",
    thumbnail: "/images/storykahani/monk-counting.jpg",
    content:
      "The young monk asked why the old one counted his steps so slowly. 'I'm not counting steps,' the old monk said. 'I'm counting how many times I remembered I was walking.'\n\nA sixty-second animated tale, made for the days that move too fast to notice.",
    type: "animation",
    duration: "1:02",
    date: "2025-01-08",
    featured: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "the-jar-that-was-never-full",
    brand: "storykahani",
    title: "The Jar That Was Never Full",
    category: "Silent Stories",
    description:
      "A tiny tale about wanting, told in under two minutes — and staying with you far longer.",
    essence: "Full is a feeling, not a measurement.",
    thumbnail: "/images/storykahani/jar-never-full.jpg",
    content:
      "No dialogue, no narration — just a jar, a hand, and the particular restlessness of always reaching for one more thing.\n\nA silent story told entirely through image and motion, about wanting what we already have.",
    type: "animation",
    duration: "1:48",
    date: "2025-01-20",
    featured: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "the-kite-on-the-terrace",
    brand: "storykahani",
    title: "The Kite on the Terrace",
    category: "Childhood Memories",
    description:
      "A short story about a terrace, a kite string, and a summer that ended before anyone was ready.",
    essence: "Some strings we never really let go of.",
    thumbnail: "/images/storykahani/kite-terrace.jpg",
    content:
      "Every summer had the same terrace, the same borrowed spool of string, the same argument about whose kite flew higher.\n\nThis story follows one of those summers to its last afternoon, and to the string that got left tangled on the terrace railing long after the season ended.",
    type: "story",
    duration: "6 min read",
    date: "2025-01-29",
    featured: true,
    readable: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "the-well-at-the-edge-of-the-village",
    brand: "storykahani",
    title: "The Well at the Edge of the Village",
    category: "Village Stories",
    description:
      "A quiet village story about the well everyone stopped using, and the one person who still visited it.",
    essence: "A place doesn't stop mattering just because it's quiet now.",
    thumbnail: "/images/storykahani/village-well.jpg",
    content:
      "The pipeline came, and the village stopped walking to the old well. All but one — an old woman who still went every evening, not for the water, but for the walk, and for what the walk remembered.\n\nA short story about the places we keep visiting long after their original purpose is gone.",
    type: "story",
    duration: "7 min read",
    date: "2025-02-06",
    featured: false,
    readable: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "grandmothers-last-letter",
    brand: "storykahani",
    title: "Grandmother's Last Letter",
    category: "Emotional Stories",
    description:
      "A short story about the things we mean to say, and the ones we finally do.",
    essence: "Say it before it becomes a letter.",
    thumbnail: "/images/storykahani/grandmothers-letter.jpg",
    content:
      "The letter arrived three weeks after the funeral, delayed by nothing more than an address written in an unfamiliar hand.\n\nIt didn't say anything unexpected. That was, somehow, the hardest part.",
    type: "story",
    duration: "7 min read",
    date: "2025-02-18",
    featured: true,
    readable: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "two-cups-of-tea",
    brand: "storykahani",
    title: "Two Cups of Tea",
    category: "Emotional Stories",
    description:
      "A quiet moment between strangers on a train platform, and the story neither of them expected to tell.",
    essence: "Strangers make good listeners, for exactly one stop.",
    thumbnail: "/images/storykahani/two-cups-tea.jpg",
    content:
      "Two cups of tea, bought by accident for two different people who ended up sharing a bench instead of a compartment.\n\nAn animated short about the conversations that only seem to happen when you know you'll never see the other person again.",
    type: "animation",
    duration: "2:36",
    date: "2025-03-05",
    featured: false,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "what-the-schoolbag-remembers",
    brand: "storykahani",
    title: "What the Schoolbag Remembers",
    category: "Life Lessons",
    description:
      "A tiny tale about an old schoolbag found in storage, and everything it quietly held onto.",
    essence: "We keep more than we remember keeping.",
    thumbnail: "/images/storykahani/schoolbag.jpg",
    content:
      "It turns up during a move, faded and too small to have ever fit an adult shoulder. Inside: a broken pencil, a folded note never delivered, and a life lesson nobody meant to pack.\n\nA short story about the things that outlast the years they belonged to.",
    type: "story",
    duration: "5 min read",
    date: "2025-03-12",
    featured: false,
    readable: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "the-paper-boat-that-didnt-sink",
    brand: "storykahani",
    title: "The Paper Boat That Didn't Sink",
    category: "Paper Animation",
    description:
      "A paper-animation short about a child's boat that somehow survives the whole monsoon, against every expectation.",
    essence: "Some things hold together longer than they should.",
    thumbnail: "/images/storykahani/paper-boat.jpg",
    content:
      "Made entirely in stop-motion paper animation, this short follows a single paper boat through gutter, drain and puddle — refusing, somehow, to fall apart.\n\nA small, hopeful story about things that hold together longer than expected.",
    type: "animation",
    duration: "2:10",
    date: "2025-03-20",
    featured: false,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "a-room-built-from-memory",
    brand: "storykahani",
    title: "A Room Built From Memory",
    category: "3D Stories",
    description:
      "A 3D-animated short reconstructing a childhood room entirely from memory, imperfections included.",
    essence: "Memory rebuilds a room, but never quite to scale.",
    thumbnail: "/images/storykahani/3d-room.jpg",
    content:
      "Every object in this room was modelled from memory alone — which means the proportions are wrong, the colours are guessed, and it feels, somehow, more true than a photograph would have.\n\nA 3D-animated meditation on how memory actually works.",
    type: "animation",
    duration: "3:44",
    date: "2025-04-02",
    featured: false,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "the-radio-that-only-played-one-station",
    brand: "storykahani",
    title: "The Radio That Only Played One Station",
    category: "Nostalgic Stories",
    description:
      "A nostalgic short story about an old radio, a fixed dial, and a family that never thought to change it.",
    essence: "Some things are better left un-fixed.",
    thumbnail: "/images/storykahani/old-radio.jpg",
    content:
      "The dial had been stuck on the same station for as long as anyone could remember, and no one in the house ever tried to fix it. Years later, that one station is the only sound that still feels like home.\n\nA short story about the small, broken things we choose to keep exactly as they are.",
    type: "story",
    duration: "5 min read",
    date: "2025-04-10",
    featured: false,
    readable: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  {
    slug: "a-conversation-in-six-lines",
    brand: "storykahani",
    title: "A Conversation in Six Lines",
    category: "Short Stories",
    description:
      "A very short story told entirely in six lines of dialogue between two old friends.",
    essence: "Some friendships need very few words.",
    thumbnail: "/images/storykahani/six-lines.jpg",
    content:
      "Six lines. Two friends. No stage directions. Read it once quickly, then again slowly — it changes the second time.",
    type: "story",
    duration: "1 min read",
    date: "2025-04-18",
    featured: false,
    readable: true,
    youtube: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
];

export const getFeaturedStories = (brand: Story["brand"]) =>
  stories.filter((s) => s.brand === brand && s.featured);

export const getStoriesByBrand = (brand: Story["brand"]) =>
  stories.filter((s) => s.brand === brand);

export const getStoryBySlug = (brand: Story["brand"], slug: string) =>
  stories.find((s) => s.brand === brand && s.slug === slug);

export const getRelatedStories = (story: Story, limit = 3) => {
  const sameCategory = stories.filter(
    (s) =>
      s.brand === story.brand &&
      s.slug !== story.slug &&
      s.category === story.category
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const rest = stories.filter(
    (s) =>
      s.brand === story.brand &&
      s.slug !== story.slug &&
      s.category !== story.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
};

// Whether a card should show the Read button: explicit "story" pieces
// always do, and anything else can opt in with `readable: true`.
export const isReadable = (story: Story) =>
  story.type === "story" || story.readable === true;
