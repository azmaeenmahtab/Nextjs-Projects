import { getAllPosts } from "../../../lib/getAllPost";
import Link from "next/link";
export default async function Posts() {
    const posts = await getAllPosts();

    return (
        <div className="max-w-2xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">All Posts</h1>
            <ul className="space-y-6">
                {posts.map((post) => (
                    <li key={post.id} className="border rounded-lg p-6 shadow-sm bg-white">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-2"> 
                            <Link href={`/posts/${post.id}`}> {post.title} </Link></h2>
                        <p className="text-gray-700">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}