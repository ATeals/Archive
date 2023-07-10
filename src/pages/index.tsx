import { allPosts } from "contentlayer/gererated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default () => {
    const MDXComponent = useMDXComponent(allPosts[0].body.code);
    return (
        <>
            <h1 className="text-5xl">hello</h1>
            <section className="prose">
                <MDXComponent />
            </section>
        </>
    );
};
