import type { Post } from "../types";
import { slugify } from "../utils/format";

const raw: Omit<Post, "slug" | "id">[] = [
    {
        title: "Being together and socializing",
        author: "Ravi Prakash",
        avatar: "https://i.pravatar.cc/80?img=12",
        category: "Python",
        tags: ["Python", "Machine Learning"],
        date: "2024-05-14",
        excerpt:
            "Stay focused and remember we design the best News and Magazine themes. The key to success is to keep your head above the water…",
        content:
            `We design delightful experiences.\n\n**Why live smooth? Why live rough?** The key is to keep your head above the water, never give up. Watch your back, but more importantly: **be kind**.\n\n> Don’t wait. The time will never be just right.\n\nHere are a few quick tips:\n\n- Call a friend today\n- Plan a small meetup\n- Go for a short walk and smile at strangers`,
    },
    {
        title: "Family Tea Time",
        author: "Ravi Prakash",
        avatar: "https://i.pravatar.cc/80?img=22",
        category: "Machine Learning",
        tags: ["Machine Learning", "AI"],
        date: "2024-06-01",
        excerpt:
            "You should never complain; life is amazing. Surround yourself with angels and good tea.",
        content:
            `Family time is quality time. A warm cup of tea can turn evenings into memories.\n\n### Make it special\n- Put phones away\n- Ask open questions\n- Play a quick board game\n\nLife is what you make it.`,
    },
    {
        title: "Design habits for 2025",
        author: "RP2025AI",
        avatar: "https://i.pravatar.cc/80?img=5",
        category: "Data Modeling",
        tags: ["AI", "Machine Learning"],
        date: "2025-01-15",
        excerpt:
            "Small, consistent habits beat big, unsustainable sprints. Here are my favorites for the new year…",
        content:
            `Create a 30‑minute daily **focus block**.\n\n- Sketch before pixels\n- Name layers and components\n- Reuse patterns\n\nConsistency compounds.`,
    },
    {
        title: "How to write every day",
        author: "RP2025AI",
        avatar: "https://i.pravatar.cc/80?img=9",
        category: "AI",
        tags: ["Data Modeling", "AI"],
        date: "2025-02-02",
        excerpt:
            "Daily writing doesn’t require hours — just a reliable ritual and a gentle start.",
        content:
            `Start tiny: **5 minutes**. Open a blank file, write one paragraph.\n\n- Keep a running ideas list\n- Lower the bar for ‘done’\n- Publish something weekly`,
    },
];


export const posts: Post[] = raw.map((r, i) => ({
    id: i + 1,
    slug: slugify(r.title),
    ...r,
}));


// Derived collections
export const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
export const allCategories = Array.from(new Set(posts.map((p) => p.category))).sort();