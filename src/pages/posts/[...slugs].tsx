import { allPosts } from "contentlayer/gererated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default ({ post }: any) => {
    const MDXComponent = useMDXComponent(post.body.code);
    return (
        <>
            <MDXComponent />
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
