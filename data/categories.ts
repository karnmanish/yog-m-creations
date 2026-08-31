// Category lists for the two storytelling brands.
// Filter UIs read from these arrays — add a category here and it
// shows up in the filter automatically; nothing to touch in components.

export const bhavatuSarvamCategories = [
  "Krishna Leela",
  "Lord Jagannath",
  "Lord Vitthal",
  "Radha Raman",
  "Radha Rani",
  "Devotional Stories",
  "Spiritual Wisdom",
  "Animated Stories",
  "Short Stories",
] as const;

export const storyKahaniCategories = [
  "Tiny Monk Tales",
  "Silent Stories",
  "Childhood Memories",
  "Village Stories",
  "Emotional Stories",
  "Life Lessons",
  "Paper Animation",
  "3D Stories",
  "Nostalgic Stories",
  "Short Stories",
] as const;

export type BhavatuSarvamCategory = (typeof bhavatuSarvamCategories)[number];
export type StoryKahaniCategory = (typeof storyKahaniCategories)[number];

export const ALL_CATEGORIES = "All" as const;
