import PostMain from "@/components/pages/thread/PostMain";
import PostFooter from "@/components/posts/ui/PostFooter";
import PostHeader from "@/components/posts/ui/PostHeader";
import { getPostAll } from "@/lib/post";
import { allPosts } from "contentlayer/gererated";
import { url } from "inspector";

export default ({ post }: any) => {
    return (
        <>
            <div className="w-full lg:w-[70%]">
                <PostHeader date={post.date} />
                <section
                    className="mb-5 w-full h-[500px] backdrop-opacity-50 pt-2 bg-fixed bg-cover bg-no-repeat bg-top flex justify-center items-center"
                    style={{ backgroundImage: `url(${post.img})` }}
                >
                    <h1 className="text-[white] text-xl text-center font-bold">{post.title}</h1>
                </section>

                <PostMain post={post} />
                <div className="w-full">
                    <PostFooter tags={post.tags} />
                </div>
            </div>
        </>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx")).map((p) => ({ params: { slugs: p._raw.flattenedPath.split("/") } })),
        fallback: "blocking",
    };
};
export const getStaticProps = async ({ params }: any) => {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slugs.join("/"));

    return {
        props: {
            post,
        },
    };
};
