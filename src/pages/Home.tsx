import { useMemo, useState } from "react";
import { posts as allPosts, allCategories, allTags } from "../data/posts";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";


export default function Home() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<string | "all">("all");
    const [tag, setTag] = useState<string | "all">("all");
    const [page, setPage] = useState(1);
    const pageSize = 5;


    const filtered = useMemo(() => {
        const q = query.toLowerCase();
        return allPosts.filter((p) => {
            const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
            const matchesCategory = category === "all" || p.category === category;
            const matchesTag = tag === "all" || p.tags.includes(tag as string);
            return matchesQuery && matchesCategory && matchesTag;
        });
    }, [query, category, tag]);


    const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const start = (page - 1) * pageSize;
    const pagePosts = filtered.slice(start, start + pageSize);


    return (
        <div>
            <div className="filters">
                <SearchBar onChange={(q) => { setPage(1); setQuery(q); }} />
                <select value={category} onChange={(e) => { setCategory(e.target.value as any); setPage(1); }}>
                    <option value="all">All Categories</option>
                    {allCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <select value={tag} onChange={(e) => { setTag(e.target.value as any); setPage(1); }}>
                    <option value="all">All Tags</option>
                    {allTags.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
            </div>


            <main className="posts">
                {pagePosts.map((p) => <PostCard key={p.id} post={p} />)}
                {pagePosts.length === 0 && <p>No posts match your filters.</p>}
            </main>


            <Pagination page={page} pages={pages} onPage={setPage} />
        </div>
    );
}