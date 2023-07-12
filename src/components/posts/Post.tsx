import { allPosts } from "contentlayer/gererated";

import PostHeader from "./ui/PostHeader";
import PostMain from "./ui/PostMain";
import PostFooter from "./ui/PostFooter";

export default ({ post }: any) => {
    return (
        <>
            <section className="w-full my-5">
                <PostHeader date={post.date} />
                <PostMain post={post} />
                <PostFooter tags={post.tags} />
            </section>
            <hr className="border-gray" />
        </>
    );
};
