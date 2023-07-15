import Link from "next/link";

export default ({ tags }: { tags: string[] }) => {
    return (
        <>
            {tags.map((tag, index) => (
                <Link
                    key={index}
                    href={`/tag?tags=${tag}`}
                >
                    <span className="mr-1 text-[15px]">#{tag}</span>
                </Link>
            ))}
        </>
    );
};
