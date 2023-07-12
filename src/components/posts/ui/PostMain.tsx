import Link from "next/link";
import { Post } from "contentlayer/gererated";

export default ({ post }: { post: Post }) => {
    return (
        <section className="overflow-hidden my-2 ml-8 mr-4 pl-5 border-l-2 border-l-[black] border-solid">
            <Link href={`thread/${post._raw.flattenedPath}`}>
                <article className="w-full h-[200px] flex justify-center mb-5">
                    <img
                        src={post.img}
                        alt="img"
                        className="object-cover"
                    />
                </article>

                <h1 className="text-lg">{post.title}</h1>
                <h4 className="text-sm text-[gray]">{post.description}</h4>
            </Link>
        </section>
    );
};
