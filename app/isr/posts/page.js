import { getPosts } from "@/apis/apis";
import Link from "next/link";

export default async function Posts() {
    const posts = await getPosts();
    // const posts = await getPosts("revalidated");

    return (
        <div>
            <h1 className="text-yellow-400 ">Incremental Static Re generation</h1>
            <h4>All posts</h4>
            <div className="mt-4">
                <ul>
                    {posts.map((post) => (
                        <Link
                            prefetch={false}
                            className="block hover:border-0"
                            href={`/isr/posts/${post.id}`}
                            key={post.id}
                        >
                            {post.id}. {post.title}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}
