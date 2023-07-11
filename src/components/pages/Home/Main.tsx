import Post from "@/components/posts/Post";
import { allPosts } from "contentlayer/gererated";

export default () => {
    return (
        <main className="w-full flex flex-col mb-[100px] scroll-smooth">
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
        </main>
    );
};
