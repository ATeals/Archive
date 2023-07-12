import { useMDXComponent } from "next-contentlayer/hooks";

export default ({ post }: any) => {
    const MDXComponent = useMDXComponent(post.body.code);
    return (
        <article className="py-2 px-5 pb-5 bg-[white]">
            <div className="prose prose-sm [&>p>a]:break-words">
                <MDXComponent />
            </div>
        </article>
    );
};
