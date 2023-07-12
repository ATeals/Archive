import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ match, children, ...props }: any) => {
    const onclick = () => {
        if (window) {
            window.navigator.clipboard.writeText(children);
        }
    };

    return (
        <>
            <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                {...props}
                style={vscDarkPlus}
                className=""
            >
                {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
            {match ? (
                <button
                    onClick={onclick}
                    className="transition-all duration-200 opacity-0 group-hover:opacity-100 absolute bottom-0 right-0 text-[gray] p-1 text-[18px] rounded-[8px] m-5"
                >
                    <i className="bi bi-clipboard"></i>
                </button>
            ) : null}
        </>
    );
};

export const code = ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
        <CodeBlock
            match={match}
            children={children}
            {...props}
            className=""
        />
    ) : (
        <code
            className="text-[gray]"
            {...props}
        >
            {children}
        </code>
    );
};

export const pre = ({ node, children, ...props }: any) => {
    return (
        <pre
            className="group bg-[#1E1E1E] mx-2 my-8 py-8 p-1 rounded-[10px] relative hover:[&>button]:scale-105"
            {...props}
        >
            {children}
        </pre>
    );
};
