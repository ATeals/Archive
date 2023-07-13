import { Post } from "@/components/posts/Post";
import { getPostAll } from "@/lib/post";

export default () => {
    const posts = getPostAll.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return (
        <section className="w-full flex flex-col mb-[100px] scroll-smooth">
            {posts.map((post) => (
                <Post
                    key={post._id}
                    post={post}
                />
            ))}
        </section>
    );
};
