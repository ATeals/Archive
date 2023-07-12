import { useMDXComponent } from "next-contentlayer/hooks";

export default ({ post }: any) => {
    const MDXComponent = useMDXComponent(post.body.code);
    return (
        <article className="py-2 px-5 pb-5 bg-[white] dark:bg-darkBg">
            <div className="prose prose-sm dark:prose-invert dark:prose-p:text-darkText prose-p:mb-7 [&>p>a]:break-words">
                <MDXComponent />
            </div>
        </article>
    );
};
