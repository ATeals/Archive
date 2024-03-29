import { useMDXComponent } from "next-contentlayer/hooks";
import { code, pre } from "@/components/posts/component/Code";

export default ({ post }: any) => {
    const MDXComponent = useMDXComponent(post.body.code);
    return (
        <article className="w-full py-2 px-5 pb-5 bg-[white] dark:bg-darkBg flex justify-center box-border">
            <div className="w-full prose prose-sm md:prose-lg lg:prose-xl dark:prose-invert dark:prose-p:text-darkText prose-p:mb-7 [&>p>a]:break-words">
                <MDXComponent components={{ code, pre }} />
            </div>
        </article>
    );
};
