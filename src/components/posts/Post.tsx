import { allPosts } from "contentlayer/gererated";

import PostHeader from "./ui/PostHeader";
import PostMain from "./ui/PostMain";
import PostFooter from "./ui/PostFooter";

export default () => {
    return (
        <>
            <section className="w-full my-5">
                <PostHeader />
                <PostMain post={allPosts[1]} />
                <PostFooter />
            </section>
            <hr />
        </>
    );
};
