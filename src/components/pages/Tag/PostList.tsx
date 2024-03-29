import { Post as PostItem } from "@/components/posts/Post";
import { useForm } from "@/hook/useForm";
import { getPostAll, getTagAll } from "@/lib/post";
import { PostSimple } from "@/lib/post/index.type";
import { useEffect, useState } from "react";
import TagList from "./TagList";
import { useRouter } from "next/router";

export default () => {
    const [posts, setPosts] = useState<PostSimple[]>([]);
    const { tags }: any = useRouter().query;
    const [{ search }, onChange, onSubmit] = useForm({ search: "" }, () => {});

    useEffect(() => {
        setPosts(search === "" ? getPostAll : getPostAll.filter((post) => post.tags?.some((tag) => tag.toUpperCase().includes(search.toUpperCase()))));
    }, [search]);

    useEffect(() => {
        if (tags) setPosts(getPostAll.filter((post) => post.tags?.includes(tags)));
    }, [tags]);
    return (
        <>
            <form
                onSubmit={onSubmit}
                className="w-full p-10"
            >
                <input
                    type="text"
                    name="search"
                    onChange={onChange}
                    className="border-black border-solid border w-full h-10 px-3 text-[20px] dark:bg-darkText"
                />
            </form>
            <section className="mx-6">
                <TagList tags={getTagAll} />
            </section>
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
