import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
// const code = " ```js \n  const a = 1 \n ``` ";
const post = `

# hello

## myname

asdsdasd

- asd
- asdasdas

1. asd

2. asdas

> asdasdasdsda asdad

www.naver.com


`;

const Markdown = () => {
    return (
        <>
            <section className="prose prose-sm dark:prose-invert">
                <ReactMarkdown
                    children={post}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <>
                                    <SyntaxHighlighter
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                        style={vscDarkPlus}
                                        className="text-[15px] relative"
                                    >
                                        {String(children).replace(/\n$/, "")}
                                    </SyntaxHighlighter>
                                </>
                            ) : (
                                <code
                                    className="text-[gray]"
                                    {...props}
                                >
                                    {children}
                                </code>
                            );
                        },
                    }}
                ></ReactMarkdown>
            </section>
        </>
    );
};

export default Markdown;
