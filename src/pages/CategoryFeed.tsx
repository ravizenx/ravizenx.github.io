import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";


export default function CategoryFeed() {
    const { name } = useParams();
    const filtered = posts.filter((p) => p.category === name);
    return (
        <div>
            <h2 className="section-title">Category: {name}</h2>
            <main className="posts">
                {filtered.map((p) => <PostCard key={p.id} post={p} />)}
                {filtered.length === 0 && <p>No posts in this category yet.</p>}
            </main>
        </div>
    );
}