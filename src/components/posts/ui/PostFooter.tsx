export default ({ tags }: any) => {
    return (
        <article className="flex mx-6 justify-between items-center w-[80%]">
            <i className="bi bi-paperclip text-2xl dark:text-darkText"></i>
            <div className="text-[gray]">
                {tags.map((i: string, index: number) => (
                    <span
                        key={index}
                        className="mr-1 text-sm lg:text-lg"
                    >
                        #{i}
                    </span>
                ))}
            </div>
        </article>
    );
};
