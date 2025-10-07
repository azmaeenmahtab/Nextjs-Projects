import getPostComments from "../../../../lib/getPostComments"
import getPost from "../../../../lib/getPost"
import Comments from "@/app/components/Comments";
import { Suspense } from "react";
import { get } from "http";
import { getAllPosts } from "../../../../lib/getAllPost";

// Dynamic metadata generation
export async function generateMetadata({ params }) {
    const {id } = params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    }
}

// Post Page Component with comments fetching
export default async function PostPage({ params }) {
    const { id } = params;

    const postPromise = getPost(id);
    const commentsPromise = getPostComments(id);

    const post = await postPromise;

 

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700">{post.body}</p>
            <Suspense fallback={<div>Loading comments...</div>}>
                <Comments promise={commentsPromise} />
            </Suspense>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}
