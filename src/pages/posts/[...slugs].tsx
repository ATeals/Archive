import { allPosts } from "contentlayer/gererated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default ({ post }: any) => {
    const MDXComponent = useMDXComponent(post.body.code);
    return (
        <>
            <section className="w-full my-5 mb-[100px]">
                <article className="flex justify-between items-center px-3">
                    <div className="flex items-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/125727432?v=4"
                            alt="profileImg"
                            className="w-[40px] h-[40px] rounded-[50%] mr-2"
                        />
                        <h1>Ateals</h1>
                    </div>

                    <h4 className="text-sm "> 1시간 전</h4>
                </article>
                <article className="my-2 px-4">
                    <div className="prose prose-sm md:prose-lg">
                        <MDXComponent />
                    </div>
                </article>
                <article className="flex mx-6 justify-between">
                    <i className="bi bi-paperclip text-2xl"></i>
                    <div className="mr-2 text-[gray]">#a #b #c</div>
                </article>
            </section>
        </>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: [{ params: { slugs: ["hello", "find"] } }],
        fallback: "blocking",
    };
};
// allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx")).map((p) => ({ params: { slugs: p._raw.flattenedPath.split("/") } })),
export const getStaticProps = async ({ params }: any) => {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slugs.join("/"));

    return {
        props: {
            post,
        },
    };
};
