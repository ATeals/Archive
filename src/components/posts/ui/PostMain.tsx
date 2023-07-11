import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

export default ({ post }: any) => {
    const MDXComponent = useMDXComponent(post.body.code);
    return (
        <article className="h-[500px] overflow-hidden my-2 ml-8 mr-4 pl-5 border-l-2 border-l-[black] border-solid">
            <Link href={`thread/${post._raw.flattenedPath}`}>
                <div className="prose prose-sm">
                    <MDXComponent />
                </div>
            </Link>
        </article>
    );
};
