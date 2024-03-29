import Link from "next/link";
import { Post } from "contentlayer/gererated";

export default ({ post }: { post: Post }) => {
    return (
        <section className="overflow-hidden my-2 ml-8 mr-4 pl-5 border-l-2 border-l-[black] dark:border-l-darkText border-solid">
            <Link href={`thread/${post._raw.flattenedPath}`}>
                <img
                    src={post.img}
                    alt="img"
                    className="object-cover w-full mb-10"
                />

                <h1 className="text-lg dark:text-darkText lg:text-2xl">{post.title}</h1>
                <h4 className="text-sm text-[gray] lg:text-lg">{post.description}</h4>
            </Link>
        </section>
    );
};
