export default ({ tags }: any) => {
    return (
        <article className="flex mx-6 justify-between items-center">
            <i className="bi bi-paperclip text-2xl dark:text-darkText"></i>
            <div className="text-[gray]">
                {tags.map((i: string, index: number) => (
                    <span
                        key={index}
                        className="mr-1 text-[15px]"
                    >
                        #{i}
                    </span>
                ))}
            </div>
        </article>
    );
};
