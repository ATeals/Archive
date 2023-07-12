import Post from "@/components/posts/Post";
import { getPostAll } from "@/lib/post";

export default () => {
    return (
        <main className="w-full flex flex-col mb-[100px] scroll-smooth">
            {/* <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} />
            <Post post={allPosts[1]} /> */}
            {getPostAll.map((post) => (
                <Post
                    key={post._id}
                    post={post}
                />
            ))}
        </main>
    );
};
