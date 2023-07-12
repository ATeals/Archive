import { Post as PostItem } from "@/components/posts/Post";
import { useForm } from "@/hook/useForm";
import { getPostAll } from "@/lib/post";
import { Post } from "contentlayer/gererated";
import { useEffect, useState } from "react";
import { addSyntheticLeadingComment } from "typescript";

export default () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [{ search }, onChange, onSubmit] = useForm({ search: "" }, () => {});

    useEffect(() => {
        setPosts(search === "" ? getPostAll : getPostAll.filter((post) => post.tags?.some((tag) => tag.includes(search))));
    }, [search]);

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="flex justify-center items-center m-5"
            >
                <input
                    type="text"
                    name="search"
                    onChange={onChange}
                    className="border-black border-solid border w-full mr-3"
                />
                <button onClick={onSubmit}>
                    <i className="bi bi-search"></i>
                </button>
            </form>
            <section className="mx-3">
                {posts.map((post) => (
                    <PostItem
                        key={post._id}
                        post={post}
                    />
                ))}
            </section>
        </>
    );
};
