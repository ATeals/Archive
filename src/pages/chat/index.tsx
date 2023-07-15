import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export default () => {
    const [input, setInput] = useState<undefined | string>();
    const [post, setPost] = useState("");

    const onChange = (e: any) => {
        setInput(e.target.value);
    };

    const addblockquote = () => {
        setInput((e) => (e += "\n" + "```language\n\n```"));
    };

    useEffect(() => {
        if (typeof input === "string") setPost(input.replaceAll("\n", "\n\n"));
    }, [input]);

    return (
        <main className="xl:flex">
            {/* <div>
                <input
                    type="button"
                    value={"버튼!"}
                    className="bg-[gray] text-[white]"
                    onClick={addblockquote}
                />
            </div> */}

            <section className="w-full h-screen p-2 ">
                <textarea
                    className="w-full h-[90%] p-2 resize-none dark:bg-darkBg dark:text-darkText"
                    value={input}
                    onChange={onChange}
                    placeholder="✍️ write....."
                />
                <hr className="m-5" />
            </section>

            <section className="w-full h-screen p-2">
                {true && (
                    <section className="prose h-[90%] dark:prose-invert">
                        <ReactMarkdown
                            children={post}
                            remarkPlugins={[remarkGfm]}
                        ></ReactMarkdown>
                    </section>
                )}
            </section>
        </main>
    );
};
